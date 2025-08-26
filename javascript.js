// the value of rock is 0, paper is 1, scissor is 2 
// 0 beat 2
// 1 beat 0
// 2 beat 1

let humanScore = 0, compScore = 0;

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);   
    if (randomNum === 0){
        return ["rock", 0];
    }
    else if(randomNum === 1){
        return ["paper", 1];
    }
    else{
        return ["scissor", 2];
    }
    
}// this returns array

function getHumanChoice(){
    let userInput = prompt("Enter Rock, Paper, Scissor", "paper");
    userInput = userInput.toUpperCase();

    if (userInput === "ROCK" || userInput === "ROCKS"){
        return ["rock",0];
    }
    else if (userInput === "PAPER" || userInput === "PAPERS"){
        return ["paper", 1];
    }
    else if (userInput === "SCISSOR" || userInput === "SCISSORS"){
        return ["scissor", 2];
    }
    else{
        alert("Input INVALID, PLEASE CHECK YOUR SPELLING!");
        alert("Try again ok");
        playGame();
    }
} 

function playRound(human, comp){
    const humanValue = human[1];
    const compValue = comp[1];
    let message = "";

    if (humanValue === 0){//rock
        compValue === 1? message = "You Lose"
        :(compValue === 2? message = "You Win": message = "Draw");
    }
    else if ( humanValue === 1){//paper
        compValue === 0? message="You Win"
        :(compValue === 2? message = "You Lose": message = "Draw");
    }
    else{//Scissor
        compValue === 0?message = "You Lose"
        :(compValue === 1? message= "You Win": message = "Draw");
    }

    message === "You Win"? humanScore += 1:(message === "You Lose"? compScore += 1: message = "Draw");
    return message;
}

function playGame(){
    let humanChoice, compChoice;
    let match = 0;
    let message = "";

    while(match < 5){
        humanChoice = getHumanChoice();
        compChoice = getComputerChoice();

        if (humanScore !== 3 && compScore !== 3 && match !== 5){
            message = playRound(humanChoice, compChoice);
            message !== "Draw"? match +=1: message="Draw";
            alert(`${message} || Your Score: ${humanScore} | Computer: ${compScore}`);
            
        }
        else{
            match += 5;
        }
    }
    humanScore > compScore? alert("YOU WIN THE MATCH!, YOU SCORED 3 POINTS FIRST!")
    : alert("you lose maaaan!, computer won 3 points faster than yow");
}
playGame();