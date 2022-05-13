const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  list: document.querySelector('#ingredients'),
};

const createListItem = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.classList.add('item');
  refs.list.append(li);
};

ingredients.forEach((ingredient) => createListItem(ingredient));
