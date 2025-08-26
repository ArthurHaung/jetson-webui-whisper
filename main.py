import os
import uuid
import asyncio
import logging

import torch
import whisper

from typing import Optional, List
from datetime import datetime

from pydub import AudioSegment

from fastapi import FastAPI, File, UploadFile, HTTPException, Depends, status
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

# Initialize FastAPI app with OpenAPI documentation
app = FastAPI(
    title="Whisper Speech-to-Text API",
    description="A FastAPI service for speech-to-text transcription using OpenAI Whisper",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security scheme
security = HTTPBearer(auto_error=False)

# Load Whisper model on startup
whisper_model = None
device = None

@app.on_event("startup")
async def startup_event():
    """Load Whisper model on application startup with CUDA support"""
    global whisper_model, device
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
            "small",
            device="cuda",
            # compute_type="float16"
            compute_type="float32"
        )
        
        logger.info("Whisper model loaded successfully")
        
        # Log device info
        if device == "cuda":
            logger.info(f"GPU memory usage after model load: {torch.cuda.memory_allocated() / 1024**3:.2f} GB")
        
    except Exception as e:
        logger.error(f"Failed to load Whisper model: {e}")
        raise e

# Pydantic models for request/response
class TranscriptionResponse(BaseModel):
    """Response model for transcription"""
    text: str = Field(..., description="The transcribed text")
    segments: Optional[List[dict]] = Field(None, description="Detailed transcription segments")
    timestamp: datetime = Field(default_factory=datetime.now, description="Transcription timestamp")

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

@app.get("/", response_model=dict, tags=["Root"])
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Whisper Speech-to-Text API",
        "version": "1.0.0",
        "documentation": "/docs",
        "health": "/health"
    }

@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """Health check endpoint"""
    return HealthResponse(
        status="healthy" if whisper_model is not None else "unhealthy",
        model_loaded=whisper_model is not None
    )

@app.get("/gpu-status", response_model=dict, tags=["Health"])
async def gpu_status():
    """Get GPU status and memory usage"""
    if not torch.cuda.is_available():
        return {
            "cuda_available": False,
            "message": "CUDA not available"
        }
    
    try:
        gpu_info = {
            "cuda_available": True,
            "device_count": torch.cuda.device_count(),
            "current_device": torch.cuda.current_device(),
            "device_name": torch.cuda.get_device_name(0),
            "memory_allocated_gb": round(torch.cuda.memory_allocated() / 1024**3, 2),
            "memory_reserved_gb": round(torch.cuda.memory_reserved() / 1024**3, 2),
            "memory_total_gb": round(torch.cuda.get_device_properties(0).total_memory / 1024**3, 2),
            "memory_free_gb": round((torch.cuda.get_device_properties(0).total_memory - torch.cuda.memory_allocated()) / 1024**3, 2),
            "pytorch_version": torch.__version__
        }
        return gpu_info
    except Exception as e:
        return {
            "cuda_available": True,
            "error": f"Failed to get GPU info: {str(e)}"
        }
        
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
    

@app.post("/transcribe", response_model=TranscriptionResponse, tags=["Transcription"])
async def transcribe_audio(
    file: UploadFile = File(..., description="Audio file to transcribe"),
    language: Optional[str] = None,
    include_segments: bool = False,
):
    """
    Transcribe audio file to text using Whisper
    
    - **file**: Audio file (supported formats: mp3, wav, m4a, mp4, mpeg, mpga, webm, ogg, flac)
    - **language**: Optional language code (e.g., 'en', 'es', 'fr')
    - **task**: 'transcribe' or 'translate' (translate to English)
    - **temperature**: Sampling temperature (0.0 to 1.0)
    - **include_segments**: Include detailed transcription segments
    """

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
        
        # Prepare response
        logger.debug(f"Transcription result for {filepath}")
        for segment in segments:
            logger.debug(f"[{segment.start:.2f} --> {segment.end:.2f}] {segment.text}")
        
        response_data = {
            "text": ' '.join([segment.text for segment in segments]),
            "segments": segments if include_segments else None,
            "language": language if language else information.language,
        }
        
        logger.info("Transcription completed successfully")
        return TranscriptionResponse(**response_data)
        
    except Exception as e:
        logger.error(f"Transcription failed: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Transcription failed: {str(e)}"
        )
    # finally:
    #     # Clean up temporary file
    #     if os.path.exists(filepath):
    #         os.unlink(filepath)

