// Mobile Navigaition Bar
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

// Change Image Screen on Mobile 
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

//Typewriting Animation 
const text =
"My name is Lumi. I'm a Visual Art Management student at UCF who enjoys game design, cosplay, rhythm games, and creating digital art.";

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.onload = typeWriter;

//Fun Fact Button
const facts = [
    "I've been cosplaying since 2019!",
    "I have been playing rhythm games since 2016.",
    "I only been recently trying in my artwork since 2020.",
    "I am the eldest of 4 girls."
    "I have won Best Group and Best Cosplay for 2025 Supercon Talentshow.",
    "I have played competitive gaming for 3 years now, I am just on a break."
];

function newFact(){
    const random = 
        Math.floor(Math.random()*facts.length);

        document.getElementById("fact").innerHTML = facts[random];
}

//Age 
const birthday = new Date(2006, 1, 19);

const today = new Date();

let age = today.getFullYear() - birthday.getFullYear();

const month = today.getMonth() - birthday.getMonth();

if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    age--;
}

document.getElementById("age").textContent = age;

//Commission Pricing 
const pricing = [

  {
    title:"Character Prices"

    items: [
        "Headshot - $10",
        "Bust - $20",
        "Half Body - $35",
        "Full Body - $50,
        "Chibis - $15"
        ]
},

{
  title:"Illustrations"

  items: [
    "Reference Sheet - $25",
    "Illustration Banners - $30",
    "Character Illustration - $55",
    "Custom Scene - $70+ (Contact Me for more details)"
    ]
}

{
  title:"Add-Ons"

  items: [
    "Add Prop/Object - +$5",
    "Simple Background - +$5",
    "Detailed Background - +$15",
    'Extra Character - +50% of Price"
    "Commercial Use - Contact for more Info"
  ]
}

];

let currentCategory = 0;

function displayCategory() {
  document.getElementById("category-title").textContent =
    pricing[currentCategory].title;

  let html ="<ul>";
  pricing[currentCategory].items.forEach(function(item)
                                         html += "<li>" + item + "</li>";
});

html += "</ul>";
document.getElementById("prices-list").innerHTML = html; 
}
function nextCategory() {
  currentCategory++;
  if (currentCategory >= pricing.length) {
    currentCategory = 0;
  }
  displayCategory();
}

function previousCategory() {
  currentCategory--;
  if (currentCategory < 0) {
    currentCategory = pricing.length - 1;
  }
  displayCategory();
}
displayCategory();
