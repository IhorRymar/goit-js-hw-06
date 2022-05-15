const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const refs = {
//   list: document.querySelector('#ingredients'),
// };

// const createListItem = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   li.classList.add('item');
//   refs.list.append(li);
// };

// ingredients.forEach((ingredient) => createListItem(ingredient));

const list = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = `${ingredient}`;

  return li;
});

// console.log(elements);
list.append(...elements);
