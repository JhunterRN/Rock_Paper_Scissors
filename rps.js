"use strict";
// Choose a random value between integers 1 - 3. (Computer's Choice)
//     >If the value is one choose 'rock'
//     >If the value is two choose 'paper'
//     >If the value is three choose 'scissors'
// Assign returned value to a variable (Computer Choice)

let randomNumber = Math.floor(Math.random() * 3) +1; // Creates a random intiger from 1-3.

console.log(randomNumber)  //Log here to check functionality of randomNumber. 

// Now a function that utilizes the randomNumber variable to choose rock, paper, or scissors. 

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

let computerChoice = getComputerChoice(); // Assigning the previous function to a variable.

console.log(computerChoice);

// When the user inputs "rock", "paper", or "scissors": (Human player's Choice)
//     >Create function that accepts said input string including only "rock", "Paper", or "scissors" are case insensitive as values. 
//     >Assign resulted value to a variable (Human Choice)

function getHumanChoice() {
    let decision = prompt("Rock, Paper, or Scissors?");
    if (decision === "Scissors") {
        return "scissors";
    } else if 
        (decision === "rock") {
        return "rock";
        } else {
        return "paper";
    }
       
}

let humanChoice = getHumanChoice(); // Assigning the previous function to a variable. 

console.log(humanChoice);