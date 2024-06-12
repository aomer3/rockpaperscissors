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
    let round = 0;
    const buttons = document.querySelectorAll(".buttons");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.id === 'button-rock'){
                round++;
                selectedButton = "ROCK";
                playRound(selectedButton, round);
            }
            else if(button.id === 'button-paper'){
                round++;
                selectedButton = "PAPER";
                playRound(selectedButton, round);
            }
            else if(button.id === 'button-scissors') {
                round++;
                selectedButton = "SCISSORS";
                playRound(selectedButton, round);
            }
            else if(button.id === "button-reset"){
                selectedButton = "RESET";
                playRound(selectedButton);
            }

        });

        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "greenyellow";
        });

        button.addEventListener("mouseleave", () => {
            if(button.id === "button-rock"){
                button.style.backgroundColor = "red";
            }
            else if(button.id === "button-paper"){
                button.style.backgroundColor = "cyan";
            }
            else if(button.id === "button-scissors"){
                button.style.backgroundColor = "yellow";
            }
            else if(button.id === "button-reset"){
                round = 0;
                button.style.backgroundColor = "orange";
            }
        });


    });

}



//Record score of played game
let humanScore = 0;
let computerScore = 0;

function playRound(selectedButton, round){    
    let divHeader = document.createElement("h1");
    let paraHuman = document.createElement("p");
    let paraComputer = document.createElement("p");
    let divScores = document.createElement("div");
    let imgHuman = document.createElement("img");
    let imgComputer = document.createElement("img");

    const buttons = document.querySelectorAll(".buttons");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            divScores.textContent = "";
        })

    });

    const computerChoice = getComputerChoice();
    const humanChoice = selectedButton;

    let body = document.body;

    
    
    divHeader.textContent = `Round ${round}`;
    divHeader.style.textAlign = "center";
    divHeader.style.margin = "10px";

    paraHuman.textContent = `You: ${humanScore}`;
    paraHuman.style.textAlign = "center";
    paraHuman.style.margin = "10px";

    paraComputer.textContent = `Computer: ${computerScore}`;
    paraComputer.style.textAlign = "center";
    paraComputer.style.margin = "10px";

    if(selectedButton === "ROCK"){
        imgHuman.src = "./img/rock.png";
    }
    else if (selectedButton === "PAPER"){
        imgHuman.src = "./img/paper.png";
    }
    else if (selectedButton === "SCISSORS"){
        imgHuman.src = "./img/scissors.png";
    }


    if(computerChoice === "ROCK"){
        imgComputer.src = "./img/rock.png";
    }
    else if (computerChoice === "PAPER"){
        imgComputer.src = "./img/paper.png";
    }
    else if (computerChoice === "SCISSORS"){
        imgComputer.src = "./img/scissors.png";
    }

    imgHuman.style.width = "100px";
    imgHuman.style.margin = "20px";
    imgComputer.style.width = "100px";
    imgComputer.style.margin = "20px";



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
        
        divScores.append(imgHuman, imgComputer, divHeader, paraHuman, paraComputer);
        body.append(divScores);
    }
    else if (humanScore === 5){
        let humanWins = document.createElement("h2");
        humanWins.textContent = "You Win!";
        humanWins.style.textAlign = "center";
        humanWins.style.color = "red";
        humanWins.style.fontWeight = "bold";
        divScores.append(divHeader, humanWins, paraHuman, paraComputer);
        body.append(divScores);
    }
    else if (computerScore === 5){
        let compterWins = document.createElement("h2");
        compterWins.textContent = "Computer Wins!";
        compterWins.style.textAlign = "center";
        compterWins.style.color = "red";
        compterWins.style.fontWeight = "bold";
        divScores.append(divHeader, compterWins, paraHuman, paraComputer);
        body.append(divScores);
    }

    if (selectedButton === "RESET"){
        humanScore = 0;
        computerScore = 0;
        divScores.remove(imgHuman, imgComputer);
        body.divScores(divScores, newGame);
    }

};


getHumanChoice();


