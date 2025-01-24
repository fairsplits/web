import parsePhoneNumberFromString from "libphonenumber-js";
import { z } from "zod";

export const emailSchema = z
  .string({ message: "Email is required" })
  .email({ message: "Invalid Email" })
  .min(2)
  .max(40);

export const passwordSchema = z
  .string({ message: "Password is required" })
  .min(6, { message: "Should have at least 6 characters" })
  .max(40, { message: "Should have less than 40 characters" });

export const phoneNumberSchema = z.string({ message: "Phone number is required" }).refine(
  (value) => {
    try {
      const phoneNumber = parsePhoneNumberFromString(value, "IN");
      return phoneNumber?.isValid() || false;
    } catch {
      return false;
    }
  },
  {
    message: "Invalid phone number",
  },
);
