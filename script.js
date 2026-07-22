// MOBILE NAVIGATION
const menu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

if (menu && navLinks) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// HOME PAGE IMAGE
const heroImage = document.querySelector(".hero-image img");

function swapImage() {
    if (!heroImage) return;

    if (window.innerWidth <= 768) {
        heroImage.src = "images/mobilePortrait.png";
    } else {
        heroImage.src = "images/desktopPortrait.png";
    }
}

if (heroImage) {
    swapImage();
    window.addEventListener("resize", swapImage);
}

// ABOUT ME ANIMATION
const typingElement = document.getElementById("typing");

if (typingElement) {

    const text =
        "My name is Lumi. I'm a Visual Art Management student at UCF who enjoys game design, cosplay, rhythm games, and creating digital art.";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

}

// IMAGE CHANGES
function changeImage(image) {

    const aboutImage = document.querySelector(".about-image img");

    if (aboutImage) {
        aboutImage.src = image;
    }

}

// RANDOMIZED FUN FACTS 
const facts = [
    "I've been cosplaying since 2019!",
    "I've been playing rhythm games since 2016!",
    "I started taking my artwork seriously in 2020.",
    "I am the eldest of four girls.",
    "I won Best Group and Best Cosplay at the 2025 Supercon Talent Show.",
    "I've played competitive rhythm games for three years."
];

function newFact() {

    const factElement = document.getElementById("fact");

    if (!factElement) return;

    const random = Math.floor(Math.random() * facts.length);

    factElement.textContent = facts[random];

}


// AGE AUTOMATICALLY UPDATES
const ageElement = document.getElementById("age");

if (ageElement) {

    const birthday = new Date(2006, 1, 19);

    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();

    const month = today.getMonth() - birthday.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    ageElement.textContent = age;

}

// PORTFOLIO LIGHTBOX
function openImage(image) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    if (!lightbox || !lightboxImage) return;

    lightbox.style.display = "flex";
    lightboxImage.src = image.src;

}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }

}


// RESUME DOWNLOAD
let downloads = 0;

function resumeDownload() {

    downloads++;

    const counter = document.getElementById("downloadCount");

    if (counter) {
        counter.textContent = downloads;
    }

}

// TOP SCROLL
const topButton = document.getElementById("topButton");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (
            document.documentElement.scrollTop > 300
        ) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

}

function backToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// COMMISSION PRICING

const pricing = [

{
title:"Character Prices",

items:[
"Headshot - $10",
"Bust - $20",
"Half Body - $35",
"Full Body - $50",
"Chibis - $15",
"Emotes - $10"
]
},

{
title:"Illustrations",

items:[
"Reference Sheet - $25",
"Illustration Banner - $30",
"Character Illustration - $55",
"Custom Scene - $70+"
]
},

{
title:"Wig Commissions",

items:[
"Simplistic Styling - $30+",
"Complex Styling - Contact for Price",
"Add Glitter - +$10",
"Add Shading - +$30"
]
},

{
title:"Add-Ons",

items:[
"Add Prop/Object - +$5",
"Simple Background - +$5",
"Full Render - +$10",
"Detailed Background - +$15",
"Extra Character - +50%",
"Commercial Use - Contact Me"
]
}

];

let currentCategory = 0;

function displayCategory(){

    const title = document.getElementById("category-title");
    const list = document.getElementById("prices-list");

    if(!title || !list) return;

    title.textContent = pricing[currentCategory].title;

    let html = "<ul>";

    pricing[currentCategory].items.forEach(item => {

        html += "<li>" + item + "</li>";

    });

    html += "</ul>";

    list.innerHTML = html;

}

function nextCategory(){

    currentCategory++;

    if(currentCategory >= pricing.length){

        currentCategory = 0;

    }

    displayCategory();

}

function previousCategory(){

    currentCategory--;

    if(currentCategory < 0){

        currentCategory = pricing.length - 1;

    }

    displayCategory();

}

if(document.getElementById("category-title")){

    displayCategory();

}


// COMMISSION STATUS
const status = document.getElementById("status");

if(status){

    const commissionsOpen = true;

    status.textContent = commissionsOpen
        ? "🟢 Commissions Open"
        : "🔴 Commissions Closed";

}
