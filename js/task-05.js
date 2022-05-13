const refs = {
  textInput: document.querySelector('#name-input'),
  textOutput: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', onInput);

function onInput(event) {
  if (refs.textInput.value === '') {
    refs.textOutput.textContent = 'Anonymous';
  } else {
    refs.textOutput.textContent = event.currentTarget.value;
  }
}
