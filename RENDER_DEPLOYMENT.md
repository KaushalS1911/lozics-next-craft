# Deploying Backend to Render

Complete guide to deploy your contact form backend to Render.

## 📋 Prerequisites

1. A [Render](https://render.com) account (free tier available)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Email service credentials (Gmail App Password or SendGrid API key)

---

## 🚀 Quick Deployment Steps

### Step 1: Prepare Your Repository

Ensure your backend code is pushed to GitHub/GitLab:

```bash
# If not already done
git add .
git commit -m "Add backend for contact form"
git push origin main
```

### Step 2: Create a New Web Service on Render

1. **Go to Render Dashboard**

   - Visit https://dashboard.render.com
   - Click "New +" button
   - Select "Web Service"

2. **Connect Your Repository**

   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Render to access your repositories
   - Select your `lozics-next-craft` repository

3. **Configure the Service**

   Fill in the following settings:

   | Field              | Value                                     |
   | ------------------ | ----------------------------------------- |
   | **Name**           | `lozics-backend` (or any name you prefer) |
   | **Region**         | Choose closest to your users              |
   | **Branch**         | `main` (or your default branch)           |
   | **Root Directory** | `backend`                                 |
   | **Runtime**        | `Node`                                    |
   | **Build Command**  | `npm install`                             |
   | **Start Command**  | `npm start`                               |
   | **Instance Type**  | `Free` (or paid for production)           |

### Step 3: Set Environment Variables

In the Render dashboard, under "Environment" tab, add these variables:

| Key             | Value                       | Example                              |
| --------------- | --------------------------- | ------------------------------------ |
| `NODE_ENV`      | `production`                | `production`                         |
| `PORT`          | `10000`                     | (Render will set this automatically) |
| `EMAIL_SERVICE` | Your email service          | `gmail` or `SendGrid`                |
| `EMAIL_HOST`    | SMTP host                   | `smtp.gmail.com`                     |
| `EMAIL_PORT`    | SMTP port                   | `587`                                |
| `EMAIL_SECURE`  | `false` for TLS             | `false`                              |
| `EMAIL_USER`    | Your email address          | `your-email@gmail.com`               |
| `EMAIL_PASS`    | Your email password/API key | `your-app-password`                  |
| `ADMIN_EMAIL`   | Admin email address         | `admin@noventraglobal.com`           |
| `FRONTEND_URL`  | Your frontend URL           | `https://yourdomain.com`             |
| `MAX_FILE_SIZE` | Max file size in bytes      | `10485760`                           |

**Important Notes:**

- For Gmail: Use an App Password, not your regular password
- For production: Consider using SendGrid, Mailgun, or AWS SES
- `PORT` will be automatically set by Render (usually 10000)

### Step 4: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start your server
   - Assign a URL like: `https://lozics-backend.onrender.com`

### Step 5: Update Frontend

Update your frontend to use the Render backend URL:

**In `src/pages/Contact.tsx`:**

```typescript
// Change from
const response = await fetch('http://localhost:5000/api/contact', {

// To
const response = await fetch('https://your-render-url.onrender.com/api/contact', {
```

**Or better, use environment variables:**

Create `.env.local` in your frontend:

```env
VITE_API_URL=https://your-render-url.onrender.com
```

Update `Contact.tsx`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const response = await fetch(`${API_URL}/api/contact`, {
  method: "POST",
  body: formDataToSend,
});
```

---

## 📝 Configuration Files for Render

### Backend package.json (Already Configured)

Your `backend/package.json` should have:

```json
{
  "name": "lozics-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
```

### render.yaml (Optional - Infrastructure as Code)

You can also create a `render.yaml` in your project root for automated deployments:

```yaml
services:
  - type: web
    name: lozics-backend
    runtime: node
    rootDir: backend
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: EMAIL_SERVICE
        sync: false
      - key: EMAIL_HOST
        sync: false
      - key: EMAIL_PORT
        sync: false
      - key: EMAIL_SECURE
        sync: false
      - key: EMAIL_USER
        sync: false
      - key: EMAIL_PASS
        sync: false
      - key: ADMIN_EMAIL
        sync: false
      - key: FRONTEND_URL
        sync: false
      - key: MAX_FILE_SIZE
        value: "10485760"
```

---

## 🔒 Security Best Practices for Production

### 1. Use Production Email Service

**SendGrid (Recommended):**

```env
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

**Why SendGrid?**

- More reliable than Gmail for production
- Better deliverability
- Detailed analytics
- Free tier: 100 emails/day

**Setup SendGrid:**

1. Sign up at https://sendgrid.com
2. Create an API Key
3. Verify your domain (optional but recommended)
4. Use the API key as `EMAIL_PASS`

### 2. Update CORS Settings

Once your frontend is deployed, update `backend/server.js`:

```javascript
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Your actual frontend URL
    credentials: true,
  })
);
```

### 3. Enable Health Checks

Render automatically pings your service. The `/api/contact/health` endpoint is already set up for this.

---

## 🧪 Testing Your Deployed Backend

### 1. Test Health Endpoint

```bash
curl https://your-render-url.onrender.com/api/contact/health
```

Expected response:

```json
{
  "success": true,
  "message": "Contact API is running",
  "timestamp": "2025-10-14T12:00:00.000Z"
}
```

### 2. Test Contact Form Submission

```bash
curl -X POST https://your-render-url.onrender.com/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "mobile=+1234567890" \
  -F "companyName=Test Co" \
  -F "companyEmail=info@test.com" \
  -F "message=Test message"
```

### 3. Check Logs

In Render dashboard:

1. Go to your service
2. Click "Logs" tab
3. Watch for any errors or success messages

---

## 📊 Monitoring & Maintenance

### Free Tier Limitations

Render's free tier includes:

- ✅ 750 hours/month (enough for 24/7)
- ⚠️ Spins down after 15 minutes of inactivity
- ⚠️ Cold start time: ~30 seconds on first request
- ✅ Automatic deploys on git push
- ✅ Free SSL certificate

### Keep Service Warm (Optional)

To prevent cold starts, you can ping your service every 10 minutes:

**Option 1: Use a service like UptimeRobot**

- Sign up at https://uptimerobot.com
- Add a monitor for your health endpoint
- Set interval to 5 minutes

**Option 2: Use a cron job service**

- Use services like cron-job.org
- Ping your health endpoint every 10 minutes

### Monitor Email Deliverability

Check your email service dashboard regularly:

- SendGrid: https://app.sendgrid.com/statistics
- Mailgun: https://app.mailgun.com/app/statistics

---

## 🐛 Troubleshooting

### Issue: "Application failed to respond"

**Solution:**

1. Check that `PORT` is not hardcoded
2. Ensure server.js uses `process.env.PORT`
3. Check build logs for errors

### Issue: "Email not sending"

**Solution:**

1. Verify environment variables are set correctly
2. Check email service credentials
3. Review logs for error messages
4. Test with `npm run test-email` locally first

### Issue: "CORS errors"

**Solution:**

1. Update `FRONTEND_URL` to match your deployed frontend
2. Ensure CORS middleware includes your frontend domain
3. Check that credentials are set correctly

### Issue: "File upload failing"

**Solution:**

1. Render's free tier has limited disk space
2. Files are stored in memory/temp directory
3. Ensure cleanup is working (5-second timeout)
4. Consider using cloud storage (AWS S3, Cloudinary) for large files

### Issue: "Cold starts are slow"

**Solutions:**

1. Upgrade to paid tier ($7/month) - no cold starts
2. Use UptimeRobot to keep service warm
3. Add loading states in frontend for better UX

---

## 💰 Pricing

### Free Tier

- **Cost:** $0/month
- **Specs:** 512 MB RAM, 0.1 CPU
- **Limitations:** Spins down after 15 min inactivity
- **Best for:** Development, testing, low-traffic sites

### Starter Plan

- **Cost:** $7/month
- **Specs:** 512 MB RAM, 0.5 CPU
- **Benefits:** No spin-down, faster performance
- **Best for:** Production sites

### Pro Plan

- **Cost:** $25/month
- **Specs:** 2 GB RAM, 1 CPU
- **Benefits:** More resources, better performance
- **Best for:** High-traffic sites

---

## 🔄 Continuous Deployment

Render automatically deploys when you push to your git repository:

```bash
# Make changes to your backend
git add backend/
git commit -m "Update email template"
git push origin main

# Render will automatically:
# 1. Detect the push
# 2. Build your app
# 3. Deploy the new version
# 4. Zero-downtime deployment
```

---

## 📚 Additional Resources

### Render Documentation

- [Deploy a Node.js App](https://render.com/docs/deploy-node-express-app)
- [Environment Variables](https://render.com/docs/environment-variables)
- [Persistent Disks](https://render.com/docs/disks)

### Email Services

- [SendGrid Docs](https://docs.sendgrid.com/)
- [Mailgun Docs](https://documentation.mailgun.com/)
- [AWS SES Docs](https://docs.aws.amazon.com/ses/)

### Monitoring

- [UptimeRobot](https://uptimerobot.com/)
- [Cron-job.org](https://cron-job.org/)

---

## ✅ Pre-Deployment Checklist

Before deploying:

- [ ] Code pushed to Git repository
- [ ] Backend tested locally
- [ ] Email service configured and tested
- [ ] Environment variables documented
- [ ] Production email service set up (SendGrid/Mailgun)
- [ ] CORS configured for production frontend URL
- [ ] Error handling tested
- [ ] Logs reviewed
- [ ] Health endpoint working

After deployment:

- [ ] Service deployed successfully
- [ ] Environment variables set in Render
- [ ] Health endpoint accessible
- [ ] Test form submission works
- [ ] Admin receives email
- [ ] User receives confirmation email
- [ ] Frontend updated with backend URL
- [ ] CORS working correctly
- [ ] SSL certificate active (automatic)
- [ ] Monitoring set up (optional)

---

## 🎉 Success!

Your backend is now deployed and ready for production use!

**Your backend URL:** `https://your-service-name.onrender.com`

**API Endpoints:**

- Health: `https://your-service-name.onrender.com/api/contact/health`
- Contact: `https://your-service-name.onrender.com/api/contact`

**Next Steps:**

1. Update frontend with backend URL
2. Deploy frontend (Vercel/Netlify/Render)
3. Test end-to-end flow
4. Set up monitoring
5. Configure custom domain (optional)

Need help? Check the [Render Community](https://community.render.com/) or [support docs](https://render.com/docs).
