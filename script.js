// ===== MENU =====

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("open");

});




// ===== CHANGEMENT DE PAGE =====

const buttons = document.querySelectorAll(".menu-link");
const pages = document.querySelectorAll(".page");


buttons.forEach(button => {


    button.addEventListener("click", () => {


        const pageName = button.dataset.page;


        pages.forEach(page => {

            page.classList.remove("active");

        });


        document
        .getElementById(pageName)
        .classList.add("active");


        menu.classList.remove("open");


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


});






// ===== MODE CLAIR / SOMBRE =====


const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click", () => {


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){


        themeBtn.textContent = "🌙";


    } else {


        themeBtn.textContent = "☀️";


    }


});






// ===== OUVERTURE DES IMAGES =====


const images = document.querySelectorAll(".art");

const viewer = document.getElementById("viewer");

const viewerImg = document.getElementById("viewer-img");



images.forEach(image => {


    image.addEventListener("click", () => {


        viewer.style.display = "flex";


        viewerImg.src = image.src;


    });


});




viewer.addEventListener("click", () => {


    viewer.style.display = "none";


});
