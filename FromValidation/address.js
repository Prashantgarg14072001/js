function validateAddressForm(addressForm) {
  const pincodeInput = addressForm.elements["pincode"];
  const cityInput = addressForm.elements["city"];
  const stateInput = addressForm.elements["state"];
  const countryInput = addressForm.elements["country"];

  // Validate pincode
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  if (!pincodeRegex.test(pincodeInput.value)) {
    return "Please enter a valid pincode";
  }

  // Validate city
  if (cityInput.value.trim() === "") {
    return "Please enter a city";
  }

  // Validate state
  if (stateInput.value.trim() === "") {
    return "Please enter a state";
  }

  // Validate country
  if (countryInput.value.trim() === "") {
    return "Please enter a country";
  }

  return "";
}

// Example usage
const addressForm = document.getElementById("addressForm");
const validationMessage = validateAddressForm(addressForm);

if (validationMessage) {
  console.log(validationMessage); // Output: "Please enter a valid pincode"
} else {
  console.log("Address form is valid"); // Output: "Address form is valid"
}
