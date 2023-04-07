// Get the form and add a submit event listener
var form = document.getElementById("my-form");
form.addEventListener("submit", validateForm);

// Function to validate the form
function validateForm(event) {
  // Get the value of the radio buttons
  var gender = document.querySelector('input[name="gender"]:checked');

  // Check if a radio button is selected
  if (!gender) {
    // Display an error message
    alert("Please select a gender.");
    // Prevent the form from submitting
    event.preventDefault();
  }
}
