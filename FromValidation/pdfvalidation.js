function validateFileUpload(file) {
  const allowedExtensions = /(\.pdf)$/i; // Regular expression to match allowed file extensions
  if (!allowedExtensions.exec(file.name)) {
    return "Please upload a PDF file";
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
