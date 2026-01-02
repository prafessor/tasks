const form = document.querySelector('.login-form');

const handleFormSubmit = evt => {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value.trim();
  const password = evt.currentTarget.elements.password.value.trim();
  if (email.length === 0 || password.length === 0) {
    alert('All form fields must be filled in');
    return;
  }
  console.log({ email, password });
  evt.currentTarget.reset();
};
form.addEventListener('submit', handleFormSubmit);
