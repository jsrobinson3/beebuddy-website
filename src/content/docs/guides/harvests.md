---
title: Recording Harvests
description: How to log honey harvests and track yield over time in BeeBuddy.
---

BeeBuddy lets you record each honey harvest against a specific hive, tracking
weight, honey type, and date so you can review yield trends across seasons and
compare production between hives.

## What to Record

| Field | Description |
|---|---|
| **Weight** | Harvest weight in your preferred unit (kg or lb) |
| **Honey Type** | Floral source or variety (e.g., wildflower, clover, manuka) |
| **Date** | Date the honey was extracted |
| **Notes** | Free-text observations about color, consistency, or conditions |

## Logging a Harvest

### Via the Mobile App

1. Open the apiary and tap the hive you harvested from.
2. Scroll to the **Recent Harvests** section and tap **Add**.
3. Enter the weight and select your honey type.
4. Set the harvest date (defaults to today).
5. Add any optional notes.
6. Tap **Save**.

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/hives/{hive_id}/harvests \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "weight": 12.5,
    "weight_unit": "kg",
    "honey_type": "wildflower",
    "harvest_date": "2025-08-10",
    "notes": "Light amber, excellent aroma. Extracted two full supers."
  }'
```

## Unit Preferences

BeeBuddy displays weights according to the unit system you selected in your
profile. Weights entered in kilograms are stored as-is; if you enter pounds,
they are converted to kilograms for storage and displayed back in your
preferred unit. See [Settings & Preferences](./settings) to change your
unit system.

## Reviewing Harvest History

All harvests for a hive appear in the **Recent Harvests** section of the hive
detail view. Tap any entry to see the full record. Use the history to compare
yields across seasons or identify which hives are your most productive.
