import express from "express";
import { upload } from "../middleware/upload.middleware.js";
import {
  contactFormValidation,
  validate,
} from "../middleware/validator.middleware.js";
import {
  sendAdminNotification,
  sendUserConfirmation,
} from "../services/emailService.js";
import fs from "fs";

const router = express.Router();

// POST /api/contact - Handle contact form submission
router.post(
  "/",
  upload.single("file"),
  contactFormValidation,
  validate,
  async (req, res) => {
    try {
      const formData = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        designation: req.body.designation || "",
        companyName: req.body.companyName,
        companyEmail: req.body.companyEmail,
        message: req.body.message || "",
      };

      const attachmentPath = req.file ? req.file.path : null;

      // Send email to admin
      const adminEmailResult = await sendAdminNotification(
        formData,
        attachmentPath
      );

      // Send confirmation email to user
      const userEmailResult = await sendUserConfirmation(
        formData.email,
        formData.name
      );

      // Clean up uploaded file after sending email
      if (attachmentPath) {
        setTimeout(() => {
          fs.unlink(attachmentPath, (err) => {
            if (err) console.error("Error deleting file:", err);
            else console.log("Temporary file deleted:", attachmentPath);
          });
        }, 5000); // Delete after 5 seconds
      }

      res.status(200).json({
        success: true,
        message:
          "Your message has been sent successfully! We will get back to you soon.",
        data: {
          adminEmailSent: adminEmailResult.success,
          userConfirmationSent: userEmailResult.success,
        },
      });
    } catch (error) {
      console.error("Error processing contact form:", error);

      // Clean up file if exists and there was an error
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          if (err) console.error("Error deleting file:", err);
        });
      }

      res.status(500).json({
        success: false,
        message:
          "An error occurred while sending your message. Please try again later.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }
);

// GET /api/contact/health - Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;
