//STICKY NAV BAR
window.onscroll = function() {myFunction()};

var nav = document.getElementsByClassName("nav")[0];
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

//FLIPANJE KARTICA

const karte = document.querySelectorAll(".kartica");

function flip() {
  this.classList.toggle("flip");
}
karte.forEach((karta) => karta.addEventListener("click", flip));