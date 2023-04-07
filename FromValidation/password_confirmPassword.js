function validatePassword(password, confirmPassword) {
  // Ensure password and confirm password fields are not empty
  if (password.trim() === "" || confirmPassword.trim() === "") {
    return "Password and confirm password fields cannot be empty";
  }

  // Ensure password meets complexity requirements
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
    return "Password must be at least 8 characters long and contain at least one number, one lowercase letter, and one uppercase letter";
  }

  // Ensure password and confirm password fields match
  if (password !== confirmPassword) {
    return "Password and confirm password fields must match";
  }

  return "";
}

// Example usage
const password = "Passw0rd";
const confirmPassword = "Passw0rd";
const validationMessage = validatePassword(password, confirmPassword);

if (validationMessage) {
  console.log(validationMessage); // Output: ""
} else {
  console.log("Password is valid"); // Output: "Password is valid"
}
