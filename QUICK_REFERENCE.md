# Contact Form Backend - Quick Reference Guide

## 📋 What Was Created

A complete backend system for your contact form with the following features:

### Backend Structure

```
backend/
├── config/
│   └── email.config.js         # Email configuration
├── middleware/
│   ├── upload.middleware.js    # File upload handling
│   └── validator.middleware.js # Form validation
├── routes/
│   └── contact.routes.js       # API endpoints
├── services/
│   └── emailService.js         # Email sending logic
├── uploads/                     # Temporary file storage
├── .env                         # Configuration (DO NOT COMMIT)
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies
├── server.js                   # Main server file
└── README.md                   # Backend documentation
```

### Features Implemented

✅ **Contact Form Submission**

- Receives form data from frontend
- Validates all inputs
- Handles file uploads (up to 10MB)
- Supports: PDF, DOC, DOCX, JPG, PNG, XLS, XLSX

✅ **Email Notifications**

- Beautiful HTML email template for admin
- Professional confirmation email for users
- Automatic file attachment handling
- Reply-to functionality

✅ **Security**

- Input validation and sanitization
- File type and size validation
- CORS protection
- Error handling

✅ **Frontend Integration**

- Updated Contact.tsx to connect to backend
- Form data submission via FormData API
- Error handling and user feedback

## 🚀 Quick Start (5 Minutes)

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Configure Email (Choose One)

#### Option A: Gmail (Easiest for Development)

1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Update `backend/.env`:

```env
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
ADMIN_EMAIL=admin@noventraglobal.com
```

#### Option B: SendGrid (Best for Production)

```env
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
ADMIN_EMAIL=admin@noventraglobal.com
```

### 3. Start Backend Server

```bash
npm run dev
```

### 4. Start Frontend (in a new terminal)

```bash
cd ..
npm run dev
```

### 5. Test It!

1. Open http://localhost:5173
2. Go to Contact page
3. Fill and submit the form
4. Check your email! 📧

## 📧 Email Templates

### Admin Notification Email

- **To:** ADMIN_EMAIL (configured in .env)
- **Subject:** 🔔 New Contact Form Submission from [Name]
- **Contains:**
  - User's full information
  - Company details
  - Message content
  - Timestamp
  - File attachment (if uploaded)
  - Direct reply functionality

### User Confirmation Email

- **To:** User's email address
- **Subject:** Thank You for Contacting NOVENTRA GLOBAL SOURCING
- **Contains:**
  - Personalized greeting
  - Confirmation message
  - Company contact information
  - Professional branding

## 🔧 API Endpoints

### POST /api/contact

Submit contact form

**URL:** `http://localhost:5000/api/contact`

**Method:** `POST`

**Content-Type:** `multipart/form-data`

**Body Parameters:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | User's full name |
| email | string | Yes | User's email address |
| mobile | string | Yes | User's mobile number |
| designation | string | No | Job title |
| companyName | string | Yes | Company name |
| companyEmail | string | Yes | Company email |
| message | string | No | User's message |
| file | file | No | Attachment (max 10MB) |

**Success Response (200):**

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

**Error Response (400):**

```json
{
  "success": false,
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### GET /api/contact/health

Health check endpoint

**URL:** `http://localhost:5000/api/contact/health`

**Response:**

```json
{
  "success": true,
  "message": "Contact API is running",
  "timestamp": "2025-10-14T12:00:00.000Z"
}
```

## 🛠️ Configuration Options

### Environment Variables (.env)

```env
# Server
PORT=5000                    # Backend server port
NODE_ENV=development         # Environment (development/production)

# Email Service
EMAIL_SERVICE=gmail          # Email provider
EMAIL_HOST=smtp.gmail.com    # SMTP host
EMAIL_PORT=587               # SMTP port
EMAIL_SECURE=false           # Use TLS
EMAIL_USER=your-email        # SMTP username
EMAIL_PASS=your-password     # SMTP password

# Recipients
ADMIN_EMAIL=admin@example.com # Where to send notifications

# CORS
FRONTEND_URL=http://localhost:5173  # Frontend URL

# Upload
MAX_FILE_SIZE=10485760       # 10MB in bytes
```

## 🐛 Troubleshooting

### "Email configuration error"

**Problem:** Email credentials are incorrect or missing

**Solution:**

1. Check `backend/.env` file exists
2. Verify EMAIL_USER and EMAIL_PASS are correct
3. For Gmail: Use App Password, not regular password
4. Test with: `curl http://localhost:5000/api/contact/health`

### "CORS error"

**Problem:** Frontend can't connect to backend

**Solution:**

1. Ensure backend is running on port 5000
2. Check FRONTEND_URL in .env matches your frontend
3. Clear browser cache

### "File upload failed"

**Problem:** File not being uploaded

**Solution:**

1. Check file size (max 10MB)
2. Verify file type is supported
3. Ensure `backend/uploads/` directory exists

### "Port already in use"

**Problem:** Port 5000 is occupied

**Solution:**

```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or change PORT in .env
```

## 📦 Dependencies

### Backend

- **express** - Web server framework
- **nodemailer** - Email sending
- **multer** - File upload handling
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Install all:

```bash
cd backend && npm install
```

## 🔒 Security Best Practices

✅ Input validation on all fields  
✅ File type and size restrictions  
✅ Email sanitization  
✅ CORS protection  
✅ Environment variable protection  
✅ SQL injection prevention (no database used)  
✅ XSS prevention

**Important:**

- Never commit `.env` file
- Use App Passwords for Gmail
- Enable 2-Step Verification
- Use HTTPS in production
- Implement rate limiting for production

## 📞 Support

Need help?

1. **Check the logs:** Look at terminal output for error messages
2. **Read the docs:** See `backend/README.md` and `BACKEND_SETUP.md`
3. **Test the API:** Use the health endpoint
4. **Verify email:** Test email credentials separately

## 🎯 Testing Checklist

Before going live, test:

- [ ] Backend server starts successfully
- [ ] Email configuration verified
- [ ] Contact form loads
- [ ] Form validation works
- [ ] File upload works
- [ ] Admin receives notification email
- [ ] User receives confirmation email
- [ ] Error handling works
- [ ] File attachments arrive correctly
- [ ] Reply-to email works

## 🚀 Production Deployment

For production:

1. **Use production email service:**

   - SendGrid
   - Mailgun
   - AWS SES
   - Postmark

2. **Update environment:**

   ```env
   NODE_ENV=production
   FRONTEND_URL=https://yourdomain.com
   ```

3. **Use process manager:**

   ```bash
   npm install -g pm2
   pm2 start backend/server.js --name lozics-backend
   pm2 save
   pm2 startup
   ```

4. **Enable HTTPS**

5. **Set up monitoring**

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Express.js Guide](https://expressjs.com/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [SendGrid Setup](https://sendgrid.com/docs/)

---

**Created:** October 2025  
**Version:** 1.0.0  
**License:** Private
