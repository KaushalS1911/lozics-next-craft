# Contact Form System Flow

## 📊 Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                             │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      FRONTEND (React/Vite)                           │
│                  http://localhost:5173                               │
├─────────────────────────────────────────────────────────────────────┤
│  Contact.tsx                                                         │
│  ├─ Contact Form                                                     │
│  │  ├─ Name, Email, Mobile                                          │
│  │  ├─ Company Name, Company Email                                  │
│  │  ├─ Designation, Message                                         │
│  │  └─ File Upload (optional)                                       │
│  │                                                                   │
│  └─ Form Submission Handler                                         │
│     ├─ Create FormData object                                       │
│     ├─ Add all form fields                                          │
│     ├─ Append file if selected                                      │
│     └─ POST to backend API                                          │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ HTTP POST
                                  │ multipart/form-data
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BACKEND (Express.js)                              │
│                  http://localhost:5000                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  1. CORS Middleware                                                  │
│     └─ Verify request origin                                        │
│                                                                       │
│  2. Upload Middleware (Multer)                                      │
│     ├─ Validate file type                                           │
│     ├─ Check file size (< 10MB)                                     │
│     └─ Save to uploads/ temporarily                                 │
│                                                                       │
│  3. Validation Middleware                                           │
│     ├─ Validate required fields                                     │
│     ├─ Sanitize email addresses                                     │
│     ├─ Check format (email, phone)                                  │
│     └─ Return errors if invalid                                     │
│                                                                       │
│  4. Route Handler (contact.routes.js)                               │
│     ├─ Extract form data                                            │
│     ├─ Get file path (if uploaded)                                  │
│     └─ Call email service                                           │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
    ┌───────────────────────────┐   ┌──────────────────────────┐
    │   Send Admin Email        │   │  Send User Email         │
    │   (emailService.js)       │   │  (emailService.js)       │
    ├───────────────────────────┤   ├──────────────────────────┤
    │ • Format HTML template    │   │ • Format HTML template   │
    │ • Include all form data   │   │ • Personalized greeting  │
    │ • Attach file             │   │ • Company contact info   │
    │ • Set reply-to            │   │ • Professional design    │
    └───────────────────────────┘   └──────────────────────────┘
                    │                           │
                    ▼                           ▼
    ┌───────────────────────────┐   ┌──────────────────────────┐
    │   SMTP Server             │   │   SMTP Server            │
    │   (Gmail/SendGrid/etc)    │   │   (Gmail/SendGrid/etc)   │
    └───────────────────────────┘   └──────────────────────────┘
                    │                           │
                    ▼                           ▼
    ┌───────────────────────────┐   ┌──────────────────────────┐
    │   Admin Inbox             │   │   User Inbox             │
    │   admin@noventraglobal... │   │   user@example.com       │
    ├───────────────────────────┤   ├──────────────────────────┤
    │ 🔔 New Contact Form       │   │ ✅ Thank You Message     │
    │ • All form details        │   │ • Confirmation           │
    │ • File attachment         │   │ • Contact info           │
    │ • Reply functionality     │   │ • Response time          │
    └───────────────────────────┘   └──────────────────────────┘
                    │
                    │
                    ▼
    ┌───────────────────────────┐
    │   Cleanup                 │
    │   • Delete uploaded file  │
    │   • (after 5 seconds)     │
    └───────────────────────────┘
```

## 🔄 Request/Response Flow

### 1. User Submits Form

```javascript
// User fills form and clicks submit
{
  name: "John Doe",
  email: "john@example.com",
  mobile: "+1234567890",
  designation: "Manager",
  companyName: "ABC Corp",
  companyEmail: "contact@abc.com",
  message: "I'm interested in your services",
  file: File object (optional)
}
```

### 2. Frontend Processes

```javascript
// Contact.tsx creates FormData
const formData = new FormData();
formData.append("name", "John Doe");
formData.append("email", "john@example.com");
// ... all fields
formData.append("file", fileObject); // if exists

