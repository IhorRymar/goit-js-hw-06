const refs = {
  controlRange: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.controlRange.addEventListener('input', handleInputRange);

function handleInputRange(event) {
  refs.text.style.fontSize = event.currentTarget.value + 'px';
}
