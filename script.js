let ham =document.querySelector(".ham");

let navContent =document.querySelector("nav ul");

function handleBurgerClick(){
navContent.classList.toggle('hidden')
}

ham.addEventListener('click',handleBurgerClick);

