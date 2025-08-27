# Whisper Speech-to-Text API for NVIDIA Jetson Orin

A FastAPI-based speech-to-text server powered by OpenAI Whisper, optimized for NVIDIA Jetson Orin 16GB (JetPack 5.1.1 / 35.3.1) with CUDA acceleration and PyTorch 2.1.0 support.

> **Note:** See more about the web service and reverse proxy setup in [./nginx/README.md](./nginx/README.md).

## Features

- GPU acceleration when CUDA is available (falls back to CPU)
- Multiple audio formats: MP3, WAV, M4A, MP4, MPEG, MPGA, WebM, OGG, FLAC
- REST API with OpenAPI/Swagger documentation
- Automatic audio compression for large uploads


## Quick Start (Developers)

- Requirements: Python 3.8, FFmpeg installed on the system

```bash
# Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the API server
./run.sh
# or
uvicorn main:app --host 0.0.0.0 --port 8081
```

- API Docs: http://localhost:8081/docs
- OpenAPI JSON: http://localhost:8081/openapi.json


## API

Base URL: http://localhost:8081

- POST `/api/v1/audio/transcriptions` — Transcribe a single audio file
- GET `/` — Root endpoint with basic API info

Supported upload formats: `.mp3, .wav, .m4a, .mp4, .mpeg, .mpga, .webm, .ogg, .flac`

### Request parameters (multipart/form-data)
- `file` (required): Audio file to transcribe
- `model` (optional): Whisper model size (`tiny`, `base`, `small`, `medium`, `large`). Default: `base`
- `language` (optional): Language code (e.g., `en`, `zh`, `fr`). Default: `zh`

### cURL example
```bash
curl -X POST \
  'http://localhost:8081/api/v1/audio/transcriptions' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@audio.mp3;type=audio/mpeg' \
  -F 'model=base' \
  -F 'language=zh'
```

### Python example
```python
import requests

with open("audio.mp3", "rb") as f:
    resp = requests.post(
        "http://localhost:8081/api/v1/audio/transcriptions",
        files={"file": f},
        data={"language": "zh", "model": "base"}
    )

print(resp.status_code)
print(resp.json())
```


## Project Structure

```
├── main.py          # FastAPI app, router registration, docs
├── audio.py         # /api/v1/audio/transcriptions implementation
├── run.sh           # Convenience script to start the API (expects ./venv)
├── requirements.txt # Python dependencies
├── nginx/           # Optional NGINX reverse-proxy and static Open WebUI
└── README.md
```


## Open Source Repositories

This project leverages several open source components:

- OpenAI Whisper — General-purpose speech recognition model
- FastAPI — Web framework for building APIs with Python
- PyTorch — Deep learning framework for accelerated computing
- CTranslate2 — Fast inference engine for Whisper models
- faster-whisper — Fast Whisper inference using CTranslate2
- FFmpeg — Cross-platform solution to record, convert and stream audio
- Hugging Face Hub — Client library to interact with the Hugging Face Hub


## Performance Notes

- CUDA will be used automatically when available; otherwise CPU is used
- Files larger than 10MB are compressed to 16kHz mono MP3 before transcription
- Model size defaults to `base` for a balance of speed and accuracy


## Troubleshooting

- CUDA not detected: ensure NVIDIA drivers and CUDA toolkit are correctly installed
- Unsupported file format: convert audio to a supported format (MP3, WAV, etc.)
- Model loading fails: verify network access for the first model download


## NVIDIA Jetson Orin NX System Dependencies

For NVIDIA Jetson Orin NX, follow these additional setup steps (verified):
- CUDA 11.4
- JetPack 5.1.1 (L4T R35.3.1)
- Python 3.8

