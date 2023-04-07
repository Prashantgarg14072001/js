<label for="college">Enter your college name:</label>
<input type="text" id="college" name="college">
<p id="error-msg"></p>
<script>
    const collegeInput = document.getElementById('college');
const errorMsg = document.getElementById('error-msg');
const alphanumericRegex = /^[a-zA-Z0-9]*$/;

collegeInput.addEventListener('input', function() {
  if (!alphanumericRegex.test(collegeInput.value)) {
    errorMsg.textContent = 'College name should only contain alphanumeric characters';
  } else {
    errorMsg.textContent = '';
  }
});

</script>