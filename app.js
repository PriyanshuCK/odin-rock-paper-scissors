console.log("Namaste");

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choiceNumber = parseInt(prompt("What's your choice: Enter 0 for rock, 1 for paper, and 2 for scissors", "0"));
    if (isNaN(choiceNumber) || choiceNumber > 2 || choiceNumber < 0) {
        return getHumanChoice();
    }
    return choices[choiceNumber];
}

let computerScore = 0, humanScore = 0;

const computerChoice = getComputerChoice();

console.log("ComputerChoice: ", computerChoice);


function playRound(computerChoice, humanChoice) {
    switch (computerChoice) {
        case "rock":
            if (humanChoice === "paper") {
                console.log("You won! Paper beats Rock.");
            } else if (humanChoice === "scissors") {
                console.log("You lose! Rock beats Scissors.");
            } else {
                console.log("Draw");
            }
            break;

        case "paper":
            if (humanChoice === "rock") {
                console.log("You lose! Paper beats Rock.");
            } else if (humanChoice === "scissors") {
                console.log("You won! Scissors beat Paper.");
            } else {
                console.log("Draw");
            }
            break;

        case "scissors":
            if (humanChoice === "paper") {
                console.log("You lose! Scissors beat Paper.");
            } else if (humanChoice === "rock") {
                console.log("You won! Rock beats Scissors.");
            } else {
                console.log("Draw");
            }
            break;

        default:
            break;
    }
}

playRound(computerChoice, getHumanChoice());