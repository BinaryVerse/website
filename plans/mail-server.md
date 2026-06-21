# Vercel Serverless SMTP Function

A simple, robust serverless function designed to be deployed to Vercel that sends emails to itself via SMTP. This is useful for forwarding contact forms, alerts, or system notifications.

## Features

- **Vercel Serverless Compatible**: Built to run out-of-the-box as a Vercel serverless function.
- **Spam Protection**: Integrated Cloudflare Turnstile CAPTCHA validation to protect your endpoint from abuse.
- **GoDaddy & Microsoft 365 Support**: Optimized to work with GoDaddy SMTP (both Microsoft 365 and legacy Workspace Email) as well as local mail testing services like **Mailpit**.
- **CORS Enabled**: Pre-configured to support cross-origin requests, allowing you to invoke it from any client-side web application.
- **Local Testing Environment**: Includes a lightweight developer test server simulating Vercel's serverless environment without heavy dependencies.

---

## Directory Structure

```text
.
├── api/
│   └── send.js          # The Vercel serverless function entrypoint
├── scratch/
│   └── test-server.js   # Local testing runner (mimics Vercel function runtime)
├── .env.example         # Example configurations template
├── .env                 # Local configuration variables (ignored by git)
└── package.json         # Project metadata and dependencies (nodemailer)
```

---

## Getting Started

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and adjust the variables:
```bash
cp .env.example .env
```

#### Configuration Options:

* **Mailpit (Local Testing)**:
  ```ini
  SMTP_HOST=localhost
  SMTP_PORT=1025
  SMTP_SECURE=false
  SMTP_USER=test@example.com
  SMTP_PASS=testpassword
  EMAIL_TO=test@example.com
  ```

* **GoDaddy (Microsoft 365)**:
  ```ini
  SMTP_HOST=smtp.office365.com
  SMTP_PORT=587
  SMTP_SECURE=false
  SMTP_USER=your-email@yourdomain.com
  SMTP_PASS=your-godaddy-or-app-password
  EMAIL_TO=your-email@yourdomain.com
  ```

* **GoDaddy (Legacy Workspace Email)**:
  ```ini
  SMTP_HOST=smtpout.secureserver.net
  SMTP_PORT=465
  SMTP_SECURE=true
  SMTP_USER=your-email@yourdomain.com
  SMTP_PASS=your-godaddy-password
  EMAIL_TO=your-email@yourdomain.com
  ```

* **Cloudflare Turnstile**:
  ```ini
  TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
  ```

---

## Local Verification & Development

To test the serverless function locally:

1. **Start the local server**:
   ```bash
   node scratch/test-server.js
   ```
   This will spin up a development server at `http://localhost:3000`.

2. **Send a test request**:
   Use `curl` or any API client (e.g., Postman) to send a POST request with JSON payload. Note that you need to pass a `turnstileToken`:
   ```bash
   curl -X POST http://localhost:3000 \
     -H "Content-Type: application/json" \
     -d '{"subject": "Hello from Mail Function", "text": "This is a test message.", "turnstileToken": "dummy_token"}'
   ```

---

## Deployment to Vercel

### Option 1: Via Vercel CLI
If you have the Vercel CLI installed:
1. Log in to Vercel:
   ```bash
   vercel login
   ```
2. Deploy the project:
   ```bash
   vercel
   ```
3. Set your environment variables in the Vercel dashboard or via CLI:
   ```bash
   vercel env add SMTP_HOST
   vercel env add SMTP_PORT
   vercel env add SMTP_SECURE
   vercel env add SMTP_USER
   vercel env add SMTP_PASS
   vercel env add EMAIL_TO
   vercel env add TURNSTILE_SECRET_KEY
   ```
4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Via Git Integration (GitHub / GitLab / Bitbucket)
1. Push this repository to your Git provider.
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New Project**.
3. Import your repository.
4. Expand **Environment Variables** and add all SMTP configurations:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `EMAIL_TO`
   - `TURNSTILE_SECRET_KEY`
5. Click **Deploy**.