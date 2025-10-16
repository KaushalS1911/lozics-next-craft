import nodemailer from "nodemailer";
import { emailConfig, adminEmail } from "../config/email.config.js";

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(emailConfig);
};

// Email template for admin notification
const createAdminEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #f97316 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border: 1px solid #e5e7eb;
        }
        .field {
          margin-bottom: 20px;
          background: white;
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #1e3a8a;
        }
        .field-label {
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 5px;
          font-size: 12px;
          text-transform: uppercase;
        }
        .field-value {
          color: #374151;
          font-size: 16px;
        }
        .message-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          margin-top: 10px;
          white-space: pre-wrap;
        }
        .footer {
          background: #1e3a8a;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 0 0 10px 10px;
          font-size: 14px;
        }
        .divider {
          height: 2px;
          background: linear-gradient(90deg, #1e3a8a 0%, #f97316 100%);
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">🔔 New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">NOVENTRA GLOBAL SOURCING</p>
      </div>
      
      <div class="content">
        <p style="font-size: 16px; margin-top: 0;">You have received a new contact form submission with the following details:</p>
        
        <div class="divider"></div>
        
        <h3 style="color: #1e3a8a; margin-bottom: 15px;">👤 Personal Information</h3>
        
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${formData.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email Address</div>
          <div class="field-value"><a href="mailto:${formData.email}">${
    formData.email
  }</a></div>
        </div>
        
        <div class="field">
          <div class="field-label">Mobile Number</div>
          <div class="field-value"><a href="tel:${formData.mobile}">${
    formData.mobile
  }</a></div>
        </div>
        
        ${
          formData.designation
            ? `
        <div class="field">
          <div class="field-label">Designation</div>
          <div class="field-value">${formData.designation}</div>
        </div>
        `
            : ""
        }
        
        <div class="divider"></div>
        
        <h3 style="color: #1e3a8a; margin-bottom: 15px;">🏢 Company Information</h3>
        
        <div class="field">
          <div class="field-label">Company Name</div>
          <div class="field-value">${formData.companyName}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Company Email</div>
          <div class="field-value"><a href="mailto:${formData.companyEmail}">${
    formData.companyEmail
  }</a></div>
        </div>
        
        ${
          formData.message
            ? `
        <div class="divider"></div>
        
        <h3 style="color: #1e3a8a; margin-bottom: 15px;">💬 Message</h3>
        
        <div class="message-box">
          ${formData.message || "No message provided"}
        </div>
        `
            : ""
        }
        
        <div class="divider"></div>
        
        <p style="font-size: 14px; color: #6b7280; margin-bottom: 0;">
          <strong>Submitted on:</strong> ${new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "long",
            timeZone: "Asia/Kolkata",
          })}
        </p>
      </div>
      
      <div class="footer">
        <p style="margin: 0;">This is an automated notification from your website contact form.</p>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Please respond to the customer within 24 hours.</p>
      </div>
    </body>
    </html>
  `;
};

// Email template for user confirmation
const createUserConfirmationTemplate = (name) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #f97316 100%);
          color: white;
          padding: 40px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9fafb;
          padding: 40px;
          border: 1px solid #e5e7eb;
        }
        .footer {
          background: #1e3a8a;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 0 0 10px 10px;
          font-size: 14px;
        }
        .button {
          display: inline-block;
          padding: 12px 30px;
          background: #f97316;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          margin: 20px 0;
          font-weight: bold;
        }
        .contact-info {
          background: white;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0;">✅ Message Received!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">NOVENTRA GLOBAL SOURCING</p>
      </div>
      
      <div class="content">
        <p style="font-size: 18px; margin-top: 0;">Dear ${name},</p>
        
        <p style="font-size: 16px;">
          Thank you for reaching out to us! We have successfully received your message and our team will review it shortly.
        </p>
        
        <p style="font-size: 16px;">
          We strive to respond to all inquiries within <strong>24 hours</strong>. If your matter is urgent, please feel free to contact us directly.
        </p>
        
        <div class="contact-info">
          <h3 style="color: #1e3a8a; margin-top: 0;">📞 Contact Information</h3>
          <p style="margin: 5px 0;"><strong>Phone:</strong> +91 9106697517</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> contact@noventraglobal.com</p>
          <p style="margin: 5px 0;"><strong>Address:</strong> Floor No.: RS No. 236 P 3, Plot No. 21/1, 22/1, Paramdham Industrial Estate - 3, Aji Ring Road, Near Murlidhar Kanta, Rajkot, Gujarat - 360003</p>
        </div>
        
        <p style="font-size: 16px; margin-bottom: 0;">
          Best regards,<br>
          <strong>NOVENTRA GLOBAL SOURCING Team</strong>
        </p>
      </div>
      
      <div class="footer">
        <p style="margin: 0;">© ${new Date().getFullYear()} NOVENTRA GLOBAL SOURCING. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
};

// Send email to admin
export const sendAdminNotification = async (
  formData,
  attachmentPath = null
) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Website Contact Form" <${emailConfig.auth.user}>`,
      to: adminEmail,
      subject: `🔔 New Contact Form Submission from ${formData.name}`,
      html: createAdminEmailTemplate(formData),
      replyTo: formData.email,
    };

    // Add attachment if exists
    if (attachmentPath) {
      mailOptions.attachments = [
        {
          path: attachmentPath,
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Admin notification sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending admin notification:", error);
    throw error;
  }
};

// Send confirmation email to user
export const sendUserConfirmation = async (userEmail, userName) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"NOVENTRA GLOBAL SOURCING" <${emailConfig.auth.user}>`,
      to: userEmail,
      subject: "Thank You for Contacting NOVENTRA GLOBAL SOURCING",
      html: createUserConfirmationTemplate(userName),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("User confirmation sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending user confirmation:", error);
    throw error;
  }
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log("✓ Email server is ready to send messages");
    return true;
  } catch (error) {
    console.error("✗ Email configuration error:", error.message);
    return false;
  }
};
