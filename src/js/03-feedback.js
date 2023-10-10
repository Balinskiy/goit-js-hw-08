import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = {};

function onInputData(event) {

  const inputValue = event.target.value.trim();
  const inputName = event.target.name;
  dataForm[inputName] = inputValue;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(dataForm);
  dataForm = {};
  localStorage.removeItem(LOCAL_KEY);
  event.target.reset();
}

refreshForm();
function refreshForm() {
  try {
    const saveData = localStorage.getItem(LOCAL_KEY);
    if (!saveData) return;
    dataForm = JSON.parse(saveData);
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch(error) {
    console.log(error.name);
  }
}
