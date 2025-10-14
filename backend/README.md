# Lozics Backend API

Backend server for handling contact form submissions and sending email notifications.

## Features

- ✅ Contact form submission handling
- ✅ Email notifications to admin
- ✅ Confirmation emails to users
- ✅ File upload support (PDF, DOC, DOCX, JPG, PNG, XLS, XLSX)
- ✅ Input validation and sanitization
- ✅ CORS enabled
- ✅ Error handling

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail Example)
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Admin Email (where notifications will be sent)
ADMIN_EMAIL=admin@noventraglobal.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# File Upload
MAX_FILE_SIZE=10485760
```

### 3. Gmail Configuration (Recommended)

To use Gmail for sending emails:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this password in the `EMAIL_PASS` field

### 4. Alternative Email Services

You can also use other email services:

#### SendGrid

```env
EMAIL_SERVICE=SendGrid
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

#### Mailgun

```env
EMAIL_SERVICE=Mailgun
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=your-mailgun-username
EMAIL_PASS=your-mailgun-password
```

#### Custom SMTP

```env
EMAIL_SERVICE=custom
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## Running the Server

### Development Mode (with auto-restart)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### 1. Contact Form Submission

**POST** `/api/contact`

**Request Body (multipart/form-data):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "+1234567890",
  "designation": "Manager",
  "companyName": "ABC Corp",
  "companyEmail": "contact@abc.com",
  "message": "Hello, I'm interested in your services",
  "file": "(optional file upload)"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Your message has been sent successfully! We will get back to you soon.",
  "data": {
    "adminEmailSent": true,
    "userConfirmationSent": true
  }
}
```

### 2. Health Check

**GET** `/api/contact/health`

**Response:**

```json
{
  "success": true,
  "message": "Contact API is running",
  "timestamp": "2025-10-14T12:00:00.000Z"
}
```

## File Upload Specifications

- **Supported formats:** PDF, DOC, DOCX, JPG, PNG, XLS, XLSX
- **Maximum file size:** 10MB
- **Files are temporarily stored and deleted after email is sent**

## Email Templates

The server sends two types of emails:

1. **Admin Notification:** Beautiful HTML email with all form details sent to admin
2. **User Confirmation:** Professional thank you email sent to the user

## Error Handling

The API returns appropriate error messages:

- `400` - Validation errors or invalid file type
- `500` - Server errors (email sending failures, etc.)

## Validation Rules

- **Name:** Required, 2-100 characters
- **Email:** Required, valid email format
- **Mobile:** Required, valid phone number format
- **Company Name:** Required, 2-200 characters
- **Company Email:** Required, valid email format
- **Designation:** Optional, max 100 characters
- **Message:** Optional, max 2000 characters

## Security Features

- Input validation and sanitization
- File type validation
- File size limits
- CORS protection
- Email normalization

## Troubleshooting

### Email not sending

1. Check your `.env` configuration
2. Verify your email credentials
3. For Gmail, ensure you're using an App Password (not your regular password)
4. Check the server logs for specific error messages

### File upload issues

1. Ensure the `uploads` directory exists
2. Check file size (max 10MB)
3. Verify file type is supported

### CORS errors

1. Update `FRONTEND_URL` in `.env` to match your frontend URL
2. Ensure the frontend is running on the specified URL

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your `.env`
2. Use a production-ready email service (SendGrid, Mailgun, etc.)
3. Use proper SSL/TLS certificates
4. Set appropriate CORS origins
5. Use a process manager like PM2:

```bash
npm install -g pm2
pm2 start server.js --name lozics-backend
pm2 save
```

## Support

For issues or questions, contact the development team.
