function validateStateSelect(stateSelect) {
  const selectedState = stateSelect.value;
  if (selectedState === "") {
    return "Please select a state";
  }
  return "";
}

// Example usage
const stateSelect = document.getElementById("stateSelect");
const validationMessage = validateStateSelect(stateSelect);

if (validationMessage) {
  console.log(validationMessage); // Output: "Please select a state"
} else {
  console.log("State selection is valid"); // Output: "State selection is valid"
}
