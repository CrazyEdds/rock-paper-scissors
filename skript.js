"use strict";

let rock = document.querySelector(".humanArea .rock");
let paper = document.querySelector(".humanArea .paper");
let scissors = document.querySelector(".humanArea .scissors");
let resultMessage = document.getElementsByClassName("resultMessage")[0];
let humanOptions = document.querySelectorAll(".humanArea img");
let computerOptions = document.querySelectorAll(".computerArea img");
let result;
let counter = document.getElementsByClassName("counter")[0];

function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let symbol;
    switch (randomNumber) {
        case 1:
            symbol = "rock";
            break;
        case 2:
            symbol = "paper";
            break;
        case 3:
            symbol = "scissors";
            break;
    }
    return symbol;
}

function compareSelections(playerSelection, computerSelection) {
    //mark selected options
    humanOptions.forEach((val) => {
        val.style.borderColor = (val.className === playerSelection) ? "red" : "black";
    });
    computerOptions.forEach((val) => {
        val.style.borderColor = (val.className === computerSelection) ? "red" : "black";
    });

    let result;
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    result = "Draw";
                    break;
                case "paper":
                    result = "Human lost!";
                    break;
                case "scissors":
                    result = "Human won!";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    result = "Human won!";
                    break;
                case "paper":
                    result = "Draw";
                    break;
                case "scissors":
                    result = "Human lost!";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    result = "Human lost!";
                    break;
                case "paper":
                    result = "Human won!";
                    break;
                case "scissors":
                    result = "Draw";
                    break;
            }
            break;
    }
    return result;
}

function printMessage(result) {
    resultMessage.innerHTML = result;
    let score = counter.innerHTML;
    switch(result) {
        case "Human won!":
            score++;
            break;
        case "Human lost!":
            score--;
            break;
    }
    counter.innerHTML = score;
}

rock.addEventListener("click", () => {
    result = compareSelections("rock", getComputerChoice());
    printMessage(result);
});
paper.addEventListener("click", () => {
    result = compareSelections("paper", getComputerChoice());
    printMessage(result);
});
scissors.addEventListener("click", () => {
    result = compareSelections("scissors", getComputerChoice());
    printMessage(result);
});
