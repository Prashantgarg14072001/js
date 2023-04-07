const from = document.getElementById('myform');
const username = document.getElementById('username');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass = document.getElementById('pass');
const cpass = document.getElementById('cpass');

from.addEventListener('submit',(event) =>{
    event.preventDefault();

    validate();

})

const  validate = () =>{
const username = username.value.trim();
const fname = fname.value.trim();
const lname = lname.value.trim();
const email = email.value.trim();
const phone = phone.value.trim();
const pass = pass.value.trim();
const cpass = cpass.value.trim();

if(username===""){
    setErrormsg(username, 'username cannot blank');
}else  if(username.length < 3 || username.length > 16) {
    setErrormsg(username, 'Username must be between 3 and 16 characters long');
  }
  else{
       setErrormsg(username);
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return "Username can only contain letters, numbers, underscores and hyphens";
  }

  return "";

}