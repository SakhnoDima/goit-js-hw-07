import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const refs = {
 galleryBox : document.querySelector(".gallery")
}

function createImageGalleryItems(params) {
return params
    .map(({ description, original, preview }) => {
       return `
       <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
           <img
             class="gallery__image"
              src="${preview}"
               data-source="${original}"
               alt="${description}}"
            />
          </a>
        </li> 
        `;
    })
    .join("");      
}
const imageGallery = createImageGalleryItems(galleryItems);
refs.galleryBox.insertAdjacentHTML("afterbegin", imageGallery);

//?=============================================================

refs.galleryBox.addEventListener("click", onImageClick);

function onImageClick(event){

event.preventDefault();

if(event.target.nodeName !== "IMG"){
    return
}
//?==============================================================

const originalLinkOfImage = event.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${originalLinkOfImage}" width="800" height="600">
`)
instance.show()

//?==============================================================
refs.galleryBox.addEventListener("keydown", closeModalFromKeyboard)
function closeModalFromKeyboard (event){
  
    if(event.code === "Escape"){
        instance.close();
    }
}
}



