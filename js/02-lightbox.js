
import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const refs = {
galleryBox : document.querySelector(".gallery")
}

function createImageGalleryItems(params){
return params
.map(({description, original, preview}) => {
return ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
      alt="${description}" />
    </a>
</li>
`;

})
.join("");
}

const imageGallery = createImageGalleryItems(galleryItems);
refs.galleryBox.innerHTML = imageGallery;
//?=========================================================
refs.galleryBox.addEventListener( "click", onImageClick)

function onImageClick (event){
event.preventDefault();
//?=======
if(event.target.nodeName === "A"){
    return
}

//?======

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData:	'alt',
    captionPosition:  'bottom',
    captionDelay:	250,
});


}

