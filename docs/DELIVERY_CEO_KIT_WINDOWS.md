# CEO Kit (Windows) — Delivery (Google Drive restricted Release folder)

## Goal
After successful Stripe payment for **CEO Kit (Windows)**, the buyer should receive a Google Drive link to a **restricted** Release folder that contains the product ZIP.

## Recommended flow

1) Upload the release ZIP to Google Drive into a folder like:
   - `CEO Kit (Windows) / Releases / <version>`

2) Keep folder **Restricted** by default.

3) On purchase:
   - Grant the buyer email **Viewer** access to the **single ZIP file** (not the folder).
   - Email them:
     - the Drive link (file link)
     - a short install instruction:
       - unzip to `C:\Users\<you>\.openclaw\workspace\ceo-kit-win`
       - run `scripts\setup.ps1` and `scripts\install-tasks.ps1`

## Notes / gotchas
- If the buyer uses a different email than their Google account, they may need to forward you the correct email.
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
