import os
import uuid
import asyncio
import logging

import torch
import whisper

from typing import Any, Optional, List
from datetime import datetime

from pydub import AudioSegment

from fastapi import APIRouter, FastAPI, File, Form, UploadFile, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from faster_whisper import WhisperModel

from pydantic import BaseModel, Field


# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(threadName)10s %(levelname)5s] %(filename)s.%(funcName)s:%(lineno)d: %(message)s"
)

logger = logging.getLogger(__name__)

router = APIRouter()

def load_model(name: str) -> WhisperModel:
    """Load Whisper model on application startup with CUDA support"""
    try:
        # Check for CUDA availability
        if torch.cuda.is_available():
            device = "cuda"
            logger.info(f"CUDA is available! Using GPU: {torch.cuda.get_device_name(0)}")
            logger.info(f"CUDA memory: {torch.cuda.get_device_properties(0).total_memory / 1024**3:.1f} GB")
        else:
            device = "cpu"
            logger.warning("CUDA not available, using CPU")
        
        logger.info(f"Loading Whisper model on {device}...")
        whisper_model = WhisperModel(
            name,
            device=device,
            compute_type="float16",
            # compute_type="float32"
        )
        
        logger.info("Whisper model loaded successfully")
        
        # Log device info
        if device == "cuda":
            logger.info(f"GPU memory usage after model load: {torch.cuda.memory_allocated() / 1024**3:.2f} GB")
        
        return whisper_model
    except Exception as e:
        logger.error(f"Failed to load Whisper model: {e}")
        raise e

# Pydantic models for request/response
class TranscriptionResponse(BaseModel):
    """Response model for transcription"""
    text: str = Field(..., description="The transcribed text")
    segments: Optional[List[Any]] = Field(None, description="Detailed transcription segments")
    timestamp: datetime = Field(default_factory=datetime.now, description="Transcription timestamp")
    duration: float = Field(..., description="Duration of the audio in seconds")

class TranscriptionRequest(BaseModel):
    """Request model for transcription settings"""
    language: Optional[str] = Field(None, description="Language code (e.g., 'en', 'es', 'fr')")
    task: str = Field("transcribe", description="Task type: 'transcribe' or 'translate'")
    temperature: float = Field(0.0, description="Temperature for sampling (0.0 to 1.0)")
    include_segments: bool = Field(False, description="Include detailed segments in response")

class HealthResponse(BaseModel):
    """Health check response"""
    status: str = Field(..., description="Service status")
    model_loaded: bool = Field(..., description="Whether Whisper model is loaded")
    timestamp: datetime = Field(default_factory=datetime.now)

# Supported audio formats
SUPPORTED_FORMATS = {'.mp3', '.wav', '.m4a', '.mp4', '.mpeg', '.mpga', '.webm', '.ogg', '.flac'}

def save_temp_file(upload_file: UploadFile) -> str:
    """Save uploaded file to a temporary file and return its path"""
    if upload_file.filename is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Filename is required"
        )
    
    filename = uuid.uuid4()
    extension = os.path.splitext(upload_file.filename)[-1]
    filepath = f"/tmp/{filename}{extension}"
    
    with open(filepath, 'wb') as f:
        f.write(upload_file.file.read())

    return filepath

def compress_audio(filepath: str) -> str:
    filename = os.path.splitext(filepath)[0]
    filedir = os.path.dirname(filepath)
    
    audio = AudioSegment.from_file(filepath)
    audio = audio.set_frame_rate(16000).set_channels(1)
    
    compressed_path = os.path.join(
        filedir,
        f"{filename}_compressed.mp3"
    )
    
    audio.export(compressed_path, format="mp3", bitrate="32k")
    return compressed_path
    

@router.post(
    path="/transcriptions",
    response_model=TranscriptionResponse,
    status_code=status.HTTP_200_OK,
    summary="Transcribe audio to text",
)
async def transcriptions (
    file: UploadFile = File(..., description="Audio file to transcriptions"),
    model: Optional[str] = Form("base", description="Whisper model size (tiny, base, small, medium, large)"),
    language: Optional[str] = Form("zh", description="Language code (e.g., 'en', 'es', 'fr')")
):
    """
    Transcribe audio file to text using Whisper
    
    - **file**: Audio file (supported formats: mp3, wav, m4a, mp4, mpeg, mpga, webm, ogg, flac)
    - **model**: Whisper model size (default: 'base')
    - **language**: Optional language code (e.g., 'en', 'es', 'fr')
    """
    
    include_segments = False

    whisper_model = load_model(model if model else "base")
    if whisper_model is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Whisper model not loaded"
        )
    
    # Validate file format
    if file.filename is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Filename is required"
        )
    
    file_extension = os.path.splitext(file.filename)[-1].lower()
    if file_extension not in SUPPORTED_FORMATS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Unsupported file format. Supported formats: {', '.join(SUPPORTED_FORMATS)}"
        )

    # Validate file size (limit to 100MB)
    max_size = 100 * 1024 * 1024  # 100MB
    if file.size and file.size > max_size:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail="File size too large. Maximum allowed size is 100MB"
        )
    
    # Create temporary file
    filepath = save_temp_file(file)
    
    # Compress audio if larger than 10MB
    if os.path.getsize(filepath) > 10 * 1024 * 1024:
        filepath = compress_audio(filepath)
        
    try:
       
        # Transcribe audio
        logger.info(f"Transcribing file: {filepath}")
        if whisper_model is None:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Whisper model not loaded"
            )
        
        segments, information = whisper_model.transcribe(
            audio=filepath,
            language=language,
            task="transcribe",
            temperature=0.0,
            beam_size=5,
            best_of=5,
            vad_filter=True,
        )
        
        segments = list(segments)
        duration = information.duration if information and hasattr(information, 'duration') else 0.
        
        # Prepare response
        logger.debug(f"Transcription result for {filepath}")
        results = []
        for segment in segments:
            logger.debug(f"[{segment.start:.2f} --> {segment.end:.2f}] {segment.text}")
            results.append({
                "id": segment.id,
                "start": segment.start,
                "end": segment.end,
                "text": segment.text,
                "seek": segment.seek,
                "tokens": segment.tokens,
                "temperature": segment.temperature,
                "avg_logprob": segment.avg_logprob,
                "compression_ratio": segment.compression_ratio,
                "no_speech_prob": segment.no_speech_prob,
                "words": segment.words,
            })
        
        response_data = {
            "text": ' '.join([seg["text"] for seg in results]),
            "segments": results if include_segments else None,
            "language": language if language else information.language,
            "duration": duration
        }
        
        logger.info("Transcription completed successfully")
        return TranscriptionResponse(**response_data)
        
    except Exception as e:
        logger.exception(f"Transcription failed: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Transcription failed: {str(e)}"
        )