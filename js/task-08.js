// const refs = {
//   form: document.querySelector('.login-form'),
// };

// refs.form.addEventListener('submit', formSubmit);

// function formSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return alert('Введіть пошту та пароль!');
//   }

//   console.log(`Login: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('Введіть пошту та пароль!');
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
  }
  event.currentTarget.reset();
}
