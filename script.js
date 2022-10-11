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

function playRound(playerSelection,computerSelection) {

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

    //return statement
    //if (win===true) {
    //    return 'You win!';
    //} else if (win===false) {
    //    return 'You lose! :(';
    //} else {
    //    return 'Draw';
    //}
    return win;
}

function game() {

    let playerScore=0
    let computerScore=0

    while (playerScore<3 && computerScore<3){

        //Get player selection
        playerSelection = prompt("Hello! Please type rock, paper, or scissors");
        //Get computer selection
        computerSelection = getComputerChoice();

        let win = playRound(playerSelection,computerSelection);

        if (win===true) {
            playerScore+=1;
            console.log(`Nice! ${playerSelection} beats ${computerSelection}`);
        } else if (win===false) {
            computerScore+=1;
            console.log(`Too bad... ${playerSelection} loses to ${computerSelection}`);
        } else {
            console.log(`Draw... You both picked ${playerSelection}`);
        }
        console.log(`Overall score: ${playerScore} | ${computerScore}`);

    }

    //determine winner
    if (playerScore>computerScore){
        console.log("You win!");
    } else {
        console.log("Better luck next time...");
    }
}

game();