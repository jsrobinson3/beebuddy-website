---
title: Managing Apiaries
description: How to create and manage apiaries and hives in BeeBuddy.
---

An apiary is a location where you keep beehives. BeeBuddy lets you organize
multiple apiaries, each containing any number of hives.

## Creating an Apiary

After signing in, create your first apiary with a name and location. You can
optionally set a hex color to visually distinguish apiaries on the dashboard.

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/apiaries \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Backyard Bees",
    "location": "123 Honey Lane",
    "latitude": 35.7796,
    "longitude": -78.6382,
    "hex_color": "#F5A623"
  }'
```

## Adding Hives

Once you have an apiary, add hives to it. Each hive tracks its own inspection
history, queen status, and equipment configuration.

```bash
curl -X POST http://localhost:8000/api/v1/apiaries/{apiary_id}/hives \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Hive #1",
    "hive_type": "langstroth",
    "source": "package",
    "status": "active"
  }'
```

## Data Ownership

Each apiary belongs to the user who created it. You can only see and manage your
own apiaries — there is no cross-user access. This is enforced at the API level
with per-request ownership checks.
