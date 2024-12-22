"use strict";
import { calculation } from './calculation.js';

const calculationForm = document.getElementById("calculation");
const inputLineField = document.getElementById("inputLine");
let savedCalculation = 0;
let resultDisplayed = false;
const thankYouBlock = document.querySelector(".thankYouForUsingMe");

Array.from(calculationForm.elements).forEach(element => {
    if (element.tagName != "BUTTON") return;
    element.addEventListener("click", (event) => {
        event.preventDefault();
        if (element.id == "delete") {
            inputLineField.value = inputLineField.value.slice(0, -1);
        }
        else {
            inputLineField.value += element.textContent;
        }
    });
});
calculationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    savedCalculation = inputLineField.value;
    const validInputPattern = /^\s*\d+\s*[\+\-\*\/]\s*\d+\s*$/;
    if (!validInputPattern.test(savedCalculation)) {
        inputLineField.value = "Invalid input: calculation only with two numbers possible";
        return;
    }

    let calcResult = calculation(savedCalculation);
    inputLineField.value += "=" + calcResult;
    resultDisplayed = true;
    if (thankYouBlock) {
        if (resultDisplayed) {
            thankYouBlock.style.display = "flex";
            resultDisplayed = false;
        } else {
            thankYouBlock.style.display = "none";
        }
    }
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    if (thankYouBlock) {
        thankYouBlock.style.display = "none";
    }
});