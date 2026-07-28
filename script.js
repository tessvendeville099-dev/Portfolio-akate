// ===== MENU BURGER =====

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".side-menu");


menuButton.addEventListener("click", () => {

    menu.classList.toggle("open");

});





// ===== CHANGEMENT DE PAGE =====


const pageButtons = document.querySelectorAll(".side-menu button");
const pages = document.querySelectorAll(".page");


pageButtons.forEach(button => {


    button.addEventListener("click", () => {


        const target = button.dataset.page;


        pages.forEach(page => {

            page.classList.remove("active");

        });


        document
        .getElementById(target)
        .classList.add("active");



        menu.classList.remove("open");


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


});







// ===== MODE CLAIR / SOMBRE =====


const themeButton = document.querySelector(".theme-button");


themeButton.addEventListener("click", () => {


    document.body.classList.toggle("light");



    if(document.body.classList.contains("light")) {


        themeButton.textContent = "☀️";


    } else {


        themeButton.textContent = "🌙";


    }


});








// ===== OUVERTURE DES IMAGES =====


const artworks = document.querySelectorAll(".gallery img");

const viewer = document.querySelector(".image-viewer");

const bigImage = document.getElementById("big-image");



artworks.forEach(image => {


    image.addEventListener("click", () => {


        viewer.style.display = "flex";


        bigImage.src = image.src;


    });


});





viewer.addEventListener("click", () => {


    viewer.style.display = "none";


});
