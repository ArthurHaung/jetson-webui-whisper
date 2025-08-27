# NGINX setup for Open WebUI + Whisper (Jetson Orin)

This NGINX config serves a static Open WebUI frontend and proxies API/WebSocket traffic to:
- A local Whisper transcription service on the Jetson Orin (127.0.0.1:8081)
- A remote API and Socket.IO service at https://genai.avalue.com

File: `nginx-open-webui`


## Prerequisites

1) Install and run the Whisper service on Jetson Orin NX before configuring NGINX.
   - Base URL expected by this config: `http://127.0.0.1:8081`
   - API path used by this config: `/api/v1/audio/transcriptions`

2) Prepare the Open WebUI static frontend:
```bash
sudo cp -rf ./open-webui /var/www/html/.
sudo chown -R www-data:www-data /var/www/html/open-webui
```


## How it works

Top-level map:
- `map $http_upgrade $connection_upgrade` sets the correct `Connection` header:
  - `upgrade` when a client requests a WebSocket upgrade
  - `close` otherwise

Server block (port 80):
- `root /var/www/html/open-webui;`
  - Serves the static frontend files from this directory

Locations:
- `/`
  - `try_files $uri $uri/ =404;`
  - Serves only existing files and directories; unknown routes return 404 (no SPA fallback)

- `/ws/socket.io`
  - Proxies WebSocket (Socket.IO) to `https://genai.avalue.com`
  - Sets required headers for WebSocket upgrade (`Upgrade`, `Connection`)
  - Uses HTTP/1.1 and a 600s read timeout for long-lived connections

- `/api/v1/audio/transcriptions`
  - Proxies to local Whisper service at `http://127.0.0.1:8081`
  - Intended for audio uploads (e.g., multipart/form-data) returning transcriptions

- `/api`
  - Proxies all other API calls to `https://genai.avalue.com/api`

Forwarded headers:
- `Host`, `X-Real-IP`, `X-Forwarded-For`, `X-Forwarded-Proto` (default `http`), `X-Forwarded-Port`
- These help upstream services reconstruct original client info


## Request flow examples

- GET /                              → served from /var/www/html/open-webui
- GET /ws/socket.io                  → proxied to https://genai.avalue.com (WebSocket)
- POST /api/v1/audio/transcriptions  → proxied to http://127.0.0.1:8081 (Whisper)
- Any /api/*                         → proxied to https://genai.avalue.com/api


## Install and enable the site

```bash
# Install nginx
sudo apt update && sudo apt install -y nginx

# Deploy config (from this repository's nginx directory)
sudo cp nginx-open-webui /etc/nginx/sites-available/open-webui
sudo ln -sf /etc/nginx/sites-available/open-webui /etc/nginx/sites-enabled/open-webui
sudo rm -f /etc/nginx/sites-enabled/default

# Verify config
sudo nginx -t

# Reload nginx
a) sudo systemctl reload nginx
# or
b) sudo nginx -s reload
```


## Notes

- SPA fallback: replace `try_files $uri $uri/ =404;` with `try_files $uri $uri/ /index.html;` if your frontend needs client-side routing.
- TLS: current config listens on HTTP. For production, enable HTTPS (certificates) or place behind a TLS terminator; also change `X-Forwarded-Proto` to `$scheme` when serving HTTPS.
- Logs:
  - Access: `/var/log/nginx/access.log`
  - Error: `/var/log/nginx/error.log`