---
title: Task Management
description: How to create and manage beekeeping tasks in BeeBuddy.
---

The Tasks tab helps you stay on top of hive work by tracking to-dos with
priorities, due dates, and recurring schedules. Tasks can be linked to a
specific hive or kept general for apiary-wide work.

## Priority Levels

| Priority | When to Use |
|---|---|
| **Urgent** | Time-critical actions that must happen today (e.g., treating a queenless hive) |
| **High** | Important follow-ups due within the next few days |
| **Medium** | Routine work that can wait a week or two |
| **Low** | Reminders and nice-to-dos with no firm deadline |

Each priority level is color-coded in the task list so the most pressing
items stand out at a glance.

## Creating a Task

### Via the Mobile App

1. Tap the **Tasks** tab in the bottom navigation bar.
2. Tap the **+** button.
3. Enter a task title and select a priority level.
4. Set a due date using the date picker.
5. Optionally link the task to a specific hive.
6. Tap **Save**.

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/tasks \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Check varroa mite count",
    "priority": "high",
    "due_date": "2025-06-15",
    "hive_id": "YOUR_HIVE_ID"
  }'
```

## Recurring Tasks

For work that repeats on a regular schedule — feeding checks, mite counts,
equipment maintenance — you can set a recurrence cadence. When you mark a
recurring task complete, the next instance is automatically scheduled.

Tap **Manage Task Cadences** at the top of the Tasks screen to create and
edit recurring schedules.

### Via the API

```bash
curl -X POST http://localhost:8000/api/v1/tasks \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Monthly varroa mite count",
    "priority": "high",
    "due_date": "2025-06-01",
    "recurrence_cadence": "monthly"
  }'
```

Valid cadence values are `daily`, `weekly`, `monthly`, and `annually`.

## Completing and Reviewing Tasks

Tap any task in the list to toggle its completion status. Completed tasks
display with a strikethrough and move to the bottom of the list. Use the
priority color dots to quickly identify what to tackle first when multiple
tasks are due.
