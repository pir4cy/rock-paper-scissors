//DOM-related declarations
const buttons = document.querySelectorAll('button');
    const buttonRock = document.querySelector('#rock');
    const buttonPaper = document.querySelector('#paper');
    const buttonScis = document.querySelector('#scissors');
    buttons.forEach((button) => {
        button.style.cssText = 'border-style: none; background-color:#fff9ff; margin: 100px;'
    });
const winner = document.querySelector('#winner');
const result = document.querySelector('#result');
    const printRes = document.createElement('h2');
    result.classList.add('resultBox');
const score = document.querySelector('#score');
const printScore = document.createElement('p');
const printScoreComp = document.createElement('p');

//Variable Declarations
let playOptions = ['Rock','Paper','Scissors'];      //Array of options
let playerChoice = "";
let playerScore = computerScore = 0;
let playerWin = computerWin = false;

//Randomizing for computer
let computerPlay = function(){
    let randomNum = Math.floor(Math.random()*playOptions.length);
    let computerChoice = playOptions[randomNum];
    return computerChoice;
}

//function to decide if computer wins or loses
let deciderFunc = function (playerChoice,computerChoice){               
    switch(computerChoice) { 
        case `rock`:
            if (playerChoice == `paper`) return 0;
            else return 1;
            break;
        case `paper`:
            if(playerChoice == `rock`) return 1;
            else return 0;
            break;
        case `scissor`:
            if (playerChoice == `rock`) return 0;
            else return 1;
    }
}

//Play 1 round and print result
let playRound = function(playerChoice,computerChoice){
    if (computerChoice == playerChoice){
        printRes.textContent =  `It's a tie!`;
    }
    else {
        if (!deciderFunc(playerChoice,computerChoice)){
            printRes.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1; 
        }
        else {
            printRes.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
            computerScore += 1;
        }
    }
    printScore.textContent = `Player Score: ${playerScore}`;
    printScoreComp.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5){
        buttons.forEach((button) => {
            button.disabled = true;
        });
        if (playerScore == 5){
            playerWin = true;
            winner.textContent = "The Player Wins!";
        }
        if (computerScore == 5){
            computerWin = true;
            winner.textContent = "The Computer Wins!";
        }
    }
    result.appendChild(printRes);
    score.appendChild(printScore);
    score.appendChild(printScoreComp);

}

//Playing the Game
buttonRock.addEventListener('click', () => {
    playerChoice = playOptions[0];
    playRound(playerChoice,computerPlay());
});    

buttonPaper.addEventListener('click', () => {
    playerChoice = playOptions[1];
    playRound(playerChoice,computerPlay());
});   

buttonScis.addEventListener('click', () => {
    playerChoice = playOptions[2];
    playRound(playerChoice,computerPlay());
});    