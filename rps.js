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

// Create a scoring system that incrementally increases based upon who wins a game that you will program later:
//     >Create score variables for comupter and human and initialize at 0
//         -If Computer wins increment score +1
//         -If Human wins increment score +1
//         -If Human increment reaches 5, display "You have Won the Game"
//         -If Computer increment reaches 5, display "You have Lost the Game"
//         -else if call another round of RPS (call the initial input again)

let humanScore = 0
let computerScore = 0

    // >Create function that accepts the human, and computer choices as parameters (Probably a switch statement?)
    //     -If the two parameters are equivalent, then display message "Draw" and do not increment either score variable. 
    //     -Else if: Human chooses rock and Computer chooses scissors increment human +1
    //     -Else if: Human chooses rock and Computer chooses paper increment computer +1
    //     -Else if: Human chooses paper and Computer choses rock increment human +1
    //     -Else if: Human chooses paper and Computer chooses rock then increment computer +1
    //     -Else if: Human chooses scissors and Computer chooses paper then increment human +1
    //     -Else if: Human chooses scissors and Computer chooses rock then increment computer +1


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

console.log(playRound(humanChoice, computerChoice));