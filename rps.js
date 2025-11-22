"use strict";
// Choose a random value between integers 1 - 3. (Computer's Choice)
//     >If the value is one choose 'rock'
//     >If the value is two choose 'paper'
//     >If the value is three choose 'scissors'
// Assign returned value to a variable (Computer Choice)

let randomNumber = Math.floor(Math.random() * 3) +1;

console.log(randomNumber)

function getComputerChoice() {
    const choice = randomNumber;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerChoice = getComputerChoice();

console.log(computerChoice);
