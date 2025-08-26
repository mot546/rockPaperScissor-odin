// the value of rock is 0, paper is 1, scissor is 2 
// 0 beat 2
// 1 beat 0
// 2 beat 1

let humanScore = 0, compScore = 0, match = 0;

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
    else if (userInput === "PAPER" || userInputs === "PAPERS"){
        return ["paper", 1];
    }
    else if (userInput === "SCISSOR" || userInput === "SCISSORS"){
        return ["scissor", 2];
    }
    else {
        alert("Input INVALID, PLEASE CHECK YOUR SPELLING!");
        alert("Try again ok");

        getHumanChoice();
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
        :(compValue === 1? message="You Win": message = "Draw");
    }
    return message;
}

function playGame(){
    
    
}