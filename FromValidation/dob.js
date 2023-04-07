function validateDOB(dob) {
  // Ensure DOB is not empty
  if (!dob) {
    return "Please select a date of birth";
  }

  // Ensure DOB is not in the future
  const currentDate = new Date();
  if (dob > currentDate) {
    return "Date of birth cannot be in the future";
  }

  // Ensure DOB is within valid age range (18-120 years)
  const minAge = 18;
  const maxAge = 120;
  const inputDate = new Date(dob);
  const ageInYears = Math.floor((currentDate - inputDate) / (365 * 24 * 60 * 60 * 1000));
  if (ageInYears < minAge) {
    return "You must be at least 18 years old to register";
  } else if (ageInYears > maxAge) {
    return "Please enter a valid date of birth";
  }

  return "";
}

// Example usage
const dob = new Date(1990, 0, 1); // January 1, 1990
const validationMessage = validateDOB(dob);

if (validationMessage) {
  console.log(validationMessage); // Output: ""
} else {
  console.log("Date of birth is valid"); // Output: "Date of birth is valid"
}
