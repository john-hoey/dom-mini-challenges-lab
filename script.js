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
// Number.prototype.round = function(places) {
//   return +(Math.round(this + "e+" + places)  + "e-" + places);
// }
const roundToTwo = (number) => {
  return +(Math.round(number + "e+2") + "e-2");
};

let coinDisplay = document.querySelector(".coin-display");
let coinTotal = 0;
let coinTotalParagraph = document.querySelector(".coin-total");
let form = document.querySelector(".money-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let quantity = formData.get("quantity");
  let coinType = formData.get("type");
  let coinPenny = 0.01;
  let coinNickel = 0.05;
  let coinDime = 0.1;
  let coinQuarter = 0.25;

  for (let i = 0; i < quantity; i++) {
    let coin = document.createElement("div");

    coin.classList.add(coinType, "coin");
    coin.textContent = coinType;
    coinDisplay.append(coin);
    if (coinType === "penny") {
      coinTotal += coinPenny;
      coinTotal = roundToTwo(coinTotal);
      coinTotalParagraph.textContent = `Total: $${coinTotal}`;
    } else if (coinType === "nickel") {
      coinTotal += coinNickel;
      coinTotal = roundToTwo(coinTotal);
      coinTotalParagraph.textContent = `Total: $${coinTotal}`;
    } else if (coinType === "dime") {
      coinTotal += coinDime;
      coinTotal = roundToTwo(coinTotal);
      coinTotalParagraph.textContent = `Total: $${coinTotal}`;
    } else if (coinType === "quarter") {
      coinTotal += coinQuarter;
      coinTotal = roundToTwo(coinTotal);
      coinTotalParagraph.textContent = `Total: $${coinTotal}`;
    }

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
