# Environment Variables Setup Guide

Complete guide to setting up environment variables for both local development and production deployment.

---

## 📋 Quick Reference

| File                 | Purpose                             | When to Use                             |
| -------------------- | ----------------------------------- | --------------------------------------- |
| `.env.sample`        | Complete reference with all options | Reference for all environments          |
| `.env.local.sample`  | Quick local dev setup               | Copy to `.env` for local dev            |
| `.env.render.sample` | Render production setup             | Reference when deploying to Render      |
| `.env`               | Your actual config                  | Create this file locally (never commit) |

---

## 🚀 Local Development Setup

### Step 1: Create Your .env File

```bash
cd backend
cp .env.local.sample .env
```

### Step 2: Get Gmail App Password

1. **Enable 2-Step Verification:**

   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow the setup process

2. **Create App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other" (enter "Lozics Backend")
   - Click "Generate"
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 3: Edit .env File

Open `backend/.env` and update:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=abcdefghijklmnop
ADMIN_EMAIL=admin@noventraglobal.com
```

### Step 4: Test Configuration

```bash
# Install dependencies
npm install

# Test email setup
npm run test-email

# If successful, start the server
npm run dev
```

You should see:

```
✅ Email configuration is valid!
✅ Admin notification sent successfully!
✅ User confirmation sent successfully!
```

---

## 🌐 Render Production Setup

### Option 1: Using Render Dashboard (Recommended)

1. **Go to Render Dashboard:**

   - Visit: https://dashboard.render.com
   - Select your backend service
   - Click "Environment" tab

2. **Add Environment Variables:**

Click "Add Environment Variable" for each:

```
Key: NODE_ENV
Value: production

Key: EMAIL_SERVICE
Value: SendGrid

Key: EMAIL_HOST
Value: smtp.sendgrid.net

Key: EMAIL_PORT
Value: 587

Key: EMAIL_SECURE
Value: false

Key: EMAIL_USER
Value: apikey

Key: EMAIL_PASS
Value: SG.your-sendgrid-api-key-here

Key: ADMIN_EMAIL
Value: admin@noventraglobal.com

Key: FRONTEND_URL
Value: https://yourdomain.com

Key: MAX_FILE_SIZE
Value: 10485760
```

3. **Save Changes:**
   - Click "Save Changes"
   - Render will automatically redeploy

### Option 2: Using render.yaml

The `render.yaml` file in the project root will automatically set up the service structure, but you still need to add sensitive values manually in the dashboard.

---

## 📧 Email Service Setup

### Gmail (Local Development)

**Pros:**

- Free
- Easy to set up
- Good for testing

**Cons:**

- Not recommended for production
- Daily sending limits
- May be marked as spam

**Setup:**

```env
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### SendGrid (Production - Recommended)

**Pros:**

- Reliable delivery
- 100 free emails/day
- Detailed analytics
- Better reputation

**Cons:**

- Requires signup
- Need to verify domain for best results

**Setup Steps:**

1. **Sign Up:**

   - Go to: https://sendgrid.com
   - Create free account

2. **Create API Key:**

   - Go to: https://app.sendgrid.com/settings/api_keys
   - Click "Create API Key"
   - Name: "Lozics Backend"
   - Permissions: "Full Access" (or "Mail Send" only)
   - Click "Create & View"
   - **Copy the key immediately** (starts with `SG.`)

3. **Configure:**

```env
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASS=SG.xxxxxxxxxxxxxxxxxxxxxxxx
```

4. **Verify Sender (Optional but Recommended):**
   - Go to: https://app.sendgrid.com/settings/sender_auth
   - Verify your email address or domain
   - This improves deliverability

### Mailgun (Alternative)

**Setup:**

1. Sign up: https://www.mailgun.com
2. Get SMTP credentials from dashboard
3. Configure:

```env
EMAIL_SERVICE=Mailgun
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=postmaster@your-domain.mailgun.org
EMAIL_PASS=your-mailgun-password
```

### AWS SES (High Volume)

**Setup:**

1. Create AWS account
2. Set up SES in AWS Console
3. Create SMTP credentials
4. Configure:

```env
EMAIL_SERVICE=SES
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-aws-smtp-username
EMAIL_PASS=your-aws-smtp-password
```

---

## 🔍 Environment Variables Explained

### NODE_ENV

- **Local:** `development`
- **Production:** `production`
- **Purpose:** Determines error detail level, logging, etc.

### PORT

- **Local:** `5000`
- **Render:** Automatically set (usually `10000`)
- **Purpose:** Server port number

### EMAIL_SERVICE

- **Values:** `gmail`, `SendGrid`, `Mailgun`, `SES`, `custom`
- **Purpose:** Email provider name

### EMAIL_HOST

