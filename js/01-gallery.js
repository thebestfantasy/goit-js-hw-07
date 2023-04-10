import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.js-gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener("click", onClick);

console.log(container);

function onClick(evt) {
    evt.preventDefault();
    console.log(evt.target);
}

