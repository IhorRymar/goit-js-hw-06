const refs = {
  validationInput: document.querySelector('#validation-input'),
  correctLength: document.querySelector('input[data-length]'),
};

refs.validationInput.addEventListener('blur', onInputCorrect);

function onInputCorrect(event) {
  if (
    event.currentTarget.value.length ===
    Number(refs.correctLength.dataset.length)
  ) {
    refs.validationInput.classList.remove('invalid');
    refs.validationInput.classList.add('valid');
  } else {
    refs.validationInput.classList.remove('valid');
    refs.validationInput.classList.add('invalid');
  }
}

console.log(refs.correctLength);
