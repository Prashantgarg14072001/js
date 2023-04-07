<form id="myForm">
  <label for="education">Select your education:</label>
  <select id="education" name="education">
    <option value="">Select</option>
    <option value="high-school">High School</option>
    <option value="associate">Associate Degree</option>
    <option value="bachelor">Bachelor's Degree</option>
    <option value="master">Master's Degree</option>
    <option value="doctorate">Doctorate Degree</option>
  </select>
  <button type="submit">Submit</button>
</form>
<p id="error-msg"></p>
<script>
  const form = document.getElementById('myForm');
const educationSelect = document.getElementById('education');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (educationSelect.value === '') {
    errorMsg.textContent = 'Please select your education';
  } else {
    // Form submission logic
    form.submit();
  }
});

</script>