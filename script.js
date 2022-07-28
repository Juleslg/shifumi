

const shifumi = ["rock", "paper", "scissors"];
// const computerchoice = shifumi[Math.floor(Math.random() * shifumi.length)];

function getComputerChoice() {
    const computerchoice = shifumi[Math.floor(Math.random() * shifumi.length)];
    return computerchoice;
}

function getPlayerChoice() {
    let promptplayer = prompt("Enter rock, paper or scissors").toLowerCase();
    return promptplayer;
    
}

let playerscore = 0
let computerscore = 0

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "paper") && (computerSelection == "rock")) {

        console.log("You win");
        playerscore += 1;
    }

    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {

        console.log("You Loose");
        computerscore += 1;


    }

    else if ((playerSelection == "paper") && (computerSelection == "paper")) {

        console.log("Replay");
        computerscore += 0;
    }

    if ((playerSelection == "rock") && (computerSelection == "rock")) {

        console.log("Replay");
        computerscore += 0;
    }

    else if ((playerSelection == "rock") && (computerSelection == "scissors")) {

        console.log("You Win");
        playerscore += 1;
    }

    else if ((playerSelection == "rock") && (computerSelection == "paper")) {

        console.log("You Loose");
        computerscore += 1;
    }

    if ((playerSelection == "scissors") && (computerSelection == "rock")) {

        console.log("You Loose");
        computerscore += 1;
    }

    else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {

        console.log("Replay");
        computerscore += 0;
    }

    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {

        console.log("You Win");
        alert("You Win");
        playerscore += 1;
    }

}

function reset() {
    playerscore = 0
    computerscore = 0
    
}


function game() {

    while (playerscore < 5 && computerscore < 5) {
        playRound(getPlayerChoice(), getComputerChoice())

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


main()