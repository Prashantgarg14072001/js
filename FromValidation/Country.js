function validateCountrySelect(countrySelect) {
  const selectedCountry = countrySelect.value;
  if (selectedCountry === "") {
    return "Please select a country";
  }
  return "";
}

// Example usage
const countrySelect = document.getElementById("countrySelect");
const validationMessage = validateCountrySelect(countrySelect);

if (validationMessage) {
  console.log(validationMessage); // Output: "Please select a country"
} else {
  console.log("Country selection is valid"); // Output: "Country selection is valid"
}
