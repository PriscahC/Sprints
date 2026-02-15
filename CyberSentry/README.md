# CyberSentry AI

**Protecting Kenya's Digital Future with AI-Powered Cybersecurity**

![Status](https://img.shields.io/badge/status-MVP-orange) ![Timeline](https://img.shields.io/badge/timeline-21%20Days-blue) ![Accuracy](https://img.shields.io/badge/accuracy-90%25-green)

## Overview

AI-powered cybersecurity platform for Kenya featuring 90%+ malware detection, multi-agent autonomous response, M-PESA fraud detection, and SIM swap identification. Built with FastAPI, React, PostgreSQL, and TensorFlow/PyTorch.

## Key Features

- **AI Detection Engine**: 90%+ accuracy, <3s file analysis (ZIP/RAR, PDF, Office, images with steganography)
- **Multi-Agent System**: SENTRY (alert coordination), Hunter (threat hunting), Responder (auto-response)
- **Kenya-Specific**: M-PESA fraud patterns, SIM swap detection, Swahili UI (Tishio/Hatari/Salama)
- **Real-Time Dashboard**: <2s load, 30s auto-refresh, 5+ charts, mobile-responsive
- **Production-Ready**: Docker, CI/CD, HTTPS, 50+ concurrent users

## Quick Start

```bash
# Clone and start with Docker
git clone https://github.com/priscahC/cybersentry-ai.git
cd cybersentry-ai
docker-compose up -d

# Access at:
# API: http://localhost:8000 (docs: /docs)
# Dashboard: http://localhost:3000
```

## Tech Stack

**Backend**: Python 3.11+, FastAPI, PostgreSQL, SQLAlchemy, JWT  
**AI/ML**: TensorFlow/PyTorch, custom feature extraction  
**Frontend**: React, Material-UI/Tailwind, Recharts/D3.js  
**DevOps**: Docker, GitHub Actions, Railway/Render  

## 21-Day Roadmap

| Week | Checkpoints | Deliverables |
|------|------------|--------------|
| 1 (Days 1-7) | Foundation & AI Core | Database + 5 APIs + JWT + Docker + ML model (90%+) |
| 2 (Days 8-14) | Automation & Dashboard | 3 AI agents + threat correlation + real-time dashboard + Swahili UI |
| 3 (Days 15-19) | Polish & Deploy | 100+ demo users + 3 scenarios + UI polish + cloud deployment (HTTPS) |
| 4 (Days 20-21) | Presentation | Pitch deck + demo video + rehearsals + backup plans |

## API Examples

```bash
# Login
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user@example.com","password":"pass"}'

# Analyze file
curl -X POST http://localhost:8000/api/v1/files/analyze \
  -H "Authorization: Bearer <token>" \
  -F "file=@suspicious.exe"
```