// Send to backend
fetch("http://localhost:5000/api/contact", {
  method: "POST",
  body: formData,
});
```

### 3. Backend Validates

```javascript
// Express middleware chain
1. CORS check ✅
2. File upload (Multer) ✅
3. Input validation ✅
4. Sanitization ✅
```

### 4. Email Service Sends

```javascript
// Two emails sent in parallel
Promise.all([
  sendAdminNotification(formData, filePath),
  sendUserConfirmation(email, name),
]);
```

### 5. Backend Responds

**Success (200):**

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

**Error (400):**

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

### 6. Frontend Updates UI

```javascript
if (response.ok) {
  // Reset form
  // Show success message
  alert("✅ Your message has been sent successfully!");
} else {
  // Show error message
  alert("❌ " + errorMessage);
}
```

---

## 📁 File Structure

```
lozics-next-craft/
│
├── src/                              # FRONTEND
│   └── pages/
│       └── Contact.tsx               # Contact form component
│
├── backend/                          # BACKEND
│   ├── config/
│   │   └── email.config.js          # Email configuration
│   │
│   ├── middleware/
│   │   ├── upload.middleware.js     # File upload (Multer)
│   │   └── validator.middleware.js  # Input validation
│   │
│   ├── routes/
│   │   └── contact.routes.js        # API endpoints
│   │
│   ├── services/
│   │   └── emailService.js          # Email sending logic
│   │
│   ├── uploads/                     # Temp file storage
│   │
│   ├── .env                         # Configuration (secret)
│   ├── .gitignore                   # Git ignore
│   ├── package.json                 # Dependencies
│   ├── server.js                    # Main server
│   ├── test-email.js                # Email testing
│   └── README.md                    # Backend docs
│
├── BACKEND_SETUP.md                 # Setup guide
├── QUICK_REFERENCE.md               # Quick reference
├── IMPLEMENTATION_SUMMARY.md        # Implementation details
├── SYSTEM_FLOW.md                   # This file
├── start-all.sh                     # Start script
└── README.md                        # Main readme

```

---

## 🔐 Security Layers

```
User Input
    │
    ▼
┌─────────────────────┐
│ Frontend Validation │  ← HTML5 required fields
└─────────────────────┘
    │
    ▼
┌─────────────────────┐
│ CORS Check          │  ← Only allow frontend URL
└─────────────────────┘
    │
    ▼
┌─────────────────────┐
│ File Type Check     │  ← Only allowed file types
└─────────────────────┘
    │
    ▼
┌─────────────────────┐
│ File Size Check     │  ← Max 10MB
└─────────────────────┘
    │
    ▼
┌─────────────────────┐
│ Input Validation    │  ← express-validator
└─────────────────────┘
    │
    ▼
┌─────────────────────┐
│ Sanitization        │  ← Clean data
└─────────────────────┘
    │
    ▼
┌─────────────────────┐
│ Email Sending       │  ← Nodemailer
└─────────────────────┘
```

---

## 📧 Email Templates Flow

### Admin Notification Template

```
Header (Gradient Blue/Orange)
  ├─ Title: "New Contact Form Submission"
  └─ Company: "NOVENTRA GLOBAL SOURCING"

Body (Light Gray Background)
  ├─ Personal Information Section
  │   ├─ Name
  │   ├─ Email (clickable)
  │   ├─ Mobile (clickable)
  │   └─ Designation
  │
  ├─ Company Information Section
  │   ├─ Company Name
  │   └─ Company Email (clickable)
  │
  ├─ Message Section
  │   └─ User's message
  │
  └─ Metadata
      └─ Submission timestamp

Footer (Navy Blue)
  ├─ "Automated notification"
  └─ "Respond within 24 hours"

Attachment
  └─ User's uploaded file (if any)
```

### User Confirmation Template

```
Header (Gradient Blue/Orange)
  ├─ Title: "Message Received!"
  └─ Company: "NOVENTRA GLOBAL SOURCING"

