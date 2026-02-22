---
title: API Overview
description: BeeBuddy REST API reference.
slug: reference/api-overview
---

The BeeBuddy API is a RESTful service built with FastAPI. All endpoints return
JSON and require authentication unless noted otherwise.

## Base URL

```
http://localhost:8000/api/v1
```

## Authentication

BeeBuddy uses JWT bearer tokens. Obtain a token pair by authenticating with
the login endpoint.

```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=you@example.com&password=yourpassword"
```

Response:

```json
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "token_type": "bearer"
}
```

Include the access token in subsequent requests:

```
Authorization: Bearer eyJ...
```

Access tokens expire after 30 minutes. Use the refresh token to obtain a new
pair without re-authenticating.

## Core Resources

| Resource | Endpoint | Description |
|---|---|---|
| Auth | `/auth/*` | Registration, login, token refresh |
| Apiaries | `/apiaries` | Apiary CRUD |
| Hives | `/apiaries/{id}/hives` | Hive CRUD within an apiary |
| Inspections | `/hives/{id}/inspections` | Inspection logging and history |

## Interactive Docs

When running locally, FastAPI provides auto-generated interactive documentation:

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)
