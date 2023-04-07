function validatePhoneNumber(phoneNumber, countryCode) {
  let regex;
  switch (countryCode) {
    case "+91": // India
      regex = /^\+91[6-9]\d{9}$/;
      break;
    case "+1": // USA
      regex = /^\+1\d{10}$/;
      break;
    case "+44": // UK
      regex = /^\+44\d{10}$/;
      break;
    case "+94": // Sri Lanka
      regex = /^\+94[1-9]\d{8}$/;
      break;
    default:
      return "Please enter a valid phone number with a valid country code";
  }
  if (!regex.test(phoneNumber)) {
    return "Please enter a valid phone number";
  }
  return "";
}

// Example usage
const phoneNumber = "+919876543210";
const countryCode = "+91";
const validationMessage = validatePhoneNumber(phoneNumber, countryCode);

if (validationMessage) {
  console.log(validationMessage); // Output: ""
} else {
  console.log("Phone number is valid"); // Output: "Phone number is valid"
}
