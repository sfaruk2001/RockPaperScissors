let playerScore = 0;
let computerScore = 0;


let options = document.querySelectorAll(".choice");
const textArea = document.querySelector(".result");
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

options.forEach((button) => {
    button.addEventListener('click', () => {

        if (playerScore < 5 && computerScore < 5) {
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);
        } 

        if (playerScore === 5) {
            textArea.textContent = "You won!"
        } else if (computerScore === 5) {
            textArea.textContent = "You lost!";
        }
       
    })
});





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

    if (playerSelection === computerSelection) {
        textArea.textContent = "Draw";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            pScore.textContent = playerScore;
            textArea.textContent = "You win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            computerScore++
            cScore.textContent = computerScore;
            textArea.textContent = "You lose! Paper beats Rock";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            pScore.textContent = playerScore;
            textArea.textContent = "You win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            computerScore++;
            cScore.textContent = computerScore;
            textArea.textContent = "You lose! Scissors beats Paper";
        }
    } else if(playerSelection === "scissors") { //choose scissors
        if (computerSelection === "paper") {
            playerScore++
            pScore.textContent = playerScore;
            textArea.textContent = "You win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            computerScore++;
            cScore.textContent = computerScore;
            textArea.textContent = "You lose! Rock beats Scissors";
        }
    } 
}


/*
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

game();*/



