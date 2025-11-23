"use strict";

playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    let humanChoice = getHumanChoice(); 
    let computerChoice = getComputerChoice();
    console.log("Human Choice: ", humanChoice.toString());
    console.log("Computer Choice: ",computerChoice.toString());
    if (roundCount < 5) {
        playRound(humanChoice, computerChoice);
    } else {
        return endGame();
    }

    function randomNumberGen() {
        return (Math.floor(Math.random() * 3) + 1);
    }

    function getComputerChoice() {
        const choice = randomNumberGen();
        if (choice === 1) {
            return "rock";
        } else if (choice === 2) {
            return "paper";
        } else {
            return "scissors";
        }
    }

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

    function playRound(humanChoice, computerChoice) {
        const rock = "rock";
        const scissors = "scissors";
        const paper = "paper";
        if (humanChoice === rock && computerChoice === scissors) {
            alert("Rock crushes scissors, you win!");
            console.log("Human Score:", humanScore, "Computer Score:", computerScore);
            increaseHumanScore();
        } else if (humanChoice === scissors && computerChoice === paper) {
            alert ("Scissors slices paper, you win!");
            console.log("Human Score:", humanScore, "Computer Score:", computerScore);
            increaseHumanScore();
        } else if (humanChoice === paper && computerChoice === rock) {
            alert ("Paper covers rock, you win!");
            console.log("Human Score:", humanScore, "Computer Score:", computerScore);
            increaseHumanScore();
        } else if (humanChoice === rock && computerChoice === paper) {
            alert ("Paper covers rock, you lose.");
            console.log("Human Score:", humanScore, "Computer Score:", computerScore);
            increaseComputerScore();
        } else if (humanChoice === paper && computerChoice === scissors) {
            alert ("Scissors cuts paper, you lose.");
            console.log("Human Score:", humanScore, "Computer Score:", computerScore);
            increaseComputerScore();
        } else if (humanChoice == scissors && computerChoice === rock) {
            alert("Rock crushes scissors, you lose.");
            increaseComputerScore();
        } else {
            alert("Draw!")
            console.log("Human Score:", humanScore, "Computer Score:", computerScore);
            draw();

        }
        function increaseHumanScore() {
            let humanChoice = getHumanChoice(); 
            let computerChoice = getComputerChoice(); 
            console.log("Human Choice: ", humanChoice.toString());
            console.log("Computer Choice: ",computerChoice.toString());
            humanScore ++;
            roundCount ++;
            if (roundCount < 5) {
                playRound(humanChoice, computerChoice);
            } else {
                return endGame();
            }
        }
        function increaseComputerScore() {
            let humanChoice = getHumanChoice(); 
            let computerChoice = getComputerChoice();
            console.log("Human Choice: ", humanChoice.toString());
            console.log("Computer Choice: ",computerChoice.toString());
            computerScore ++;
            roundCount ++;
            if (roundCount < 5) {
                playRound(humanChoice, computerChoice);
            } else {
                return endGame();
            }
        }
        function draw() {
            let humanChoice = getHumanChoice(); 
            let computerChoice = getComputerChoice(); 
            console.log("Human Choice: ", humanChoice.toString());
            console.log("Computer Choice: ",computerChoice.toString());
            roundCount ++;
            if (roundCount < 5) {
                playRound(humanChoice, computerChoice);
            } else {
                return endGame();
            }
        }
    }
    function endGame(){
        if (humanScore > computerScore){
            return console.log("Game over: YOU WIN!", "Human Score:", humanScore, "Computer Score:", computerScore );
        } else if (humanScore === computerScore) {
            return console.log("Game over: DRAW",  "Human Score:", humanScore, "Computer Score:", computerScore );
        } else {
            return console.log("Game over: You lose.", "Human Score:", humanScore, "Computer Score:", computerScore );
        }
    }
}
