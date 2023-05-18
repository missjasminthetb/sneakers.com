let ham = document.querySelector(".ham");
let navContent = document.querySelector("nav ul");
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeshopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listcard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantityElement = document.querySelector("#quantity");
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const imgGrid = document.querySelectorAll(".lower img");
const imgBig = document.querySelector(".big img");
const minus = document.querySelector(".fa-minus");
const plus = document.querySelector(".fa-plus");

let products = [
    {
        name: "Fall Limited Edition Sneakers",
        id: 1,
        price: "125.00",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everythingthe weather can offer.",
        picture: "./images/image-product-1.jpg"
    }
]

let quantity = 1;
quantityElement.innerHTML = quantity;

ham.addEventListener("click", handleBurgerClick);

function handleBurgerClick() {
  navContent.classList.toggle("hidden");
}

imgGrid.forEach((img) => {
  img.addEventListener("click", () => {
    imgBig.src = img.src;
  });
});

plus.addEventListener("click", () => {
  quantity += 1;
  quantityElement.innerHTML = quantity;
});
minus.addEventListener("click", () => {
  if (quantity <= 1) {
    quantity = 1;
    quantityElement.innerHTML = quantity;
  } else {
    quantity -= 1;
    quantityElement.innerHTML = quantity;
  }
});

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});


addToCartBtn.addEventListener('click',() =>{
    console.log(quantity)
    let product = products[0];
    console.log(product)
})