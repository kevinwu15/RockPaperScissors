function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    choices = ["rock", "paper", "scissors"]
    pIndex = choices.indexOf(playerSelection.toLowerCase(), 0)
    cIndex = choices.indexOf(computerSelection, 0)

    if (pIndex == cIndex){
        return ("Tie!")
    }

    if (pIndex - 1 == cIndex || pIndex + 2 == cIndex){
        return ("You win!")
    }

    else{
        return ("You lose!")
    }
}

function game(){
    let score = 0
    for (let i = 0; i < 5; i++){
        var playerSelection = prompt("Select rock, paper, or scissors:")
        do{
            if(playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors"){
                break
            }
            else{
                playerSelection = prompt("Select rock, paper, or scissors:")
            }
        }
        while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors")

        computerSelection = getComputerChoice()
        result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (result == "You win!"){
            ++score
        }
        if (result == "You lose!"){
            --score
        }
    }
    if (score > 0){
        return ("You won the game!")
    }
    if (score < 0){
        return ("You lost the game!")
    }
    else{
        return ("This game ended in a tie!")
    }
}

console.log(game())