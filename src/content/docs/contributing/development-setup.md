---
title: Development Setup
description: Set up a local development environment for contributing to BeeBuddy.
---

This guide walks through setting up the full BeeBuddy development environment.

## Prerequisites

| Tool | Version | Purpose |
|---|---|---|
| Docker + Compose | 24.0+ | Backend services |
| Python | 3.11+ | API development |
| uv | Latest | Python package management |
| Node.js | 18+ | Mobile app |
| Git | Latest | Version control |

## Clone and Set Up

```bash
git clone https://github.com/jsrobinson3/BeeBuddy.git
cd BeeBuddy
```

## Backend (API)

```bash
cd apps/api
uv venv
uv sync
cp .env.example .env
```

Start the backing services with Docker:

```bash
cd ../../infra/docker
docker compose up -d postgres redis minio
```

Run database migrations and start the API:

```bash
cd ../../apps/api
uv run alembic upgrade head
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Mobile App

```bash
cd apps/mobile
npm install
npm start        # or npm run start:wsl on WSL2
```

## Running Tests

```bash
# API integration tests (requires Docker services running)
cd apps/api
uv run pytest tests/ -v

# Mobile tests
cd apps/mobile
npm test
```

## Project Structure

```
BeeBuddy/
  apps/api/          # FastAPI backend
    app/
      models/        # SQLAlchemy models
      routers/       # API endpoints
      schemas/       # Pydantic schemas
      services/      # Business logic
  apps/mobile/       # Expo React Native
    src/
      components/
      screens/
      services/
  infra/docker/      # Docker Compose config
  scripts/           # Developer tooling
  docs/              # Technical documentation (Markdown)
```
