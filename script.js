const form = document.querySelector('#form-js');
const email = document.querySelector('#email-input');

function showError(ele, msg) {
  const formcontrol = ele.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText = msg;

  formcontrol.classList.add('error');
}

function validate() {
  const emailValue = email.value.trim();

  function isEmail(email) {
    return /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/.test(email);
  }

  if (!emailValue) {
    showError(email, 'Please provide a valid email address');
  } else if (!isEmail(emailValue)) {
    showError(email, 'Email is not valid');
  }
}

form.addEventListener('submit', (e) => {
  console.log('submit');
  e.preventDefault();
  validate();
});