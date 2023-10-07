// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');
const itemMarkup = createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', itemMarkup);

// rendered li
function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('');
}

// library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});