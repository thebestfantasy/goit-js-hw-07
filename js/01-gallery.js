import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.js-gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    const originalImg = evt.target.dataset.source; 
    const descr = evt.target.alt;
    const instance = basicLightbox.create(`
    <div><img class="modal__image" src="${originalImg}" alt="${descr}"></div>`);
    instance.show();
    evt.target.addEventListener("keydown", onClose);
}

function onClose(evt) {
    evt.key === "Escape" ? instance.close() : false
}

