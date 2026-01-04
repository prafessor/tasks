const formEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

// action with localStorage
const saveToLS = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch(err) {
    console.log(err.message);
  }
};

const loadFromLS = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data === null ? null : JSON.parse(data);
  } catch(err) {
    console.log(err.message);
  }
}

// fill form input
const fillFormInput = () => {
  const loadedDataFromLS = loadFromLS("feedback-form-state");

  if(!loadedDataFromLS) return;

  formData = loadedDataFromLS;
  for(let key in formData) {
    formEl.elements[key].value = formData[key];
  }
}
fillFormInput();

//actions with form
const onInputForm = (evt) => {
  const { name, value } = evt.target;

  formData[name] = value.trim();
  saveToLS("feedback-form-state", formData);
}

const onSubmitForm = (evt) => {
  evt.preventDefault();

  const { email: { value: {length: emailLength} }, message: { value: {length: messageLength} } } = evt.currentTarget.elements;

  if(emailLength === 0 || messageLength === 0) {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  formData = { email: '', message: '' };
  evt.currentTarget.reset();
}

formEl.addEventListener('input', onInputForm);
formEl.addEventListener('submit', onSubmitForm);