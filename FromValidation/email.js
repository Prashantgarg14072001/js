function validateEmail(email) {
  // Ensure email is not empty
  if (email.trim() === "") {
    return "Email address cannot be empty";
  }

  // Ensure email is valid using regular expression
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
}

// Example usage
const email = "john.smith@example.com";
const validationMessage = validateEmail(email);

if (validationMessage) {
  console.log(validationMessage); // Output: ""
} else {
  console.log("Email address is valid"); // Output: "Email address is valid"
}
