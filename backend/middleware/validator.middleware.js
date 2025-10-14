import { body, validationResult } from "express-validator";

export const contactFormValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile number is required")
    .matches(/^[0-9\s\+\-\(\)]+$/)
    .withMessage("Please provide a valid mobile number"),

  body("designation")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Designation must be less than 100 characters"),

  body("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required")
    .isLength({ min: 2, max: 200 })
    .withMessage("Company name must be between 2 and 200 characters"),

  body("companyEmail")
    .trim()
    .notEmpty()
    .withMessage("Company email is required")
    .isEmail()
    .withMessage("Please provide a valid company email address")
    .normalizeEmail(),

  body("message")
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage("Message must be less than 2000 characters"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};
