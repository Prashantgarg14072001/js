function validateName(firstName, lastName) {
  // Ensure first name and last name are not empty
  if (firstName.trim() === "" || lastName.trim() === "") {
    return "First name and last name cannot be empty";
  }

  // Ensure first name and last name contain only letters, spaces, hyphens and apostrophes
  if (!/^[a-zA-Z\s'-]+$/.test(firstName) || !/^[a-zA-Z\s'-]+$/.test(lastName)) {
    return "First name and last name can only contain letters, spaces, hyphens and apostrophes";
  }

  return "";
}

// Example usage
const firstName = "John";
const lastName = "Smith";
const validationMessage = validateName(firstName, lastName);

if (validationMessage) {
  console.log(validationMessage); // Output: ""
} else {
  console.log("Name is valid"); // Output: "Name is valid"
}
