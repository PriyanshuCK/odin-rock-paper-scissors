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

function playRound(computerChoice, humanChoice) {
    console.log("Computer Choice: ", computerChoice, ", Your Choice: ", humanChoice);

    switch (computerChoice) {
        case "rock":
            if (humanChoice === "paper") {
                console.log("You won! Paper beats Rock.");
                humanScore++;
            } else if (humanChoice === "scissors") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            } else {
                console.log("Draw");
            }
            break;

        case "paper":
            if (humanChoice === "rock") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else if (humanChoice === "scissors") {
                console.log("You won! Scissors beat Paper.");
                humanScore++;
            } else {
                console.log("Draw");
            }
            break;

        case "scissors":
            if (humanChoice === "paper") {
                console.log("You lose! Scissors beat Paper.");
                computerScore++;
            } else if (humanChoice === "rock") {
                console.log("You won! Rock beats Scissors.");
                humanScore++;
            } else {
                console.log("Draw");
            }
            break;

        default:
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (computerScore>humanScore) {
        console.log("You lose!\nComputer score: ", computerScore, ", Your score: ", humanScore);
    } else if(humanScore>computerScore) {
        console.log("You won!\nComputer score: ", computerScore, ", Your score: ", humanScore);
    } else {
        console.log("It's a draw!\nComputer score: ", computerScore, ", Your score: ", humanScore);
    }
}

playGame()