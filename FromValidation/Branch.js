function validateBranchSelect(branchSelect) {
  const selectedBranch = branchSelect.value;
  if (selectedBranch === "") {
    return "Please select a branch";
  }
  return "";
}

// Example usage
const branchSelect = document.getElementById("branchSelect");
const validationMessage = validateBranchSelect(branchSelect);

if (validationMessage) {
  console.log(validationMessage); // Output: "Please select a branch"
} else {
  console.log("Branch selection is valid"); // Output: "Branch selection is valid"
}
