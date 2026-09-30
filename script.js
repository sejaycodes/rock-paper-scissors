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


function playRound(humanChoice, computerChoice){
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
    /*
    for(let i = 0; i < 5; i++){
        console.log(`-- Round ${i + 1} --`)
        playRound(getHumanChoice(), getComputerChoice())
    }
    */

    playRound(playerSelection, getComputerChoice())

    console.log('Your Score: ' + humanScore)
    console.log('Computer Score: ' + computerScore)

    if(humanScore > computerScore){
        console.log('You won the match')
    }else if(computerScore > humanScore){
        console.log('You lost')
    }else{
        console.log('The match is a tie')
    }
}

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', playGame('rock'))
paperBtn.addEventListener('click', playGame('paper'))
scissorsBtn.addEventListener('click', playGame('scissors'))



playGame()