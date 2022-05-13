const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Введіть пошту та пароль!');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
