const result = document.querySelector('.result');
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (humanChoice, machineChoice) => {

    console.log('Humano:', humanChoice);
    console.log('Máquina:', machineChoice);

    if (humanChoice === machineChoice) {
        result.src = 'acetis/empate.gif'
        result.style.width = '200px';
        result.style.height = '100px';
    }

    else if (
        (humanChoice === 'rock' && machineChoice === 'scissors') ||
        (humanChoice === 'paper' && machineChoice === 'rock') ||
        (humanChoice === 'scissors' && machineChoice === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.src = 'acetis/voce ganhou.gif'
        result.style.width = '200px';
        result.style.height = '100px';
    }

    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.src = 'acetis/perdeu.gif'
        result.style.width = '200px';
        result.style.height = '100px';
    }
}


