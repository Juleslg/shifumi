
const rockButtons = document.querySelector('.rock')
const paperButtons = document.querySelector('.paper')
const scissorsButtons = document.querySelector('.scissors')
const buttons = document.querySelector('.container')
const results = document.querySelector('.results')
const boardplayer = document.querySelector('.playerboard')
const computerboard = document.querySelector('.computerboard')

const shifumi = ["rock", "paper", "scissors"];
// const computerchoice = shifumi[Math.floor(Math.random() * shifumi.length)];

function getComputerChoice() {
    const computerchoice = shifumi[Math.floor(Math.random() * shifumi.length)];
    return computerchoice;
}

rockButtons.addEventListener("click", function () {
    playerSelection = "rock"
    playRound(playerSelection, getComputerChoice())
    boardplayer.textContent = "Player Score :" + playerscore
    computerboard.textContent = "Computer Score :" + computerscore 
    if (playerscore == 5) {
        results.textContent = "You Win The Game";
        reset()
    }
    else if (computerscore === 5) {
        results.textContent = "You Loose The Game"
        reset()

    }
    
});

paperButtons.addEventListener("click", function () {
    playerSelection = "paper"
    playRound(playerSelection, getComputerChoice())
    boardplayer.textContent = "Player Score :" + playerscore
    computerboard.textContent = "Computer Score :" + computerscore 
    if (playerscore == 5) {
        results.textContent = "You Win The Game";
        reset()
    }
    else if (computerscore === 5) {
        results.textContent = "You Loose The Game"
        reset()

    }

});

scissorsButtons.addEventListener("click", function () {
    playerSelection = "scissors"
    playRound(playerSelection, getComputerChoice())
    boardplayer.textContent = "Player Score :" + playerscore
    computerboard.textContent = "Computer Score :" + computerscore 
    if (playerscore == 5) {
        results.textContent = "You Win The Game";
        reset()
    }
    else if (computerscore === 5) {
        results.textContent = "You Loose The Game"
        reset()

    }
});

let playerscore = 0
let computerscore = 0



function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "paper") && (computerSelection == "rock")) {

        results.textContent = "You win";
        playerscore += 1;
    }

    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {

        results.textContent = "You Loose";
        computerscore += 1;

    }

    else if ((playerSelection == "paper") && (computerSelection == "paper")) {

        results.textContent = "Replay";
        computerscore += 0;
    }

    if ((playerSelection == "rock") && (computerSelection == "rock")) {

        results.textContent = "Replay";
        computerscore += 0;
    }

    else if ((playerSelection == "rock") && (computerSelection == "scissors")) {

        results.textContent = "You Win";
        playerscore += 1;
    }

    else if ((playerSelection == "rock") && (computerSelection == "paper")) {

        results.textContent = "You Loose";
        computerscore += 1;
    }

    if ((playerSelection == "scissors") && (computerSelection == "rock")) {

        results.textContent = "You Loose";
        computerscore += 1;
    }

    else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {

        results.textContent = "Replay";
        computerscore += 0;
    }

    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {

        results.textContent = "You Win";
        playerscore += 1;
    }






}

function reset() {
    playerscore = 0
    computerscore = 0

}


/* function game() {

    while (playerscore < 5 && computerscore < 5) {
        playRound(playerSelection, getComputerChoice())
    }

    if (playerscore == 5) {
        console.log("You Win The Game");
        reset()
    }

    else if (computerscore === 5) {
        console.log("You Loose You Loose The Game")
        reset()

    }

    

}

function main() {
    while(true) {
        game()
    }
}


main() */