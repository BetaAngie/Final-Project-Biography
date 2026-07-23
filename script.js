// MOBILE NAVIGATION
document.addEventListener("DOMContentLoaded", function(){

    const menu = document.querySelector("#mobile-menu");
    const nav = document.querySelector("#nav-links");


    if(menu && nav){

        menu.onclick = function(){

            nav.classList.toggle("active");

        };

    }

});

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
    "I've played competitive gaming for three years."
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
title:"Characters",

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

let current = 0;

    const title = document.getElementById("category-title");
    const list = document.getElementById("prices-list");
    const card = document.getElementById("price-card".:
    
  function updateCategory(direction){

    // Animate out
    card.classList.add(
        direction === "next"
        ? "slide-out-left"
        : "slide-out-right"
    );

    setTimeout(() => {

        // Remove outgoing animation
        card.classList.remove(
            "slide-out-left",
            "slide-out-right"
        );

        // Update content
        title.textContent = categories[current].title;

        list.innerHTML = "";

        categories[current].prices.forEach(price => {

            const p = document.createElement("p");
            p.textContent = price;
            list.appendChild(p);
        });

        // Animate in
        card.classList.add(
            direction === "next"
            ? "slide-in-right"
            : "slide-in-left"
        );

        setTimeout(() => {
            card.classList.remove(
                "slide-in-right",
                "slide-in-left"
            );
        },350);
    },350);
}

function nextCategory(){

    current++;

    if(current >= categories.length){
        current = 0;
    }
    updateCategory("next");
}

function previousCategory(){

    current--;

    if(current < 0){
        current = categories.length - 1;
    }

    updateCategory("prev");
}

// Load first category
updateCategory("next");
