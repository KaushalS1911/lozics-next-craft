# Sample Environment Variables

Copy these values when setting up your `.env` file locally or configuring Render.

---

## 🏠 For Local Development (.env file)

Create a file named `.env` in the `backend/` directory with these values:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Gmail Configuration (for development/testing)
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password

# Admin Email
ADMIN_EMAIL=admin@noventraglobal.com

# Frontend URL
FRONTEND_URL=http://localhost:5173

# File Upload
MAX_FILE_SIZE=10485760
```

### 📝 How to Fill In:

1. **EMAIL_USER**: Replace with your Gmail address
2. **EMAIL_PASS**: Get from https://myaccount.google.com/apppasswords
   - Enable 2-Step Verification first
   - Generate app password
   - Copy the 16-character code (remove spaces)
3. **ADMIN_EMAIL**: Email where you want to receive notifications

---

## ☁️ For Render Production

In Render Dashboard → Environment tab, add these key-value pairs:

### Required Variables:

```
NODE_ENV = production

EMAIL_SERVICE = SendGrid
EMAIL_HOST = smtp.sendgrid.net
EMAIL_PORT = 587
EMAIL_SECURE = false
EMAIL_USER = apikey
EMAIL_PASS = SG.your-sendgrid-api-key

ADMIN_EMAIL = admin@noventraglobal.com

FRONTEND_URL = https://yourdomain.com

MAX_FILE_SIZE = 10485760
```

### 📝 How to Fill In:

1. **EMAIL_PASS**:

   - Sign up at https://sendgrid.com
   - Go to https://app.sendgrid.com/settings/api_keys
   - Create API Key with "Mail Send" permission
   - Copy the key (starts with `SG.`)

2. **FRONTEND_URL**: Your deployed frontend URL
   - If using Vercel: `https://your-app.vercel.app`
   - If using Netlify: `https://your-app.netlify.app`
   - If custom domain: `https://yourdomain.com`

---

## 🎯 Quick Copy-Paste Templates

### Template 1: Local Development with Gmail

```env
NODE_ENV=development
PORT=5000
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
ADMIN_EMAIL=admin@noventraglobal.com
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=10485760
```

### Template 2: Render with SendGrid

```
NODE_ENV=production
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASS=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=admin@noventraglobal.com
FRONTEND_URL=https://yourdomain.com
MAX_FILE_SIZE=10485760
```

### Template 3: Render with Gmail (Not Recommended)

```
NODE_ENV=production
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
ADMIN_EMAIL=admin@noventraglobal.com
FRONTEND_URL=https://yourdomain.com
MAX_FILE_SIZE=10485760
```

---

## 🔑 Getting Your Credentials

### Gmail App Password (Local Development)

1. Go to: https://myaccount.google.com/security
2. Click "2-Step Verification" → Set it up if not already
3. Go to: https://myaccount.google.com/apppasswords
4. App: Select "Mail"
5. Device: Select "Other" → Enter "Lozics Backend"
6. Click "Generate"
7. Copy the 16-character password
8. Remove spaces: `abcd efgh ijkl mnop` → `abcdefghijklmnop`

### SendGrid API Key (Production)

1. Sign up: https://sendgrid.com/free
2. Verify your email
3. Go to: https://app.sendgrid.com/settings/api_keys
4. Click "Create API Key"
5. Name: "Lozics Backend SMTP"
6. Permission: "Full Access" or "Mail Send"
7. Click "Create & View"
8. **Copy immediately** (you won't see it again)
9. Format: `SG.xxxxxxxxxxxxxxxxxxxx...`

---

## 📋 Verification Steps

### After Setting Up Locally:

```bash
# 1. Navigate to backend
cd backend

# 2. Check .env exists
ls -la .env

# 3. Install dependencies
npm install

# 4. Test email configuration
npm run test-email

# Expected output:
# ✅ Email configuration is valid!
# ✅ Admin notification sent successfully!
# ✅ User confirmation sent successfully!

# 5. Start server
npm run dev

# Expected output:
# 🚀 Server is running on port 5000
# 📧 Email service: ✓ Ready
```

### After Setting Up on Render:

```bash
# 1. Test health endpoint
curl https://your-app.onrender.com/api/contact/health

# Expected response:
# {
#   "success": true,
#   "message": "Contact API is running",
#   "timestamp": "2025-10-14T..."
# }

# 2. Check Render logs for:
# ✓ Email server is ready to send messages
```

---

## 🚨 Common Mistakes

### ❌ Wrong:

```env
EMAIL_PASS=abcd efgh ijkl mnop  # Spaces in password
EMAIL_USER=apikey                # Wrong for Gmail
EMAIL_SECURE=true                # Wrong for port 587
```

### ✅ Correct:

```env
EMAIL_PASS=abcdefghijklmnop      # No spaces
EMAIL_USER=myemail@gmail.com     # Your actual email
EMAIL_SECURE=false               # false for port 587
```

---

## 💡 Tips

1. **Remove spaces** from Gmail App Password
2. **EMAIL_USER for SendGrid** is literally the word `apikey`, not your email
3. **EMAIL_PASS for SendGrid** is your API key (starts with `SG.`)
4. **Don't commit** your `.env` file to git
5. **Use SendGrid** for production (more reliable than Gmail)
6. **Update FRONTEND_URL** when you deploy your frontend

---

## 📞 Need Help?

If emails aren't sending:

1. Run `npm run test-email` to diagnose
2. Check credentials are correct
3. For Gmail: Ensure 2-Step Verification is ON
4. For Gmail: Use App Password, not regular password
5. For SendGrid: Verify API key has send permission
6. Check server logs for error messages

---

**That's it!** Copy the appropriate template above, fill in your actual values, and you're ready to go! 🚀
