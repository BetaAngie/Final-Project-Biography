const menu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

function checkScreenSize() {

    if(window.innerWidth <= 768){
        console.log("Mobile View");
    }else{
        console.log("Desktop View");
    }

}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);

const heroImage = document.querySelector(".hero-image img");

function swapImage(){

    if(window.innerWidth <= 768){
        heroImage.src = "images/mobilePortrait.png";
    }else{
        heroImage.src = "images/desktopPortrait.png";
    }

}

swapImage();
window.addEventListener("resize", swapImage);
