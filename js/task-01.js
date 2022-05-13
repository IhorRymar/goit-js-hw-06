const classList = document.querySelectorAll('.item');

console.log(`Number of categories: ${classList.length}`);

const listItem = [...classList].forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.outerText}`,
    `Elements: ${el.lastElementChild.children.length}`
  )
);
