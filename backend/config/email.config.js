import dotenv from "dotenv";
dotenv.config();

export const emailConfig = {
  service: process.env.EMAIL_SERVICE || "gmail",
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export const adminEmail = process.env.ADMIN_EMAIL || "admin@noventraglobal.com";
export const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
export const maxFileSize = parseInt(process.env.MAX_FILE_SIZE || "10485760"); // 10MB default
