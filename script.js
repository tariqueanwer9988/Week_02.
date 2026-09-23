const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const close = document.getElementById("close");


images.forEach(function(image) {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});


close.addEventListener("click", function() {

    lightbox.style.display = "none";

});