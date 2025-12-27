# Elaira Novan — Subscription System

This project implements an email subscription system with double opt-in confirmation
and secure token-based unsubscribe.

## What exists in the project

Routes (API):
- POST /api/subscribe — creates a confirm token and sends confirmation email
- GET  /api/confirm?token=... — confirms subscription (never unsubscribes)
- POST /api/unsubscribe — creates an unsubscribe token (optional utility endpoint)
- GET  /api/unsubscribe?token=... — unsubscribes using a single-use token

Pages (UI):
- /subscribe — subscription page (shows status via query param)
- /unsubscribe — unsubscribe result page (shows status via query param)

Database tables (Supabase):
- subscribers — stores email + status (unconfirmed / confirmed / unsubscribed)
- email_tokens — stores token hashes with type (confirm / unsubscribe), expires_at, used_at
- notifications_sent — used later for publication notifications (idempotency)

## Subscribe flow (double opt-in)

/subscribe
→ POST /api/subscribe
→ upsert into subscribers (status="unconfirmed")
→ insert into email_tokens (type="confirm", token_hash, expires_at)
→ send email with:
   - confirm link: /api/confirm?token=...
   - unsubscribe link: /api/unsubscribe?token=...

## Confirm flow

GET /api/confirm?token=...
- token must exist in email_tokens
- token type must be "confirm"
- token must not be expired or used
- mark token used
- update subscribers:
  status="confirmed"
  confirmed_at=now
  unsubscribed_at=null
- redirect to /subscribe?status=confirmed (or invalid/expired/already)

Rule:
Confirm flow NEVER unsubscribes users.

## Unsubscribe flow

GET /api/unsubscribe?token=...
- token must exist in email_tokens
- token type must be "unsubscribe"
- token must not be expired or used
- mark token used
- update subscribers:
  status="unsubscribed"
  unsubscribed_at=now
- redirect to /unsubscribe?status=success (or invalid/expired/already)

## Token rules

- Only token hashes are stored in DB (token_hash)
- Plain tokens are only present in email links
- Tokens are single-use (used_at)
- Tokens expire (expires_at)

## Status values used in UI

status can be:
- success
- confirmed
- already
- expired
- invalid
