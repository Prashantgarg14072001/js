function validateYearSelect(yearSelect) {
  const selectedYear = yearSelect.value;
  if (selectedYear === "") {
    return "Please select a year";
  }
  return "";
}

// Example usage
const yearSelect = document.getElementById("yearSelect");
const validationMessage = validateYearSelect(yearSelect);

if (validationMessage) {
  console.log(validationMessage); // Output: "Please select a year"
} else {
  console.log("Year selection is valid"); // Output: "Year selection is valid"
}
