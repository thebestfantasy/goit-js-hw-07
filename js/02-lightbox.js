import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`);

container.insertAdjacentHTML('beforeend', markup.join(''));

const caption = galleryItems.map(({ description }) => description);
const gallery = new SimpleLightbox('.gallery a', {
    captionsData: caption,
    captionDelay: 250
});
