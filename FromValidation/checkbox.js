// Get the form and add a submit event listener
var form = document.getElementById("my-form");
form.addEventListener("submit", validateForm);

// Function to validate the form
function validateForm(event) {
  // Get the value of the checkboxes
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");

  // Check if a checkbox is selected
  if (!checkbox1.checked && !checkbox2.checked) {
    // Display an error message
    alert("Please select at least one checkbox.");
    // Prevent the form from submitting
    event.preventDefault();
  }
}
