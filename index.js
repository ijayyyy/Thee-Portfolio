/* hiding the navbar*/
const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".navlinks");
const links=document.querySelector(".navlinks li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})