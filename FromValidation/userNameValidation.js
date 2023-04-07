function validateUsername(username) {
  if (username.trim() === "") {
    return "Username cannot be empty";
  }
  if (username.length < 3 || username.length > 16) {
    return "Username must be between 3 and 16 characters long";
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return "Username can only contain letters, numbers, underscores and hyphens";
  }

  return "";
}
const username = "john_smith-123";
const validationMessage = validateUsername(username);

if (validationMessage) {
  console.log(validationMessage);
} else {
  console.log("Username is valid"); 
}
