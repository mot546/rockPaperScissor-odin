// the value of rock is 0, paper is 1, scissor is 2 

let humanScore = 0, compScore = 0;

function getComputerChoice(){// get the following number: 0 = rock, 1= paper, 2= scissor,,,,,
    const randomNum = Math.floor(Math.random() * 3);        //this function return 2 values

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
} // this return array

function playRound(human, comp){

}

let comp = getComputerChoice();
let human = getHumanChoice();

console.log(comp);
console.log(human);