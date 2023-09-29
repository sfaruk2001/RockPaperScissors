

function getComputerChoice() {
    let min = 1;
    let max = 3;
    let num = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive

    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } 
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        } 
    } else { //choose scissors
        if (computerSelection === "paper") {
            return "You win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        } 
    }

    return "Draw";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Please enter rock, paper, or scissors");
        let result = playRound(playerInput, getComputerChoice());

        if (result === "Draw") {
            console.log(result);
        } else if (result.substring(0,7) === "You win") {
            console.log(result);
            playerScore++;
        } else { //lose scenario
            console.log(result);
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the best of 5!");
    } else if (computerScore > playerScore) {
        console.log("You lose the best of 5!");
    } else {
        console.log("Best of 5 is a draw!");
    }
}

game();


