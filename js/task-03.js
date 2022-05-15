const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector('.gallery');

// const srcLinks = images.map((link) => link.url);
// const altNames = images.map((altName) => altName.alt);

// const imgList = () => {
//   return `
//   <li>
//     <img src="${srcLinks[0]}" alt="${altNames[0]}" width=720px>
//   </li>
//   <li>
//     <img src="${srcLinks[1]}" alt="${altNames[1]}" width=720px>
//   </li>
//   <li>
//     <img src="${srcLinks[2]}" alt="${altNames[2]}" width=720px>
//   </li>
//   `;
// };

// gallery.style.display = 'flex';
// gallery.style.flexDirection = 'column';
// gallery.style.alignItems = 'center';

// gallery.insertAdjacentHTML('beforeend', imgList());

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML(
  'afterbegin',
  images
    .map(
      (image) =>
        `<li><img src="${image.url}" alt="${image.alt}" width=720px></li>`
    )
    .join('')
);

gallery.style.display = 'flex';
gallery.style.flexDirection = 'column';
gallery.style.alignItems = 'center';
