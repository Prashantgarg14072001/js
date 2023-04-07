// Get the form and add a submit event listener
var form = document.getElementById("my-form");
form.addEventListener("submit", validateForm);

// Function to validate the form
function validateForm(event) {
  // Get the values of the required fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if any required fields are empty
  if (name === "" || email === "" || message === "") {
    // Display an error message
    alert("Please fill in all required fields.");
    // Prevent the form from submitting
    event.preventDefault();
  }
}
