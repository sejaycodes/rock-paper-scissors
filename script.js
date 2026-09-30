function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;
    let choice;
    if(randomNum === 1){
        choice = "rock"
    }else if(randomNum === 2){
        choice = "paper"
    }else{
        choice = "scissors"
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0


const playerScoreDoc = document.querySelector('#player-score')
const computerScoreDoc = document.querySelector('#computer-score')

const roundResultsDoc = document.querySelector('#round-results')
const matchWinnerDoc = document.querySelector('#match-winner')

function playRound(humanChoice, computerChoice){
    matchWinnerDoc.textContent = "";
    
    if(humanChoice === computerChoice){
        console.log('Its a tie!');
    }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! Paper beats rock')
        computerScore++;
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You win! Paper beats rock')
        humanScore++;
    }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('You lose! Scissors beats paper')
        computerScore++;
    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You win! Scissors beats paper')
        humanScore++;
    }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lose! Rock beats Scissors')
        computerScore++;
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You win! Rock beats Scissors')
        humanScore++;
    }
}


function playGame(playerSelection){

    playRound(playerSelection, getComputerChoice())

    playerScoreDoc.textContent = humanScore;
    computerScoreDoc.textContent = computerScore;

    if(humanScore === 5){
        matchWinnerDoc.textContent = "You won the game!"
    }else if(computerScore === 5){
        matchWinnerDoc.textContent = "You lost the game to a bot!"
    }else{
        if(humanScore > computerScore){
            matchWinnerDoc.textContent = 'You are currently leading.';
        }else if(computerScore > humanScore){
            matchWinnerDoc.textContent = 'The computer is currently leading.';
        }else {
            matchWinnerDoc.textContent = 'The match is tied.';
        }
    }
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', () => playGame('rock'))
paperBtn.addEventListener('click', () => playGame('paper'))
scissorsBtn.addEventListener('click', () => playGame('scissors'))