---
title: Queen Management
description: How to track queen status, marking color, and lineage in BeeBuddy.
---

BeeBuddy tracks the queen for each hive so you always know her approximate
age, marking color, status, and race — information that is critical for
spotting requeening needs and maintaining good colony genetics.

## Queen Fields

| Field | Description |
|---|---|
| **Status** | Current queen status: Active, Failing, Replaced, or Unknown |
| **Marking Color** | International year-color code applied to the queen |
| **Race / Strain** | Genetic background (e.g., Italian, Carniolan, Buckfast, Russian) |
| **Year Introduced** | Calendar year the queen was introduced; used to estimate her age |
| **Notes** | Breeding source, breeder, or other lineage notes |

## International Marking Color Convention

Beekeepers worldwide use a five-color rotation to mark queens by birth year,
making it easy to spot the queen and estimate her age at a glance:

| Years Ending In | Color |
|---|---|
| 1 or 6 | White |
| 2 or 7 | Yellow |
| 3 or 8 | Red |
| 4 or 9 | Green |
| 5 or 0 | Blue |

BeeBuddy displays the expected marking color for the year a queen was
introduced so you can quickly confirm you are looking at the right queen.

## Updating Queen Information

### Via the Mobile App

1. Open the apiary and tap the hive whose queen you want to update.
2. Scroll to the **Queen** section and tap **Edit** (or **Add** if no queen
   has been recorded yet).
3. Set the status, marking color, race, and year introduced.
4. Add any notes about the queen's origin or breeding.
5. Tap **Save**.

### Via the API

```bash
curl -X PATCH http://localhost:8000/api/v1/hives/{hive_id}/queen \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "active",
    "marking_color": "red",
    "race": "carniolan",
    "year_introduced": 2023,
    "notes": "Purchased from local breeder, excellent temperament."
  }'
```

## Tracking Requeening

When you replace a queen, record the change in two places to keep your data
consistent:

1. Log a **Requeen** event in [Hive Events](./hive-events) to preserve the
   narrative history of when and why the old queen was removed.
2. Update the queen fields on the hive to reflect the new queen's details
   using the steps above.

This preserves historical context while keeping the hive's current queen
profile accurate.
