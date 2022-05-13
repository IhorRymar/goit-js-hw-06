function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', changeColor);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = refs.body.style.backgroundColor;
}
