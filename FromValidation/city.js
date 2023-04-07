function validateCitySelect(citySelect) {
  const selectedCity = citySelect.value;
  if (selectedCity === "") {
    return "Please select a city";
  }
  return "";
}

// Example usage
const citySelect = document.getElementById("citySelect");
const validationMessage = validateCitySelect(citySelect);

if (validationMessage) {
  console.log(validationMessage); // Output: "Please select a city"
} else {
  console.log("City selection is valid"); // Output: "City selection is valid"
}
