import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes.js";
import { verifyEmailConfig } from "./services/emailService.js";
import {frontendUrl} from "./config/email.config.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/contact", contactRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Lozics Backend API",
    version: "1.0.0",
    endpoints: {
      contact: "/api/contact",
      health: "/api/contact/health",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "File size is too large. Maximum size is 10MB.",
      });
    }
  }

  res.status(500).json({
    success: false,
    message: err.message || "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// Start server
const startServer = async () => {
  try {
    // Verify email configuration
    const emailConfigValid = await verifyEmailConfig();

    if (!emailConfigValid) {
      console.warn(
        "⚠️  Warning: Email configuration is not valid. Please check your .env file."
      );
      console.warn("⚠️  The server will start, but emails will not be sent.");
    }

    app.listen(PORT, () => {
      console.log("=".repeat(50));
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(
        `📧 Email service: ${emailConfigValid ? "✓ Ready" : "✗ Not configured"}`
      );
      console.log(`🌐 Frontend URL: ${frontendUrl}`);
      console.log(`📍 API Endpoint: http://localhost:${PORT}/api/contact`);
      console.log("=".repeat(50));
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
