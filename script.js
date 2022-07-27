let playerscore = 0
let computerscore= 0




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

        alert("You win");
        return playerscore += 1;
    }

    else if ((playerSelection == "paper") && (computerSelection == "scissors")) {

        alert("You Loose");
        return computerscore += 1;
        
    
    }

    else if ((playerSelection == "paper") && (computerSelection == "paper")) {

        alert("Replay");
        return computerscore += 0;
    }

    if ((playerSelection == "rock") && (computerSelection == "rock")) {

        alert("Replay");
        return computerscore += 0;
    }

    else if ((playerSelection == "rock") && (computerSelection == "scissors")) {

        alert("You win");
         return playerscore += 1;
    }

    else if ((playerSelection == "rock") && (computerSelection == "paper")) {

        alert("You Loose");
        return computerscore += 1;
    }

    if ((playerSelection == "scissors") && (computerSelection == "rock")) {

        alert("You Loose");
        return computerscore += 1;
    }

    else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {

        alert("Replay");
        return computerscore += 0;
    }

    else if ((playerSelection == "scissors") && (computerSelection == "paper")) {

        alert("You Win");
        return playerscore += 1;
    }

    
}

console.log(playRound(playerSelection, computerSelection))
    