@app.post("/transcribe-batch", response_model=List[TranscriptionResponse], tags=["Transcription"])
async def transcribe_batch(
    files: List[UploadFile] = File(..., description="Multiple audio files to transcribe"),
    language: Optional[str] = None,
    task: str = "transcribe",
    temperature: float = 0.0,
    include_segments: bool = False,
):
    """
    Transcribe multiple audio files in batch
    
    - **files**: List of audio files
    - **language**: Optional language code for all files
    - **task**: 'transcribe' or 'translate' for all files
    - **temperature**: Sampling temperature for all files
    - **include_segments**: Include detailed segments for all files
    """
    
    if whisper_model is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Whisper model not loaded"
        )
    
    if len(files) > 10:  # Limit batch size
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Batch size limited to 10 files"
        )
    
    results = []
    
    for file in files:
        try:
            # Use the single transcription endpoint logic
            result = await transcribe_audio(
                file=file,
                language=language,
                task=task,
                temperature=temperature,
                include_segments=include_segments
            )
            results.append(result)
        except Exception as e:
            # Continue with other files if one fails
            logger.error(f"Failed to transcribe {file.filename}: {e}")
            results.append(TranscriptionResponse(
                text=f"Error: {str(e)}",
                language=None,
                segments=None,
                duration=0.0
            ))
    
    return results

@app.get("/models", response_model=dict, tags=["Models"])
async def list_models():
    """List available Whisper models"""
    return {
        "available_models": [
            "tiny", "base", "small", "medium", "large", "large-v2", "large-v3"
        ],
        "current_model": "base",  # Update this based on your loaded model
        "description": "Whisper model sizes from fastest/least accurate (tiny) to slowest/most accurate (large-v3)"
    }

@app.get("/languages", response_model=dict, tags=["Languages"])
async def supported_languages():
    """Get list of supported languages"""
    # Whisper supported languages
    languages = {
        "en": "English",
        "zh": "Chinese",
        "de": "German",
        "es": "Spanish",
        "ru": "Russian",
        "ko": "Korean",
        "fr": "French",
        "ja": "Japanese",
        "pt": "Portuguese",
        "tr": "Turkish",
        "pl": "Polish",
        "ca": "Catalan",
        "nl": "Dutch",
        "ar": "Arabic",
        "sv": "Swedish",
        "it": "Italian",
        "id": "Indonesian",
        "hi": "Hindi",
        "fi": "Finnish",
        "vi": "Vietnamese",
        "he": "Hebrew",
        "uk": "Ukrainian",
        "el": "Greek",
        "ms": "Malay",
        "cs": "Czech",
        "ro": "Romanian",
        "da": "Danish",
        "hu": "Hungarian",
        "ta": "Tamil",
        "no": "Norwegian",
        "th": "Thai",
        "ur": "Urdu",
        "hr": "Croatian",
        "bg": "Bulgarian",
        "lt": "Lithuanian",
        "la": "Latin",
        "mi": "Maori",
        "ml": "Malayalam",
        "cy": "Welsh",
        "sk": "Slovak",
        "te": "Telugu",
        "fa": "Persian",
        "lv": "Latvian",
        "bn": "Bengali",
        "sr": "Serbian",
        "az": "Azerbaijani",
        "sl": "Slovenian",
        "kn": "Kannada",
        "et": "Estonian",
        "mk": "Macedonian",
        "br": "Breton",
        "eu": "Basque",
        "is": "Icelandic",
        "hy": "Armenian",
        "ne": "Nepali",
        "mn": "Mongolian",
        "bs": "Bosnian",
        "kk": "Kazakh",
        "sq": "Albanian",
        "sw": "Swahili",
        "gl": "Galician",
        "mr": "Marathi",
        "pa": "Punjabi",
        "si": "Sinhala",
        "km": "Khmer",
        "sn": "Shona",
        "yo": "Yoruba",
        "so": "Somali",
        "af": "Afrikaans",
        "oc": "Occitan",
        "ka": "Georgian",
        "be": "Belarusian",
        "tg": "Tajik",
        "sd": "Sindhi",
        "gu": "Gujarati",
        "am": "Amharic",
        "yi": "Yiddish",
        "lo": "Lao",
        "uz": "Uzbek",
        "fo": "Faroese",
        "ht": "Haitian Creole",
        "ps": "Pashto",
        "tk": "Turkmen",
        "nn": "Nynorsk",
        "mt": "Maltese",
        "sa": "Sanskrit",
        "lb": "Luxembourgish",
        "my": "Myanmar",
        "bo": "Tibetan",
        "tl": "Tagalog",
        "mg": "Malagasy",
        "as": "Assamese",
        "tt": "Tatar",
        "haw": "Hawaiian",
        "ln": "Lingala",
        "ha": "Hausa",
        "ba": "Bashkir",
        "jw": "Javanese",
        "su": "Sundanese"
    }
    
    return {
        "supported_languages": languages,
        "total_count": len(languages),
        "note": "Use the language code (key) in the transcription request"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