```bash
sudo apt update
sudo apt upgrade

sudo apt install nvidia-jetpack

# For PyTorch
sudo apt install libopenblas-base libopenmpi-dev libjpeg-dev \
zlib1g-dev libavcodec-dev libavformat-dev libswscale-dev \
cmake

# For FFmpeg audio processing
sudo apt-get install -y \
  autoconf automake build-essential cmake git pkg-config texinfo yasm nasm \
  libtool libvorbis-dev libmp3lame-dev libopus-dev libfdk-aac-dev libx264-dev libx265-dev \
  libass-dev libfreetype6-dev libvpx-dev libunistring-dev zlib1g-dev \
  libssl-dev libspeex-dev libsoxr-dev
```

### PyTorch for Jetson

```bash
# Download and install PyTorch wheel for Jetson
wget https://developer.download.nvidia.com/compute/redist/jp/v511/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
sudo -H pip3 install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl

# Install torchvision
git clone --branch v0.16.1 https://github.com/pytorch/vision torchvision-0.16.1
cd torchvision-0.16.1
export BUILD_VERSION=0.16.1
sudo -H python3 setup.py install
cd ..

# Install torchaudio
git clone --branch v2.1.0 https://github.com/pytorch/audio torchaudio-2.1.0
cd torchaudio-2.1.0
sudo -H pip3 install cmake ninja kaldi_io SoundFile
sudo -H python3 setup.py install
cd ..

# Verify installation
python3 - <<EOF
import torch, torchvision, torchaudio
print("torch:", torch.__version__)
print("torchvision:", torchvision.__version__)
print("torchaudio:", torchaudio.__version__)
print("CUDA available:", torch.cuda.is_available())
EOF
```

### Hardware-Accelerated FFmpeg

```bash
git clone https://github.com/FFmpeg/FFmpeg
cd FFmpeg

./configure \
  --prefix=/usr/local \
  --pkg-config-flags="--static" \
  --extra-cflags="-I/usr/local/include" \
  --extra-ldflags="-L/usr/local/lib" \
  --extra-libs="-lpthread -lm" \
  --enable-gpl \
  --enable-nonfree \
  --enable-libmp3lame \
  --enable-libfdk-aac \
  --enable-libopus \
  --enable-libvorbis \
  --enable-libspeex \
  --enable-libsoxr \
  --enable-libx264 \
  --enable-libx265 \
  --enable-libvpx \
  --enable-libfreetype \
  --enable-libass \
  --enable-cuda \
  --enable-cuvid \
  --enable-nvenc \
  --enable-nvdec \
  --enable-libdrm \
  --enable-libv4l2 \
  --enable-v4l2-m2m

make -j$(nproc)
sudo make install
sudo ldconfig
```

### CTranslate2 for faster-whisper

```bash
git clone --recursive https://github.com/OpenNMT/CTranslate2.git
cd CTranslate2

# Use specific version for CUDA 11.4 and Python 3.8 compatibility
git checkout 318cd9428b3b9954d40a27e758ba6ad363e54ba0
mkdir build && cd build
mkdir install

cmake .. \
  -DWITH_CUDA=ON \
  -DCUDA_ARCH=87 \
  -DWITH_CUDNN=ON \
  -DWITH_MKL=OFF \
  -DOPENMP_RUNTIME=COMP \
  -DCMAKE_INSTALL_PREFIX=$(pwd)/install

make -j$(nproc)
make install

sudo cp -r ./install/* /usr/local/
sudo ldconfig

# Build Python wheel
cd ../python
mkdir whl
sudo -H pip3 install -r install_requirements.txt
python3 setup.py --verbose bdist_wheel --dist-dir $(pwd)/whl

cd whl
sudo -H pip3 install ctranslate2-3.21.0-cp38-cp38-linux_aarch64.whl
```

### Install faster-whisper

```bash
git clone https://github.com/guillaumekln/faster-whisper.git
cd faster-whisper

# Use specific version for CUDA 11.4 and Python 3.8 compatibility
git checkout f6979456913709307b33a3a8d3687b6a43f5813d

# Install requirements
sudo -H pip3 install 'av==10.*' 'huggingface_hub>=0.13' 'tokenizers>=0.13,<0.15' 'onnxruntime>=1.14,<2'

# Install faster-whisper
sudo -H pip3 install . --no-binary ctranslate2
```

