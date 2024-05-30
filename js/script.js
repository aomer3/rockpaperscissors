//Computer selects rock, paper or scissors
function getComputerChoice() {
    let max = 3;
    let result = Math.floor(Math.random() * max);
    let choice = getComputerChoiceUpperCase(result);
    return choice;
}

function getComputerChoiceUpperCase(result){
    switch (result) {
        case 0:
            result = "ROCK";
            break;
        case 1:
            result = "PAPER";
            break;
        case 2:
            result = "SCISSORS";
            break;
        default:
            break;
    }
    return result;
}


//Human selects rock, paper or scissors
function getHumanChoice() {
    let result = prompt("Please enter rock, paper or scissors:");
    let choice = getHumanChoiceUpperCase(result);
    return choice.toUpperCase();
}

function getHumanChoiceUpperCase(result){
    switch (result) {
        case result.toUpperCase() === "ROCK":
            result = "ROCK";
            break;
        case result.toUpperCase() === "PAPER":
            result = "PAPER";
            break;
        case result.toUpperCase() === "SCISSORS":
            result = "SCISSORS";
            break;
        default:
            break;
    }
    return result;
}

//Record score of played game
let humanScore = 0;
let computerScore = 0;

function playRound(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    switch (true) {
        case computerChoice === "ROCK" && humanChoice === "ROCK":
            break;
        case computerChoice === "ROCK" && humanChoice === "PAPER":
            humanScore++;
            console.log("You win! Paper beats Rock!");
            break;
        case computerChoice === "ROCK" && humanChoice === "SCISSORS":
            computerScore++;
            console.log("You lose! Rock beats Scissors!");
            break;
        case computerChoice === "PAPER" && humanChoice === "ROCK":
            computerScore++;
            console.log("You lose! Paper beats Rock!");
            break;
        case computerChoice === "PAPER" && humanChoice === "PAPER":
            break;
        case computerChoice === "PAPER" && humanChoice === "SCISSORS":
            humanScore++;
            console.log("You win! Scissors beats Paper!");
            break;
        case computerChoice === "SCISSORS" && humanChoice === "ROCK":
            humanScore++;
            console.log("You win! Rock beats Scissors!");
            break;
        case computerChoice === "SCISSORS" && humanChoice === "PAPER":
            computerScore++;
            console.log("You lose! Scissors beats Paper!");
            break;
        case computerChoice === "SCISSORS" && humanChoice === "SCISSORS":
            break;
        default:
            break;
    }
}

function playGame(){
    let games = 5;
    for (let index = 1; index <= games; index++) {
        playRound();
    }
}

playGame();

console.log(`Final scores:
             Human Score: ${humanScore}
             Computer SCore: ${computerScore}`);

