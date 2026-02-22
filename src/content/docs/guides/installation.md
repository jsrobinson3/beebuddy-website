---
title: Installation
description: Detailed installation and configuration guide for BeeBuddy.
---

This guide covers the full setup process including environment configuration.

## System Requirements

| Component | Requirement |
|---|---|
| Docker | 24.0+ with Compose V2 |
| Node.js | 18+ (for mobile app) |
| Python | 3.11+ (for local API development without Docker) |
| uv | Latest (Python package manager) |

## Docker Setup (Recommended)

The easiest way to run BeeBuddy is with Docker Compose, which handles all
backend services.

```bash
git clone https://github.com/jsrobinson3/BeeBuddy.git
cd BeeBuddy/infra/docker
cp .env.example .env    # Edit with your settings
docker compose up -d
```

### Services started

| Service | Port | Description |
|---|---|---|
| API | 8000 | FastAPI backend |
| PostgreSQL | 5432 | Primary database |
| Redis | 6379 | Caching and task queue |
| MinIO | 9000 | S3-compatible object storage |

## Local Development (without Docker)

If you prefer to run the API directly on your machine:

```bash
cd apps/api
uv venv
uv sync
cp .env.example .env
uv run alembic upgrade head
uv run uvicorn app.main:app --reload
```

You'll need a PostgreSQL instance running separately.

## Mobile App

The mobile app runs outside Docker for hot reload support:

```bash
cd apps/mobile
npm install
npm start
```

### WSL2 Note

If developing on WSL2, use the `start:wsl` script to ensure the correct
hostname is used:

```bash
npm run start:wsl
```

## Environment Variables

See the `.env.example` files in `apps/api/` and `infra/docker/` for all
available configuration options.
