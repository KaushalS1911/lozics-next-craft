import dotenv from "dotenv";
import {
  verifyEmailConfig,
  sendAdminNotification,
  sendUserConfirmation,
} from "./services/emailService.js";

dotenv.config();

// Test email configuration and send test emails
const testEmailSystem = async () => {
  console.log("=".repeat(60));
  console.log("Testing Email Configuration");
  console.log("=".repeat(60));

  // Test 1: Verify email configuration
  console.log("\n📧 Test 1: Verifying email configuration...");
  const isValid = await verifyEmailConfig();

  if (!isValid) {
    console.log("\n❌ Email configuration is invalid!");
    console.log("Please check your .env file and ensure:");
    console.log("  - EMAIL_USER is set correctly");
    console.log("  - EMAIL_PASS is set correctly");
    console.log("  - For Gmail, you are using an App Password");
    return;
  }

  console.log("✅ Email configuration is valid!\n");

  // Test 2: Send test admin notification
  console.log("📧 Test 2: Sending test admin notification...");
  const testFormData = {
    name: "Test User",
    email: "test@example.com",
    mobile: "+1234567890",
    designation: "Test Manager",
    companyName: "Test Company Inc.",
    companyEmail: "info@testcompany.com",
    message:
      "This is a test message to verify the email system is working correctly.",
  };

  try {
    const adminResult = await sendAdminNotification(testFormData);
    if (adminResult.success) {
      console.log("✅ Admin notification sent successfully!");
      console.log(`   Message ID: ${adminResult.messageId}`);
    }
  } catch (error) {
    console.log("❌ Failed to send admin notification");
    console.error("   Error:", error.message);
    return;
  }

  // Test 3: Send test user confirmation
  console.log("\n📧 Test 3: Sending test user confirmation...");
  try {
    const userResult = await sendUserConfirmation(
      "test@example.com",
      "Test User"
    );
    if (userResult.success) {
      console.log("✅ User confirmation sent successfully!");
      console.log(`   Message ID: ${userResult.messageId}`);
    }
  } catch (error) {
    console.log("❌ Failed to send user confirmation");
    console.error("   Error:", error.message);
    return;
  }

  console.log("\n" + "=".repeat(60));
  console.log("🎉 All tests passed! Email system is working correctly.");
  console.log("=".repeat(60));
  console.log("\nCheck your inbox for the test emails:");
  console.log(`  Admin email: ${process.env.ADMIN_EMAIL}`);
  console.log(`  User email: test@example.com`);
  console.log("\n");
};

// Run tests
testEmailSystem().catch((error) => {
  console.error("Test failed:", error);
  process.exit(1);
});
