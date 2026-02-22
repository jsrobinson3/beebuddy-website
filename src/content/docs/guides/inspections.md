---
title: Hive Inspections
description: How to log and review hive inspections in BeeBuddy.
---

Regular inspections are the foundation of good hive management. BeeBuddy
provides structured inspection logging inspired by the
[BEEP](https://github.com/beepnl/BEEP) project's data model.

## What to Record

Each inspection captures:

| Field | Description |
|---|---|
| **Queen seen** | Whether the queen was spotted |
| **Temperament** | Colony behavior (calm, nervous, aggressive) |
| **Brood pattern** | Quality of the brood pattern (solid, spotty, etc.) |
| **Impression** | Overall impression score (1-5) |
| **Attention** | Whether this hive needs follow-up attention |
| **Notes** | Free-text observations |
| **Photos** | Optional image attachments |

## Logging an Inspection

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/hives/{hive_id}/inspections \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "queen_seen": true,
    "temperament": "calm",
    "brood_pattern": "solid",
    "impression": 4,
    "attention": false,
    "notes": "Strong colony, two full supers. Added a third."
  }'
```

### Via the Mobile App

Open a hive from your apiary, tap **New Inspection**, and fill in the fields.
Photos can be attached directly from your camera.

## Reviewing History

All inspections for a hive are stored chronologically. Use the inspection
timeline to spot trends in colony health over time.

## JSONB Observations

BeeBuddy stores additional observation data in a flexible JSONB field. This
means you can track custom metrics without schema changes — useful for
researchers or beekeepers with specialized tracking needs.
