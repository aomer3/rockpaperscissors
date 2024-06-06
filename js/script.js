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
    let selectedButton = "";
    const buttons = document.querySelectorAll(".buttons");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.id === 'button-rock'){
                selectedButton = "ROCK";
                playRound(selectedButton);
            }
            else if(button.id === 'button-paper'){
                selectedButton = "PAPER";
                playRound(selectedButton);
            }
            else if(button.id === 'button-scissors') {
                selectedButton = "SCISSORS";
                playRound(selectedButton);
            }

        });

    });

}



//Record score of played game
let humanScore = 0;
let computerScore = 0;

function playRound(selectedButton){
    const computerChoice = getComputerChoice();
    const humanChoice = selectedButton;

    let body = document.body;
        
    let divScores = document.createElement("div");
    
    let divHeader = document.createElement("h1");
    divHeader.textContent = "Final scores:";

    let paraHuman = document.createElement("p");
    paraHuman.textContent = `Human Score: ${humanScore}`;
    let paraComputer = document.createElement("p");
    paraComputer.textContent = `Computer Score: ${computerScore}`;

    if(humanScore < 5 && computerScore < 5){
        switch (true) {
            case computerChoice === "ROCK" && humanChoice === "ROCK":
                break;
            case computerChoice === "ROCK" && humanChoice === "PAPER":
                humanScore++;
                break;
            case computerChoice === "ROCK" && humanChoice === "SCISSORS":
                computerScore++;
                break;
            case computerChoice === "PAPER" && humanChoice === "ROCK":
                computerScore++;
                break;
            case computerChoice === "PAPER" && humanChoice === "PAPER":
                break;
            case computerChoice === "PAPER" && humanChoice === "SCISSORS":
                humanScore++;
                break;
            case computerChoice === "SCISSORS" && humanChoice === "ROCK":
                humanScore++;
                break;
            case computerChoice === "SCISSORS" && humanChoice === "PAPER":
                computerScore++;
                break;
            case computerChoice === "SCISSORS" && humanChoice === "SCISSORS":
                break;
            default:
                break;
        }
        
        divScores.append(divHeader, paraHuman, paraComputer);
        body.append(divScores);

    }
    else if (humanScore === 5){
        let humanWins = document.createElement("h2");
        humanWins.textContent = "You Wins!";
        divScores.append(divHeader, humanWins, paraHuman, paraComputer);
        body.append(divScores);
    }
    else if (computerScore === 5){
        let compterWins = document.createElement("h2");
        compterWins.textContent = "Computer Wins!";
        divScores.append(divHeader, compterWins, paraHuman, paraComputer);
        body.append(divScores);
    }


}

getHumanChoice();


