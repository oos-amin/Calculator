"use strict";

// Elements
const displayInput = document.querySelector(".display__input");
const numberBtns = document.querySelectorAll(".btn-val");
const clearDisplayBtn = document.querySelector("#clear-display");
const clearCharBtn = document.querySelector("#clear-char");
const equalBtn = document.querySelector("#equal-btn");

// add Event handler to Number and Operator buttons
for (let i = 0; i < numberBtns.length; i++) {
  const btn = numberBtns[i];
  btn.addEventListener("click", function () {
    displayInput.value += btn.value;
  });
}

// add Event handler to Clear Display button
clearDisplayBtn.addEventListener("click", function () {
  displayInput.value = "";
});

// add Event handler to Clear Characters button
clearCharBtn.addEventListener("click", function () {
  displayInput.value = displayInput.value.slice(0, -1);
});

// add Event handler to Equal button
equalBtn.addEventListener("click", function () {
  try {
    displayInput.value = eval(displayInput.value);
  } catch (error) {
    displayInput.value = "Error";
  }
});
