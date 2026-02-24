---
title: Delete Your Account
description: How to permanently delete your BeeBuddy account and data.
---

You can delete your BeeBuddy account from the mobile app. Deletion includes a
**30-day grace period** — your account is deactivated immediately but not
permanently removed until the grace period ends. During that window you can
cancel the deletion using the link in the confirmation email.

## Deletion Modes

BeeBuddy offers two options when deleting your account:

| Mode | What happens |
|---|---|
| **Delete account** | Removes your account and login credentials. Beekeeping data is kept anonymously for research purposes. |
| **Delete account & all data** | Permanently deletes your account **and** all associated data (apiaries, hives, inspections, etc.). |

## Steps to Delete Your Account

### Via the Mobile App

1. Open **Settings** from the bottom tab bar.
2. Scroll to the **Danger Zone** section.
3. Tap **Delete Account**.
4. Choose your deletion mode (account only, or account and all data).
5. Enter your password to confirm your identity.
6. Tap **Delete My Account** and confirm in the dialog that appears.
7. You will be signed out automatically. Check your email for a confirmation
   with a link to cancel the deletion if needed.

### Via the API

```bash
curl -X DELETE http://localhost:8000/api/v1/users/me \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "password": "your_password",
    "delete_data": false
  }'
```

Set `delete_data` to `true` to delete all associated beekeeping data along with
your account.

## After Deletion

- Your session is terminated immediately and all tokens are invalidated.
- You will receive an email with a link to cancel the deletion within 30 days.
- After the grace period, the deletion is permanent and cannot be undone.
