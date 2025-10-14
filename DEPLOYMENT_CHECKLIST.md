# 🚀 Deployment Checklist

Complete step-by-step guide to deploy your contact form backend to Render.

---

## 📋 Pre-Deployment Checklist

### Local Testing

- [ ] Backend runs locally without errors
- [ ] Email configuration tested (`npm run test-email`)
- [ ] Contact form successfully sends emails
- [ ] File uploads work correctly
- [ ] All environment variables documented
- [ ] Code committed to Git repository

---

## 🔧 Step 1: Prepare Environment Variables

### Create Your Local .env File

1. **Navigate to backend directory:**

   ```bash
   cd backend
   ```

2. **Create .env file** with these values:

   ```env
   NODE_ENV=development
   PORT=5000
   EMAIL_SERVICE=gmail
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@noventraglobal.com
   FRONTEND_URL=http://localhost:5173
   MAX_FILE_SIZE=10485760
   ```

3. **Get Gmail App Password:**

   - Go to: https://myaccount.google.com/apppasswords
   - Create new app password
   - Copy the 16-character code (remove spaces)

4. **Test configuration:**

   ```bash
   npm install
   npm run test-email
   ```

   Expected output:

   ```
   ✅ Email configuration is valid!
   ✅ Admin notification sent successfully!
   ✅ User confirmation sent successfully!
   ```

### Prepare Production Variables

**For Render, you'll need:**

```
NODE_ENV=production
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASS=SG.your-sendgrid-api-key
ADMIN_EMAIL=admin@noventraglobal.com
FRONTEND_URL=https://yourdomain.com
MAX_FILE_SIZE=10485760
```

**Get SendGrid API Key:**

1. Sign up: https://sendgrid.com/free
2. Go to: https://app.sendgrid.com/settings/api_keys
3. Create API Key
4. Copy it (starts with `SG.`)

---

## 📦 Step 2: Prepare Repository

### Ensure Files Are Ready

**Check these files exist:**

```bash
backend/
  ├── server.js ✓
  ├── package.json ✓
  ├── config/ ✓
  ├── middleware/ ✓
  ├── routes/ ✓
  ├── services/ ✓
  └── .gitignore ✓

render.yaml ✓
```

### Commit and Push

```bash
# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Add backend with email service for Render deployment"

# Push to GitHub
git push origin main
```

---

## ☁️ Step 3: Deploy to Render

### Create New Web Service

1. **Go to Render Dashboard:**

   - Visit: https://dashboard.render.com
   - Click "New +" → "Web Service"

2. **Connect Repository:**

   - Choose your Git provider (GitHub recommended)
   - Authorize Render
   - Select `lozics-next-craft` repository

3. **Configure Service:**

   | Setting            | Value                      |
   | ------------------ | -------------------------- |
   | **Name**           | `lozics-backend`           |
   | **Region**         | Oregon (or closest to you) |
   | **Branch**         | `main`                     |
   | **Root Directory** | `backend`                  |
   | **Runtime**        | Node                       |
   | **Build Command**  | `npm install`              |
   | **Start Command**  | `npm start`                |
   | **Plan**           | Free                       |

### Add Environment Variables

In "Environment" tab, add each variable:

**Click "Add Environment Variable" and enter:**

```
Key: NODE_ENV
Value: production
```

```
Key: EMAIL_SERVICE
Value: SendGrid
```

```
Key: EMAIL_HOST
Value: smtp.sendgrid.net
```

```
Key: EMAIL_PORT
Value: 587
```

```
Key: EMAIL_SECURE
Value: false
```

```
Key: EMAIL_USER
Value: apikey
```

```
Key: EMAIL_PASS
Value: SG.your-actual-sendgrid-api-key
```

```
Key: ADMIN_EMAIL
Value: admin@noventraglobal.com
```

```
Key: FRONTEND_URL
Value: https://yourdomain.com
```

```
Key: MAX_FILE_SIZE
Value: 10485760
```

### Deploy

1. Click "Create Web Service"
2. Wait for deployment (2-5 minutes)
3. Render will assign a URL like: `https://lozics-backend.onrender.com`

---

## ✅ Step 4: Verify Deployment

### Test Health Endpoint

```bash
curl https://your-app.onrender.com/api/contact/health
```

**Expected response:**

```json
{
  "success": true,
  "message": "Contact API is running",
  "timestamp": "2025-10-14T..."
}
```

### Check Logs

In Render dashboard:

1. Go to your service
2. Click "Logs" tab
3. Look for:
   ```
   🚀 Server is running on port 10000
   📧 Email service: ✓ Ready
   ```

### Test Form Submission

```bash
curl -X POST https://your-app.onrender.com/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "mobile=+1234567890" \
  -F "companyName=Test Company" \
  -F "companyEmail=info@test.com" \
  -F "message=Test message"
```

**Expected response:**

```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": {
    "adminEmailSent": true,
    "userConfirmationSent": true
  }
}
```

**Check your email!** You should receive:

