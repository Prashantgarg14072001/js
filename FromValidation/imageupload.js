function validateFileUpload(file) {
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.svg)$/i; // Regular expression to match allowed file extensions
  if (!allowedExtensions.exec(file.name)) {
    return "Please upload a file with a valid image extension (jpg, jpeg, png, gif, svg)";
  }
  return "";
}

// Example usage
const fileInput = document.getElementById("fileInput");
const file = fileInput.files[0];
const validationMessage = validateFileUpload(file);

if (validationMessage) {
  console.log(validationMessage); // Output: ""
} else {
  console.log("File upload is valid"); // Output: "File upload is valid"
}
