function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum)
}

function getHumanChoice(){
    const humanNum = prompt("Enter: ")
    const choice = Number(humanNum)

    console.log(choice)
}

getComputerChoice()
getHumanChoice()