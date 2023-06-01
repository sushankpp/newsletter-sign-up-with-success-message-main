const SubsBtn = document.getElementById('subs');
const formContainer = document.getElementById('form-container');
const successMsg = document.getElementById('success-message');
const dismissBtn = document.getElementById('dismiss');
const email = document.getElementById('email');
const error = document.querySelector('.error');

SubsBtn.addEventListener('click', () => {
  const enteredEmail = email.value.trim();
  if (!isValidEmail(enteredEmail)) {
    email.classList.add('mistake');
    error.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
    successMsg.style.display = 'flex';
    successMsg.style.opacity = '1';
  }
});

email.addEventListener('input', () => {
  const enteredEmail = email.value.trim();
  if (enteredEmail === ' ') {
    email.classList.remove('mistake');
    error.style.display = 'none';
  } else if (isValidEmail(enteredEmail)) {
    email.classList.remove('mistake');
    error.style.display = 'none';
  } else {
    email.classList.add('mistake');
    error.style.display = 'block';
  }
});

dismissBtn.addEventListener('click', () => {
  formContainer.style.display = 'flex';
  successMsg.style.display = 'none';
});

function isValidEmail(email) {
  // Regular expression to validate email format
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
