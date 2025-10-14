# Backend Setup Guide

This guide will help you set up the backend server for handling contact form submissions and sending email notifications.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Gmail account or other SMTP email service

## Step-by-Step Setup

### Step 1: Navigate to Backend Directory

```bash
cd backend
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:

- express (Web server framework)
- nodemailer (Email sending)
- cors (Cross-origin resource sharing)
- multer (File upload handling)
- express-validator (Input validation)
- dotenv (Environment variables)

### Step 3: Configure Email Settings

#### Option A: Using Gmail (Recommended for Development)

1. **Enable 2-Step Verification** on your Google Account:

   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification" and follow the setup

2. **Generate an App Password**:

   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select your device
   - Click "Generate"
   - Copy the 16-character password (remove spaces)

3. **Update the `.env` file** in the `backend` directory:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ADMIN_EMAIL=admin@noventraglobal.com
   ```

#### Option B: Using Other Email Services

**SendGrid:**

```env
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

**Mailgun:**

```env
EMAIL_SERVICE=Mailgun
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-username
EMAIL_PASS=your-mailgun-password
```

**Custom SMTP:**

```env
EMAIL_SERVICE=custom
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

### Step 4: Start the Backend Server

#### Development Mode (with auto-restart):

```bash
npm run dev
```

#### Production Mode:

```bash
npm start
```

You should see:

```
==================================================
🚀 Server is running on port 5000
📧 Email service: ✓ Ready
🌐 Frontend URL: http://localhost:5173
📍 API Endpoint: http://localhost:5000/api/contact
==================================================
```

### Step 5: Start the Frontend

In a **new terminal window**, navigate to the project root and start the frontend:

```bash
cd ..
npm run dev
```

The frontend will run on http://localhost:5173

### Step 6: Test the Contact Form

1. Open your browser and go to http://localhost:5173
2. Navigate to the Contact page
3. Fill out the contact form
4. Submit the form

You should:

- See a success message on the frontend
- Receive an admin notification email with all form details
- The user should receive a confirmation email

## Troubleshooting

### Issue: "Email configuration error"

**Solution:**

1. Check that your `.env` file exists in the `backend` directory
2. Verify your email credentials are correct
3. For Gmail, ensure you're using an App Password, not your regular password
4. Check that 2-Step Verification is enabled on your Google Account

### Issue: "CORS error" in browser console

**Solution:**

1. Check that `FRONTEND_URL` in `.env` matches your frontend URL
2. Ensure both frontend and backend are running
3. Clear browser cache and reload

### Issue: "File upload failed"

**Solution:**

1. Check that the `uploads` directory exists in the `backend` folder
2. Verify the file size is under 10MB
3. Ensure the file type is supported (PDF, DOC, DOCX, JPG, PNG, XLS, XLSX)

### Issue: Backend server not starting

**Solution:**

1. Check if port 5000 is already in use: `lsof -i :5000`
2. Kill any process using port 5000: `kill -9 <PID>`
3. Or change the PORT in `.env` to a different port

## API Endpoints

### POST /api/contact

Submit contact form data

**Request Body (multipart/form-data):**

- name (required): User's full name
- email (required): User's email address
- mobile (required): User's mobile number
- designation (optional): User's job title
- companyName (required): Company name
- companyEmail (required): Company email
- message (optional): User's message
- file (optional): Attachment (max 10MB)

**Response:**

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

### GET /api/contact/health

Check if the API is running

**Response:**

```json
{
  "success": true,
  "message": "Contact API is running",
  "timestamp": "2025-10-14T12:00:00.000Z"
}
```

## Email Templates

The backend sends two types of emails:

1. **Admin Notification Email**

   - Sent to the admin email address
   - Contains all form details in a beautiful HTML template
   - Includes any uploaded file as an attachment
   - Allows direct reply to the user

2. **User Confirmation Email**
   - Sent to the user's email address
   - Confirms receipt of their message
   - Includes company contact information
   - Professional and branded

## Production Deployment

For production deployment:

1. Update `.env` with production values:

   ```env
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://yourdomain.com
   ```

2. Use a production-ready email service (SendGrid, Mailgun, AWS SES)

3. Use a process manager like PM2:

   ```bash
   npm install -g pm2
   pm2 start server.js --name lozics-backend
   pm2 save
   pm2 startup
   ```

4. Set up SSL/TLS certificates

5. Configure environment variables on your hosting platform

## Security Considerations

- Never commit `.env` file to version control
- Use strong, unique passwords for email accounts
- Enable 2-Step Verification for email accounts
- Use App Passwords instead of regular passwords
- Implement rate limiting for production
- Use HTTPS in production
- Validate and sanitize all inputs (already implemented)

## Support

If you encounter any issues:

1. Check the server logs for error messages
2. Verify all environment variables are set correctly
3. Test the email configuration using the health endpoint
4. Ensure both frontend and backend are running

For additional help, contact the development team.
