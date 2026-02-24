---
title: Hive Events
description: How to log general hive events and observations in BeeBuddy.
---

Hive Events are a flexible catch-all record type for things that don't fit a
formal inspection, harvest, or treatment — swarms, splits, equipment changes,
supplemental feeding, and more. Any notable moment in a hive's life can be
captured as an event.

## Event Types

| Event Type | Example Use |
|---|---|
| **Swarm** | Colony issued a primary or secondary swarm |
| **Split** | Divided the colony to create a new hive |
| **Feed** | Applied syrup, fondant, or pollen substitute |
| **Equipment** | Added or removed a super, changed a brood box |
| **Requeen** | Replaced the queen (update queen details separately) |
| **Other** | Anything else worth noting in the hive history |

## Logging an Event

### Via the Mobile App

1. Open the apiary and tap the hive the event occurred in.
2. Scroll to the **Recent Events** section and tap **Add**.
3. Select an event type or enter a custom type.
4. Set the event date (defaults to today).
5. Add notes describing what happened.
6. Tap **Save**.

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/hives/{hive_id}/events \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "swarm",
    "event_date": "2025-05-18",
    "notes": "Primary swarm issued around 11am. Caught and hived in a new box."
  }'
```

## Reviewing Event History

Events appear in the hive's event timeline alongside inspections, giving you
a complete chronological record of activity. When you requeen a hive, log a
**Requeen** event here and then update the queen fields on the hive detail page
so both the narrative history and the current queen data stay accurate.
