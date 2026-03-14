# CEO Kit (Windows) — Delivery (Google Drive link, unrestricted)

## Goal
After successful Stripe payment for **CEO Kit (Windows)**, the buyer should receive a Google Drive link to the product ZIP.

We intentionally keep the file **unrestricted ("Anyone with the link")** so recipients do not need a Google account.

## Recommended flow

1) Upload the release ZIP to Google Drive into a folder like:
   - `CEO Kit (Windows) / Releases / <version>`

2) Set the ZIP file sharing to **Anyone with the link → Viewer**.

3) On purchase:
   - Email them:
     - the Drive link (file link)
     - a short install instruction:
       - unzip to `C:\Users\<you>\.openclaw\workspace\ceo-kit-win`
       - run `scripts\setup.ps1` (this installs Scheduled Tasks)

## Notes / gotchas
- Because the file is unrestricted-by-link, treat the link as the deliverable. If you want stricter controls later, migrate to per-buyer delivery hosts (pCloud) or per-buyer copies.
- Consider versioned folders so prior customers keep stable access.

## Template email (short)
Subject: Your CEO Kit (Windows) download

Body:
Thanks for your purchase — here’s your download link:

<DRIVE_LINK>

Install:
1) Unzip to `C:\Users\<you>\.openclaw\workspace\ceo-kit-win`
2) Run PowerShell:
   - `scripts\setup.ps1`
   - `scripts\install-tasks.ps1`

If you get stuck, reply to this email with a screenshot of the error.
