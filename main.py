
import logging

from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

import audio

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s [%(threadName)10s %(levelname)5s] %(filename)s.%(funcName)s:%(lineno)d: %(message)s"
)

# Initialize FastAPI app with OpenAPI documentation
app = FastAPI(
    title="Whisper Speech-to-Text API",
    description="A FastAPI service for speech-to-text transcription using OpenAI Whisper",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(audio.router, prefix="/api/v1/audio", tags=["audio"])

@app.get("/", response_model=dict, tags=["Root"])
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Whisper Speech-to-Text API",
        "version": "1.0.0",
        "documentation": "/docs",
    }

