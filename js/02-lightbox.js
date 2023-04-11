import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);

container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    const descr = evt.target.alt;
    console.log(descr);
    const gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', { captionsData: descr, captionPosition : 'bottom', captionDelay : 250 });
}