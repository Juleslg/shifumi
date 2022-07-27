
const shifumi = ["rock", "paper", "scissors"];
const computerchoice = shifumi[Math.floor(Math.random() * shifumi.length)];

function getComputerChoice() {
    return computerchoice;
}

function getPlayerChoice() {
    let promptplayer = prompt("Enter Rock, Paper Or Scissors").toLowerCase();


    return promptplayer;

}



const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "paper") && (computerSelection == "rock")) {

        alert("Player wins");
    }

    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {

        alert("Player wins");
    }

    else if ((playerSelection == "paper") && (computerSelection == "paper")) {

        alert("draw");
    }

}

console.log(playRound(playerSelection, computerSelection));

