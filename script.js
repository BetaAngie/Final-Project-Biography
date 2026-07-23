/* =====================================================
   MOBILE NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    if (menu && navLinks) {

        menu.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

});

/* =====================================================
   ABOUT ME - TYPEWRITER ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const introduction =
        "My name is Lumi. I'm a Visual Art Management student at UCF who enjoys game design, cosplay, rhythm games, and creating digital art.";

    let currentCharacter = 0;

    function typeWriter() {

        if (currentCharacter < introduction.length) {

            typingElement.textContent += introduction.charAt(currentCharacter);

            currentCharacter++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

}

/* =====================================================
   ABOUT ME - IMAGE SWITCHER
===================================================== */

function changeImage(imagePath) {

    const aboutImage = document.querySelector(".about-image img");

    if (!aboutImage) return;

    aboutImage.src = imagePath;

}


/* =====================================================
   ABOUT ME - RANDOM FUN FACTS
===================================================== */

const funFacts = [

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

    const randomIndex = Math.floor(Math.random() * funFacts.length);

    factElement.textContent = funFacts[randomIndex];

}


/* =====================================================
   ABOUT ME - AUTOMATIC AGE
===================================================== */

const ageElement = document.getElementById("age");

if (ageElement) {

    // Month is zero-based (1 = February)
    const birthday = new Date(2006, 1, 19);

    const today = new Date();

    let currentAge =
        today.getFullYear() - birthday.getFullYear();

    const monthDifference =
        today.getMonth() - birthday.getMonth();

    if (

        monthDifference < 0 ||

        (
            monthDifference === 0 &&
            today.getDate() < birthday.getDate()
        )

    ) {

        currentAge--;

    }

    ageElement.textContent = currentAge;

}

/* =====================================================
   PORTFOLIO - IMAGE LIGHTBOX
===================================================== */

function openImage(selectedImage) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = selectedImage.src;
    lightbox.style.display = "flex";

}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.style.display = "none";

}


/* =====================================================
   PORTFOLIO - RESUME DOWNLOAD COUNTER
===================================================== */

let downloadCount = 0;

function resumeDownload() {

    downloadCount++;

    const counter = document.getElementById("downloadCount");

    if (!counter) return;

    counter.textContent = downloadCount;

}


/* =====================================================
   SCROLL TO TOP BUTTON
===================================================== */

const topButton = document.getElementById("topButton");

if (topButton) {

    window.addEventListener("scroll", () => {

        const scrollPosition =
            document.documentElement.scrollTop;

        topButton.style.display =
            scrollPosition > 300 ? "block" : "none";

    });

}


/* =====================================================
   SMOOTH SCROLL TO TOP
===================================================== */

function backToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// =============================
// COMMISSION PRICING
// =============================

const pricing = [

    {
        title: "Characters",
        items: [
            "Headshot - $10",
            "Bust - $20",
            "Half Body - $35",
            "Full Body - $50"
        ]
    },

    {
        title: "Illustrations",
        items: [
            "Emotes - $10",
            "Chibis - $15",
            "Reference Sheet - $25",
            "Illustration Banner - $30",
            "Character Illustration - $55",
            "Custom Scene - $70+"
        ]
    },

    {
        title: "Wig Commissions",
        items: [
            "Simplistic Styling - $30+",
            "Complex Styling - Contact for Price",
            "Add Glitter - +$10",
            "Add Shading - +$30"
        ]
    },

    {
        title: "Add-Ons",
        items: [
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
const card = document.getElementById("price-card");

function updateCategory(direction = "next") {

    if (!title || !list || !card) return;

    const outClass =
        direction === "next"
            ? "slide-out-left"
            : "slide-out-right";

    const inClass =
        direction === "next"
            ? "slide-in-right"
            : "slide-in-left";

    card.classList.add(outClass);

    setTimeout(() => {

        card.classList.remove(
            "slide-out-left",
            "slide-out-right"
        );

        title.textContent = pricing[current].title;

        list.innerHTML = "";

        pricing[current].items.forEach(item => {

            const p = document.createElement("p");

            p.textContent = item;

            list.appendChild(p);

        });

        card.classList.add(inClass);

        setTimeout(() => {

            card.classList.remove(
                "slide-in-right",
                "slide-in-left"
            );

        }, 350);

    }, 350);

}

function nextCategory() {

    current++;

    if (current >= pricing.length) {

        current = 0;

    }

    updateCategory("next");

}

function previousCategory() {

    current--;

    if (current < 0) {

        current = pricing.length - 1;

    }

    updateCategory("prev");

}

if (title && list && card) {

    title.textContent = pricing[current].title;

    pricing[current].items.forEach(item => {

        const p = document.createElement("p");

        p.textContent = item;

        list.appendChild(p);

    });

}
