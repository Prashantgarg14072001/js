const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const genderInputs = document.getElementsByName('gender');
const checkboxInput = document.getElementById('checkbox');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const addressInput = document.getElementById('address');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validate username
  const usernameValue = usernameInput.value.trim();
  if (usernameValue === '') {
    setErrorFor(usernameInput, 'Username cannot be blank');
  } else {
    setSuccessFor(usernameInput);
  }
  
  // Validate first name
  const firstnameValue = firstnameInput.value.trim();
  if (firstnameValue === '') {
    setErrorFor(firstnameInput, 'First name cannot be blank');
  } else {
    setSuccessFor(firstnameInput);
  }
  
  // Validate last name
  const lastnameValue = lastnameInput.value.trim();
  if (lastnameValue === '') {
    setErrorFor(lastnameInput, 'Last name cannot be blank');
  } else {
    setSuccessFor(lastnameInput);
  }
  
  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(emailInput, 'Email is not valid');
  } else {
    setSuccessFor(emailInput);
  }
  
  // Validate phone
  const phoneValue = phoneInput.value.trim();
  if (phoneValue === '') {
    setErrorFor(phoneInput, 'Phone cannot be blank');
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phoneInput, 'Phone is not valid');
  } else {
    setSuccessFor(phoneInput);
  }
  
  // Validate password
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    setErrorFor(passwordInput, 'Password cannot be blank');
  } else if (passwordValue.length < 8) {
    setErrorFor(passwordInput, 'Password must be at least 8 characters long');
  } else {
    setSuccessFor(passwordInput);
  }
  
  // Validate confirm password
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  if (confirmPasswordValue === '') {
    setErrorFor(confirmPasswordInput, 'Confirm password cannot be blank');
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPasswordInput, 'Passwords do not match');
  } else {
    setSuccessFor(confirmPasswordInput);
  }
  
  // Validate gender
  let isChecked = false;
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    setErrorFor(genderInputs[0], 'Please select a gender');
  } else {
    setSuccessFor(genderInputs[0]);
  }
  
  // Validate checkbox
  if (!checkboxInput.checked) {
    setErrorFor(checkboxInput, 'You must accept the terms and conditions');
  } else {
    setSuccessFor(checkboxInput);
  }
  
  // Validate city
  const cityValue = cityInput.value.trim();
  if (cityValue === '') {
   
