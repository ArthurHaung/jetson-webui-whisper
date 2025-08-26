# Whisper Speech-to-Text API for NVIDIA Jetson Orin

A FastAPI-based speech-to-text server powered by OpenAI Whisper, optimized for NVIDIA Jetson Orin 16GB (JetPack 5.1.1 / 35.3.1) with CUDA acceleration and PyTorch 2.1.0 support.

## Features

- **GPU Acceleration**: CUDA support for faster transcription on NVIDIA hardware
- **Multiple Audio Formats**: Support for MP3, WAV, M4A, MP4, MPEG, MPGA, WebM, OGG, FLAC
- **Batch Processing**: Transcribe multiple files simultaneously
- **Language Detection**: Automatic language detection or manual specification
- **REST API**: Full OpenAPI/Swagger documentation
- **Audio Compression**: Automatic compression for large audio files

## Quick Start

### Prerequisites

- Python 3.8+
- NVIDIA GPU with CUDA 11.4+ (optional, CPU fallback available)
- FFmpeg for audio processing

### Installation

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Start the server:**
   ```bash
   # Using the run script
   ./run.sh
   
   # Or directly with uvicorn
   uvicorn main:app --host 0.0.0.0 --port 8081
   ```

3. **Access the API:**
   - API Documentation: http://localhost:8081/docs
   - Health Check: http://localhost:8081/health
   - GPU Status: http://localhost:8081/gpu-status

## API Endpoints

### Core Endpoints

- `POST /transcribe` - Transcribe a single audio file
- `POST /transcribe-batch` - Transcribe multiple audio files
- `GET /health` - Health check and model status
- `GET /gpu-status` - GPU memory and status information

### Utility Endpoints

- `GET /languages` - List supported languages
- `GET /models` - List available Whisper models
- `GET /` - API information

### Example Usage

**Single File Transcription:**
```bash
curl -X POST "http://localhost:8081/transcribe" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@audio.mp3" \
  -F "language=en" \
  -F "include_segments=true"
```

**Python Client Example:**
```python
import requests

# Transcribe audio file
with open("audio.mp3", "rb") as f:
    response = requests.post(
        "http://localhost:8081/transcribe",
        files={"file": f},
        data={"language": "en", "include_segments": True}
    )
    
result = response.json()
print(f"Transcription: {result['text']}")
```

**Swagger Client Example:**

You can easily test and interact with the API using the built-in Swagger UI. Open your browser and navigate to [http://localhost:8081/docs](http://localhost:8081/docs). From there, you can try out all endpoints, upload audio files, and view responses directly in your browser.


## Configuration

### Environment Variables

- `WHISPER_MODEL`: Model size (tiny, base, small, medium, large) - default: "small"
- `CUDA_DEVICE`: CUDA device index - default: 0
- `MAX_FILE_SIZE`: Maximum upload size in MB - default: 100

### Supported Languages

The API supports 99+ languages including English, Spanish, French, German, Chinese, Japanese, and many more. Use the `/languages` endpoint to get the full list.

## Development

### Project Structure

```
├── main.py              # Main FastAPI application
├── requirements.txt     # Python dependencies
├── run.sh              # Server startup script
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

### Key Components

- **[`main.py`](main.py)**: Contains the FastAPI application with all endpoints
- **[`startup_event`](main.py)**: Loads the Whisper model on application startup
- **[`transcribe_audio`](main.py)**: Main transcription function with file validation
- **[`save_temp_file`](main.py)**: Handles file uploads and temporary storage
- **[`compress_audio`](main.py)**: Automatic audio compression for large files

### Running in Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run with auto-reload
uvicorn main:app --reload --host 0.0.0.0 --port 8081

# Or use the provided script
chmod +x run.sh
./run.sh
```

## NVIDIA Jetson Setup (Optional)

For NVIDIA Jetson devices, follow these additional setup steps:

### System Dependencies

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

## Performance Notes

- **GPU Memory**: The service automatically detects CUDA availability and uses GPU acceleration when possible
- **File Compression**: Files larger than 10MB are automatically compressed to reduce processing time
- **Batch Processing**: Limited to 10 files per batch to prevent memory issues
- **Model Size**: Currently uses "small" model for balance between speed and accuracy

## Troubleshooting

### Common Issues

1. **CUDA not detected**: Ensure NVIDIA drivers and CUDA toolkit are properly installed
2. **Out of memory**: Reduce batch size or use CPU mode
3. **Unsupported file format**: Convert audio to supported format (MP3, WAV, etc.)
4. **Model loading fails**: Check internet connection for initial model download

### Logs

The application uses structured logging. Check logs for detailed error information:

```bash
# View logs in real-time
tail -f /var/log/whisper-api.log

# Check GPU status
curl http://localhost:8081/gpu-status
```
