---
title: Quick Start
description: Get BeeBuddy running locally in under 5 minutes.
---

Get the BeeBuddy API and mobile app running on your machine.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- [Node.js](https://nodejs.org/) 18+ (for the mobile app)
- [Git](https://git-scm.com/)

## 1. Clone the repository

```bash
git clone https://github.com/jsrobinson3/BeeBuddy.git
cd BeeBuddy
```

## 2. Start the backend services

```bash
cd infra/docker
docker compose up -d
```

This starts PostgreSQL, Redis, MinIO (object storage), and the FastAPI backend.

## 3. Verify the API is running

```bash
curl http://localhost:8000/health
```

You should see a `{"status": "ok"}` response.

## 4. Start the mobile app

```bash
cd apps/mobile
npm install
npm start
```

Scan the QR code with the Expo Go app on your phone, or press `w` to open in a
web browser.

## Next steps

- [Installation](/guides/installation/) — Detailed setup with configuration options
- [Managing Apiaries](/guides/apiaries/) — Create your first apiary and hives
- [Hive Inspections](/guides/inspections/) — Log your first inspection
