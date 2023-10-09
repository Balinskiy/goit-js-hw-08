import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY));

if (dataForm) {
  emailInput.value = dataForm.email || '';
  messageInput.value = dataForm.message || '';
}

function onInputData() {
  dataForm = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: dataForm.email, message: dataForm.message });

  localStorage.removeItem(LOCAL_KEY);
  form.reset();
}

