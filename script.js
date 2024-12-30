let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = (min, max) => {
    return Math.floor(Math.random() * 9);
}

const compareGuesses = (humanG, computerG, secretG) => {
    const humanDistance = Math.abs(secretG - humanG)
    const computerDistance = Math.abs(secretG - computerG)
    return humanG <= computerG;
    if (human <= computerG){
        updateScore('human')
    }
    else {
        updateScore('computer')
    }
}

const updateScore = (winner) => {
    if(winner === 'human'){
        humanScore += 1;
    }
    else if (winner === 'computer'){
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}