- **Purpose:** SMTP server hostname
- **Examples:** `smtp.gmail.com`, `smtp.sendgrid.net`

### EMAIL_PORT

- **Common:** `587` (TLS), `465` (SSL), `25` (unencrypted)
- **Recommended:** `587`

### EMAIL_SECURE

- **Values:** `true` or `false`
- **Use `false`** for port 587 (TLS/STARTTLS)
- **Use `true`** for port 465 (SSL)

### EMAIL_USER

- **Gmail:** Your email address
- **SendGrid:** `apikey` (literally the word "apikey")
- **Others:** Your SMTP username

### EMAIL_PASS

- **Gmail:** 16-character App Password
- **SendGrid:** API Key (starts with `SG.`)
- **Others:** SMTP password

### ADMIN_EMAIL

- **Purpose:** Where contact notifications are sent
- **Example:** `admin@noventraglobal.com`

### FRONTEND_URL

- **Local:** `http://localhost:5173`
- **Production:** `https://yourdomain.com`
- **Purpose:** CORS configuration

### MAX_FILE_SIZE

- **Value:** Bytes (10MB = `10485760`)
- **Purpose:** Maximum file upload size

---

## ✅ Testing Checklist

### Local Development

```bash
# 1. Check .env file exists
ls -la backend/.env

# 2. Test email configuration
cd backend
npm run test-email

# 3. Start server
npm run dev

# 4. Test health endpoint
curl http://localhost:5000/api/contact/health

# 5. Test from frontend
# - Start frontend: npm run dev
# - Go to contact page
# - Submit form
# - Check emails
```

### Production (Render)

```bash
# 1. Test health endpoint
curl https://your-service.onrender.com/api/contact/health

# 2. Check logs in Render dashboard
# Look for: "✓ Email server is ready to send messages"

# 3. Test form submission from deployed frontend

# 4. Verify emails received
```

---

## 🐛 Troubleshooting

### "Email configuration error"

**Problem:** Can't connect to email server

**Solutions:**

```bash
# Check .env file exists
ls -la backend/.env

# Check environment variables are loaded
node -e "require('dotenv').config(); console.log(process.env.EMAIL_USER)"

# For Gmail: Ensure using App Password
# For SendGrid: Verify API key is correct
```

### "Invalid login"

**Problem:** Wrong credentials

**Gmail:**

- Ensure 2-Step Verification is enabled
- Use App Password, not regular password
- Remove spaces from App Password

**SendGrid:**

- Ensure EMAIL_USER is exactly `apikey`
- Verify API key is complete
- Check API key has Send permissions

### "ECONNREFUSED"

**Problem:** Can't reach SMTP server

**Solutions:**

- Check EMAIL_HOST is correct
- Verify EMAIL_PORT is correct
- Check firewall/network settings

### "Missing environment variables"

**Problem:** .env not loaded

**Solutions:**

```bash
# Ensure .env is in backend/ directory
cd backend
ls -la .env

# Check file is not named .env.txt or .env.sample
# File should be exactly ".env"
```

---

## 🔒 Security Best Practices

### DO ✅

- Use App Passwords for Gmail
- Enable 2-factor authentication
- Use different credentials for dev/prod
- Rotate credentials regularly
- Use environment-specific email addresses
- Keep .env file private
- Use production email services (SendGrid, etc.)

### DON'T ❌

- Commit .env to git
- Share credentials publicly
- Use production credentials locally
- Hardcode sensitive values
- Use weak passwords
- Share your .env file
- Post credentials in support tickets

---

## 📚 Additional Resources

### Documentation

- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [SendGrid SMTP](https://docs.sendgrid.com/for-developers/sending-email/integrating-with-the-smtp-api)
- [Mailgun SMTP](https://documentation.mailgun.com/en/latest/quickstart-sending.html)
- [AWS SES SMTP](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html)
- [Render Environment Variables](https://render.com/docs/environment-variables)

### Email Services Comparison

| Service  | Free Tier        | Best For    | Complexity |
| -------- | ---------------- | ----------- | ---------- |
| Gmail    | Unlimited\*      | Development | Easy       |
| SendGrid | 100/day          | Production  | Easy       |
| Mailgun  | 5,000/month      | Production  | Medium     |
| AWS SES  | 62,000/month\*\* | High Volume | Hard       |

\*With daily limits  
\*\*First 12 months, then paid

---

## 📞 Support

If you're still having issues:

1. Check the server logs
2. Verify all environment variables are set
3. Test with `npm run test-email`
4. Check email service dashboard for errors
5. Review error messages carefully

---

**Quick Start Commands:**

```bash
# Local development
cd backend
cp .env.local.sample .env
# Edit .env with your credentials
npm install
npm run test-email
npm run dev

# Production (Render)
# Set environment variables in Render dashboard
# Deploy will happen automatically
```
