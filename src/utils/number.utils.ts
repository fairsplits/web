import parsePhoneNumberFromString from "libphonenumber-js";

// function to sanitse the phone number using the libphonenumber-js library
export const sanitizePhoneNumber = (phoneNumber: string): string => {
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, "IN");

  return parsedPhoneNumber?.number || "";
};
