---
title: Logging Treatments
description: How to record varroa and disease treatments for your hives in BeeBuddy.
---

Keeping an accurate treatment log is essential for varroa mite management,
disease control, and compliance with bee inspector requirements. BeeBuddy
records the product, application window, and notes for every treatment against
a specific hive.

## What to Record

| Field | Description |
|---|---|
| **Product Name** | Treatment product (e.g., Oxalic Acid, ApiVar, Apiguard, HopGuard) |
| **Start Date** | First day of treatment application |
| **End Date** | Last day of treatment or expected removal date |
| **Notes** | Dosage, application method, or observations |

## Logging a Treatment

### Via the Mobile App

1. Open the apiary and tap the hive being treated.
2. Scroll to the **Recent Treatments** section and tap **Add**.
3. Enter the product name and set the start date.
4. Set an end date if the treatment has a defined duration.
5. Add optional notes such as dosage or application method.
6. Tap **Save**.

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/hives/{hive_id}/treatments \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product_name": "Oxalic Acid",
    "start_date": "2025-11-01",
    "end_date": "2025-11-01",
    "notes": "Dribble method, broodless colony. 50ml 3.5% solution applied."
  }'
```

## Reviewing Treatment History

All treatments for a hive are listed chronologically in the **Recent
Treatments** section. The start and end date range provides a clear record
suitable for inspections by certified bee inspectors or for your own seasonal
planning. Treatments applied in prior years remain visible in the history so
you can track long-term mite management strategies.
