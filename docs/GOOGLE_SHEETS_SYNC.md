# Google Sheets applicant sync

The Growth Challenge registration form writes each successful applicant to a
Google Sheet from this website (not from the Bluepin Firebase API).

Flow:

1. The browser registers the applicant with the Bluepin applicant API and
   receives the referral code/link.
2. The browser fires a best-effort, non-blocking request to
   `POST /api/growth-challenge/applicant` in this app.
3. The Next.js route validates the payload and upserts the applicant into the
   configured Google Sheet.

Because the sheet write happens after registration, a missing or broken Google
Sheets setup never prevents an applicant from receiving their referral link.

## Required configuration

Set these environment variables for the Bluepin-web deployment (Firebase App
Hosting → backend → Settings → Environment):

| Variable | Required | Description |
| --- | --- | --- |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Yes | ID from the sheet URL: `https://docs.google.com/spreadsheets/d/<ID>/edit` |
| `GOOGLE_SHEETS_SHEET_NAME` | No | Tab name. Defaults to `Growth Challenge`. Created automatically if missing. |
| `GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON` | Yes* | Full service-account JSON key as one value. |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Yes* | Service-account email, if not using the JSON variable. |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Yes* | Service-account private key, if not using the JSON variable. |

\* Use either `GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON` or the
`GOOGLE_SHEETS_CLIENT_EMAIL` + `GOOGLE_SHEETS_PRIVATE_KEY` pair.

If the private key is stored on its own, escaped newlines (`\n`) are accepted.

## Google Cloud setup

1. Open [Google Cloud Console](https://console.cloud.google.com/) and select the
   project used for Bluepin.
2. Enable the **Google Sheets API**.
3. Create a service account under **IAM & Admin → Service Accounts**.
4. Create a JSON key for that service account and download it.
5. Open the target Google Sheet and click **Share**.
6. Share the sheet with the service account email (the `client_email` from the
   JSON key) with **Editor** access.
7. Copy the spreadsheet ID from the sheet URL.
8. Add the environment variables above to the Bluepin-web App Hosting backend.

The service account does not need access to the rest of the Google Cloud
project. Only the Google Sheets API and the shared spreadsheet are required.

## Sheet layout

On first use the route creates the configured tab if needed and adds this header
row:

```text
Timestamp | Full Name | Work/Professional Email | Age | LinkedIn Profile URL | Referral Code | Referral Link | Status
```

Applicants are upserted by email address:

- A new email appends a row.
- A repeat registration for the same email updates the existing row.
- `Status` is `Active` or `Paused` based on the referral code returned by the API.

Existing sheets with matching header names are supported. Header matching is
case-insensitive and accepts common aliases such as `Email`, `Name`, and
`LinkedIn`.

## Behavior and troubleshooting

- The route returns `202` when the sheet sync is skipped or fails. The browser
  intentionally ignores this result because registration has already succeeded.
- If no Sheets configuration is present, the server logs a warning and skips the
  sync.
- If the spreadsheet is not shared with the service account, the server logs a
  `Google Sheets request failed (403)` error.
- If the Google Sheets API is not enabled, the server logs a `403` or `404`
  error from the API.
- If a tab is renamed after setup, update `GOOGLE_SHEETS_SHEET_NAME` or the route
  will create a new tab with the configured name.

## Manual verification

After deploying with the environment variables set, submit the form on
`/growth-challenge` and confirm a row appears in the configured tab. Repeated
submissions with the same email should update the row instead of adding a
duplicate.