- Admin notification (to ADMIN_EMAIL)
- User confirmation (to test@example.com)

---

## 🌐 Step 5: Update Frontend

### Option 1: Update Contact.tsx (Already Done!)

The frontend is already configured to work with both local and production backends using `src/config/api.ts`.

### Option 2: Set Frontend Environment Variable

Create `.env.local` in project root:

```env
VITE_API_URL=https://your-backend.onrender.com
```

The frontend will automatically use:

- **Local dev:** `http://localhost:5000`
- **Production:** Value from `VITE_API_URL`

---

## 🎯 Step 6: Deploy Frontend

### Option A: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Option B: Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Follow prompts
```

### Option C: Deploy to Render

1. Create new "Static Site" in Render
2. Connect repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`

---

## 🔄 Step 7: Update CORS

After frontend is deployed, update backend environment variable:

In Render dashboard → Environment:

```
FRONTEND_URL = https://your-actual-frontend-url.com
```

Click "Save Changes" - Render will auto-redeploy.

---

## 🧪 Step 8: End-to-End Testing

### Test Complete Flow

1. **Open your deployed frontend**
2. **Navigate to Contact page**
3. **Fill out form:**

   - Name: Your name
   - Email: Your email
   - Mobile: Your phone
   - Company Name: Test Company
   - Company Email: info@testcompany.com
   - Message: Testing deployment
   - Upload: (optional) test PDF

4. **Submit form**
5. **Verify:**
   - ✅ Success message appears
   - ✅ Admin receives notification email
   - ✅ User receives confirmation email
   - ✅ File attachment included (if uploaded)

---

## 📊 Monitoring

### Set Up Uptime Monitoring (Optional)

**Using UptimeRobot:**

1. Sign up: https://uptimerobot.com
2. Add new monitor:
   - Type: HTTP(S)
   - URL: `https://your-app.onrender.com/api/contact/health`
   - Interval: 5 minutes
3. This keeps your free tier from sleeping!

### Email Analytics

**SendGrid Dashboard:**

- Go to: https://app.sendgrid.com/statistics
- Monitor email deliverability
- Check for bounces/spam reports

---

## 🐛 Troubleshooting

### Backend Issues

| Issue             | Solution                               |
| ----------------- | -------------------------------------- |
| 500 error         | Check Render logs for errors           |
| Email not sending | Verify SendGrid API key is correct     |
| CORS error        | Update FRONTEND_URL to match frontend  |
| Slow response     | Free tier spins down - use UptimeRobot |

### Frontend Issues

| Issue               | Solution                         |
| ------------------- | -------------------------------- |
| Can't reach backend | Check VITE_API_URL is correct    |
| CORS error          | Verify FRONTEND_URL in backend   |
| Form not submitting | Check browser console for errors |

### Email Issues

| Issue                | Solution                            |
| -------------------- | ----------------------------------- |
| Not receiving emails | Check spam folder                   |
| Wrong sender         | Update SendGrid sender verification |
| Bouncing emails      | Verify recipient email addresses    |

---

## 📈 Upgrade to Paid Plan (Optional)

### Render Starter ($7/month)

- No cold starts
- Better performance
- Worth it for production

### SendGrid Essentials ($19.95/month)

- 50,000 emails/month
- Better support
- Needed for high volume

---

## ✅ Final Checklist

- [ ] Backend deployed to Render
- [ ] All environment variables set
- [ ] Health endpoint working
- [ ] Test email sent successfully
- [ ] Frontend updated with backend URL
- [ ] Frontend deployed
- [ ] CORS configured correctly
- [ ] End-to-end test completed
- [ ] Admin receives emails
- [ ] Users receive confirmations
- [ ] File uploads working
- [ ] Monitoring set up (optional)
- [ ] Custom domain configured (optional)

---

## 🎉 Success!

Your contact form backend is now deployed and running!

### Your URLs:

- **Backend:** `https://your-backend.onrender.com`
- **Frontend:** `https://your-frontend.vercel.app` (or Netlify/Render)
- **Health Check:** `https://your-backend.onrender.com/api/contact/health`

### Next Steps:

1. Monitor email deliverability
2. Set up custom domain
3. Enable SSL (automatic on Render)
4. Set up backups
5. Monitor usage

---

## 📚 Documentation Reference

- **RENDER_DEPLOYMENT.md** - Detailed Render guide
- **SAMPLE_ENV_VALUES.md** - Environment variable templates
- **ENV_SETUP_GUIDE.md** - Complete env setup guide
- **QUICK_REFERENCE.md** - API reference
- **SYSTEM_FLOW.md** - Architecture diagrams

---

## 📞 Need Help?

1. Check Render logs
2. Test with curl commands
3. Verify environment variables
4. Review error messages
5. Check SendGrid dashboard
6. Refer to documentation above

**Common Resources:**

- Render Docs: https://render.com/docs
- SendGrid Docs: https://docs.sendgrid.com
- GitHub Issues: (your repo)

---

**Deployment completed!** 🚀
