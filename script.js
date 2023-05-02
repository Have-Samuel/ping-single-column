const form = document.querySelector('#form-js');
const email = document.querySelector('#email-input');

function showError(ele, msg) {
  const formControl = ele.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = msg;

  formControl.classList.add('error');
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
// funtion that removes error
function removeError() {
  const formControl = email.parentElement;
  formControl.classList.remove('error');
}

function resetInput() {
  form.reset();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeError();
  validate();
  resetInput();
});