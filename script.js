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
