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
    let decisionLcase = decision.toLowerCase();  // Convert to lowercase.
    if (decisionLcase === "scissors") {
        return "scissors";
    } else if
        (decisionLcase === "rock") {
        return "rock";
        } else {
        return "paper";
    }
}

let humanChoice = getHumanChoice(); // Assigning the previous function to a variable.

console.log(humanChoice);

// Create score variables for comupter and human and initialize at 0

let humanScore = 0;
let computerScore = 0;

// Create logic to play a round of rock, paper, scissors utilizing variables:
//     >Create function that accepts the human, and computer choices as parameters (Probably a switch statement?)
//         -If the two parameters are equivalent, then display message "Draw" and do not increment either score variable.
//         -Create series of "if else" statments that determine which variable wins
//         -Choose which variables result in win, or loss.


function playRound(humanChoice, computerChoice) {
    const rock = "rock";
    const scissors = "scissors";
    const paper = "paper";
    if (humanChoice === computerChoice) {
        return alert("Draw");
    } if (humanChoice === rock && computerChoice === scissors) {
        alert("Rock crushes scissors, you win!");
        return 1;
    } else if (humanChoice === scissors && computerChoice === paper) {
        alert ("Scissors slices paper, you win!");
        return 1;
    } else if (humanChoice === paper && computerChoice === rock) {
        alert ("Paper covers rock, you win!");
        return 1;
    } else if (humanChoice === rock && computerChoice === paper) {
        alert ("Paper covers rock, you lose.");
        return 0;
    } else if (humanChoice === paper && computerChoice === scissors) {
        alert ("Scissors cuts paper, you lose.");
        return 0;
    } else if (humanChoice == scissors && computerChoice === rock) {
        alert("Rock crushes scissors, you lose.");
        return 0;
    } else {
        return null;
    }
}
console.log(playRound(humanChoice, computerChoice)); // function results in 1 for win, 0 for loss (any incorrect entry results in paper as the choice.)

let roundEndScore = playRound(humanChoice, computerChoice);
// Create logic function for keeping score
//     >Incrimentally increase score for each Player and Computer
//         -utilize existing variables for human and computer score listed above
//         -utilize function for playing a round to trigger score keeping function.