---
title: Offline Use & Data Sync
description: How BeeBuddy works offline and how to export your data.
---

BeeBuddy is designed for the apiary, where cellular signal is often
unreliable or absent. All data is written to a local database on your device
first and synced to the server in the background when a connection is
available — no waiting, no spinners in the field.

## How Offline Works

When you create an inspection, log a harvest, or record a treatment, BeeBuddy
saves it immediately to a local SQLite database powered by
[WatermelonDB](https://github.com/Nozbe/WatermelonDB). The record is available
right away regardless of connectivity. Changes are queued automatically and
uploaded to the server the next time the app detects an internet connection.

## Sync Behavior

| Scenario | What Happens |
|---|---|
| **Online** | Changes sync to the server within seconds of being saved |
| **Offline** | Changes are written locally and queued for upload |
| **Reconnect** | Queued changes sync automatically in the background |
| **Conflict** | The most recently written version of a record wins; no manual merge is required |

## Checking Sync Status

### Via the Mobile App

1. Tap the **Settings** tab.
2. Under the **Data** section, tap **Sync Status**.
3. The screen shows the last successful sync timestamp and whether any
   changes are still pending upload.
4. Tap **Sync Now** to trigger a manual sync at any time.

## Exporting Your Data

BeeBuddy can export all your beekeeping records as CSV or JSON, giving you
a portable backup you can open in a spreadsheet app or import into other
tools.

### Via the Mobile App

1. Tap the **Settings** tab.
2. Under the **Data** section, tap **Export Data**.
3. Select **CSV** or **JSON** as the export format.
4. Use the system share sheet to save the file to your device or send it
   to another app.

### Via the API

```bash
curl -X GET "http://localhost:8000/api/v1/users/me/export?format=csv" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  --output beebuddy-export.csv
```

Replace `format=csv` with `format=json` to export as a JSON document.

## What Is Included in an Export

| Format | Contents |
|---|---|
| **CSV** | Separate files for apiaries, hives, inspections, harvests, treatments, and events |
| **JSON** | Single nested document containing all records with full field details |

Both formats include all records owned by your account across all apiaries
and hives.
