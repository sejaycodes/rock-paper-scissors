function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;
    
    return randomNum;
}

function getHumanChoice(){
    const humanChoice = prompt("Enter 'Rock' | 'Paper' | 'Scissors': ")
    const choice = humanChoice.toLowerCase();

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0


function playRound(getComputerChoice, getHumanChoice){

}

playRound(getComputerChoice(), getComputerChoice())