Body
  ├─ Personalized Greeting
  ├─ Confirmation Message
  ├─ Response Time (24 hours)
  │
  └─ Contact Information Box
      ├─ Phone
      ├─ Email
      └─ Address

Footer (Navy Blue)
  └─ Copyright notice
```

---

## ⚙️ Configuration Flow

```
.env file
    │
    ├─── PORT ──────────────────────────► Server runs on this port
    │
    ├─── EMAIL_SERVICE ─────────────────► Gmail/SendGrid/etc
    ├─── EMAIL_HOST ────────────────────► SMTP host
    ├─── EMAIL_PORT ────────────────────► SMTP port
    ├─── EMAIL_USER ────────────────────► Email address
    ├─── EMAIL_PASS ────────────────────► Email password
    │                                     (App Password for Gmail)
    ├─── ADMIN_EMAIL ───────────────────► Where notifications go
    │
    ├─── FRONTEND_URL ──────────────────► CORS whitelist
    │
    └─── MAX_FILE_SIZE ─────────────────► File upload limit
```

---

## 🚀 Startup Sequence

```
1. User runs: npm run dev (frontend)
   └─► Vite dev server starts on :5173
   └─► React app loads
   └─► Contact form ready

2. User runs: npm run dev (backend)
   └─► Load .env configuration
   └─► Verify email configuration
   └─► Start Express server on :5000
   └─► Initialize middleware
   └─► Register routes
   └─► Server ready ✅

3. User submits form
   └─► Frontend → Backend API call
   └─► Backend validates & processes
   └─► Emails sent
   └─► Response to frontend
   └─► UI updated
```

---

## 🧪 Testing Flow

```bash
# Test 1: Backend Setup
cd backend
npm install
npm run test-email
# ✅ Verify emails are sent

# Test 2: Start Servers
Terminal 1: cd backend && npm run dev
Terminal 2: npm run dev

# Test 3: Manual Form Test
1. Open http://localhost:5173
2. Go to Contact page
3. Fill form
4. Upload file (optional)
5. Submit
6. Check emails ✅
```

---

## 📊 Data Flow Summary

```
Contact Form Data
    ↓
FormData Object
    ↓
HTTP POST (multipart/form-data)
    ↓
Backend API (/api/contact)
    ↓
Middleware Pipeline
    ├─ CORS
    ├─ Upload
    └─ Validation
    ↓
Route Handler
    ↓
Email Service
    ├─ Admin Email (with attachment)
    └─ User Email (confirmation)
    ↓
SMTP Server
    ↓
Email Delivery
    ├─ Admin Inbox ✅
    └─ User Inbox ✅
    ↓
Cleanup (delete temp file)
    ↓
Response to Frontend
    ↓
UI Update (success/error message)
```

---

## 🎯 Key Integration Points

### 1. Frontend → Backend

- **Endpoint:** `http://localhost:5000/api/contact`
- **Method:** POST
- **Content-Type:** multipart/form-data
- **Fields:** name, email, mobile, designation, companyName, companyEmail, message, file

### 2. Backend → Email Service

- **Service:** Nodemailer
- **Transport:** SMTP (Gmail/SendGrid/etc)
- **Templates:** HTML with inline CSS
- **Attachments:** File from uploads/

### 3. Email Service → Recipient

- **Admin:** Notification with all details
- **User:** Confirmation with contact info

---

## ✅ Success Criteria

System is working correctly when:

1. ✅ Backend server starts without errors
2. ✅ Email configuration is verified
3. ✅ Frontend can reach backend API
4. ✅ Form validation works
5. ✅ File upload succeeds
6. ✅ Admin receives notification email
7. ✅ User receives confirmation email
8. ✅ Email templates render correctly
9. ✅ File attachments arrive
10. ✅ Error handling works

---

**This completes the system architecture and flow documentation!**

For implementation details, see:

- IMPLEMENTATION_SUMMARY.md
- BACKEND_SETUP.md
- QUICK_REFERENCE.md
