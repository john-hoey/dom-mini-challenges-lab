"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");
// let moneyForm = document.querySelector(".money-form");
// let moneyBox = document.querySelector(".coin-container");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}.00`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});
gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});

// //listen for the submission of the form (eventLister)
// //derive the two values from the inputs
// //use the input values to create the number of coins and the respective type.

let coinDisplay = document.querySelector(".coin-display");
let form = document.querySelector(".money-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let quantity = formData.get("quantity");
  let coinType = formData.get("type");
  for (let i = 0; i < quantity; i++) {
    let coin = document.createElement("div");
    coin.classList.add(coinType, "coin");
    coin.textContent = coinType;
    coinDisplay.append(coin);
    coin.addEventListener("click", () => {
      coin.remove();
    });
  }
});
let lightbulb = document.querySelector(".light-bulb");
let buttonColor = document.querySelector(".color");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");
onButton.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "yellow";
});
offButton.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "grey";
});

toggleButton.addEventListener("click", () => {
  if (lightbulb.style.backgroundColor === "yellow") {
    lightbulb.style.backgroundColor = "grey";
  } else if (lightbulb.style.backgroundColor === "grey") {
    lightbulb.style.backgroundColor = "yellow";
  } else {
    lightbulb.style.backgroundColor = "yellow";
  }
});
endButton.addEventListener("click", () => {
  lightbulb.remove();
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
  onButton.classList.remove("color");
  offButton.classList.remove("color");
  toggleButton.classList.remove("color");
  endButton.classList.remove("color");
});
