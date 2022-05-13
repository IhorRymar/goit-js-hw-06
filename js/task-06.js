const refs = {
  validationInput: document.querySelector('#validation-input'),
  correctLength: document.querySelector('input[data-length]'),
};

refs.validationInput.addEventListener('blur', onInputCorrect);

function onInputCorrect(event) {
  event.currentTarget.value.length ===
  Number(refs.correctLength.attributes[2].value)
    ? refs.validationInput.classList.add('valid')
    : refs.validationInput.classList.add('invalid');
}

console.log(refs.correctLength);
