function getComputerChoice() {

    let num = Math.ceil(Math.random()*9);
    let choice = '';

    if (num===1 || num===2 || num===3) {
        choice = 'rock';
    } else if (num===4 || num===5 || num===6) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }

    return choice;
}
function playRound(buttonText) {

    playerSelection=buttonText;
    computerSelection=getComputerChoice();

    let win = undefined;

    // Evaluating each win/loss scenario. If win === undf then it's a draw
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        win = false;
    } if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        win = true;
    } if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        win = false;
    } if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        win = true;
    } if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        win = true;
    } if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        win = false;
    } 

    //Change scores
    if(win){
        playerScore += 1;
        message.textContent=`Congratulations! ${playerSelection} beats ${computerSelection}.`;
    }else if(win===false){
        computerScore += 1;
        message.textContent=`Too bad! ${capitalize(computerSelection)} beats ${playerSelection.toLowerCase()}.`;
    }else{
        message.textContent=`Draw! You both chose ${playerSelection.toLowerCase()}.`;
        pass;
    };

    //check for win
    checkForWin();

    //change score
    changeScore();
};
function getPlayerSelection(){

    let selection = ''

    while (selection !=='rock' && selection !=='paper' && selection !=='scissors'){
        selection = prompt("Hello! Please type rock, paper, or scissors").toLowerCase();

        if (selection !=='rock' && selection !=='paper' && selection !=='scissors'){
            console.log(`Sorry, ${selection} is not a recognized input. Please type rock, paper, or scissors...`);
        }
    }
    
    return selection;
};
function checkForWin() {

    if (playerScore>=3) {
        message.textContent='CONGRATS! YOU WIN! We\'ll reset the score so you can play again...';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore>=3) {
        message.textContent='Too bad. You lost to a computer (that\'s embarrassing). We\'ll reset the score so you can try again...';
        playerScore = 0;
        computerScore = 0;
    };

};
function capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}
function changeScore(){
    score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}
playerScore = 0
computerScore = 0

//Add button event listenter
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {button.addEventListener('click',()=>{playRound(button.textContent)})});

//Select output paragraphs for later
const score = document.querySelector('p.score');
const message = document.querySelector('p.message');