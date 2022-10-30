const buttons = document.querySelectorAll('.btn');
const opponentPlayed = document.querySelector('#opponentPlayed');
const decision = document.querySelector('#decision');
const scoreline = document.querySelector('#scoreline');
// const playerIcon = document.querySelector('#playerIcon')
// const computerIcon = document.querySelector('computerIcon')
let pScore = 0
let cScore = 0
var score = new Array(2);

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

buttons.forEach((button) =>{
    button.addEventListener('click', function(e){
        computerSelection = getComputerChoice()
        if(e.target.id == 'rock'){
            document.getElementById("playerIcon").src = "images/rock.png";
        }
        if(e.target.id == 'paper'){
            document.getElementById("playerIcon").src = "images/paper.png";
        }
        if(e.target.id == 'scissors'){
            document.getElementById("playerIcon").src = "images/scissors.png";
        }

        if(computerSelection == 'rock'){
            document.getElementById("computerIcon").src = "images/rock.png";
        }
        if(computerSelection == 'paper'){
            document.getElementById("computerIcon").src = "images/paper.png";
        }
        if(computerSelection == 'scissors'){
            document.getElementById("computerIcon").src = "images/scissors.png";
        }

        opponentPlayed.textContent = "You played " + e.target.id + ", Computer played " + computerSelection
        score = playRound(e.target.id, computerSelection, pScore, cScore)
        pScore = score[0]
        cScore = score[1]
        scoreline.textContent = pScore + " : " + cScore

        if(pScore == 5 || cScore == 5){
            const winner = document.createElement('p')
            winner.classList.add('winner')
            rowsFlex.appendChild(winner)
            if(pScore == 5){
                winner.textContent = "You won the game!" 
            }
            if(cScore == 5){
                winner.textContent = "You lost the game!"
            }
            rockBtn.remove()
            paperBtn.remove()
            scissorsBtn.remove()
            const playAgain = document.createElement('button')
            playAgain.classList.add('playAgain')
            rowsFlex.appendChild(playAgain)
            playAgain.textContent = "Play Again?"
            playAgain.addEventListener('click', function(e){
                window.location.reload()
            })
        }
    })
})

function getComputerChoice(){
    choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection, pScore, cScore){
    choices = ["rock", "paper", "scissors"]
    pIndex = choices.indexOf(playerSelection.toLowerCase(), 0)
    cIndex = choices.indexOf(computerSelection, 0)

    if (pIndex == cIndex){
        decision.textContent = "This round is a Tie!"
        return [pScore, cScore]
    }

    if (pIndex - 1 == cIndex || pIndex + 2 == cIndex){
        decision.textContent = "You won this round!"
        return [++pScore, cScore]
    }

    else{
        decision.textContent = "You lost this round!"
        return [pScore, ++cScore]
    }
}

// function game(playerSelection, computerSelection, pScore, cScore){

//     computerSelection = getComputerChoice()
//     result = playRound(playerSelection, computerSelection)
//     console.log(result)
//     if (result == "You win!"){
//         ++pScore
//     }
//     if (result == "You lose!"){
//         ++cScore
//     }
//     if (pScore == 5){
//         return ("You won the game!")
//     }
//     if (cScore == 5){
//         return ("You lost the game!")
//     }
// }
