// the value of rock is 0, paper is 1, scissor is 2 
// 0 beat 2
// 1 beat 0
// 2 beat 1

const buttonsNode= document.querySelector(".buttonSelect").querySelectorAll("button");
let humanScore = 0, compScore = 0;

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);   
    if (randomNum === 0){
        return ["🪨", 0];
    }
    else if(randomNum === 1){
        return ["📄", 1];
    }
    else{
        return ["✂️", 2];
    }
    
}// this returns array

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
    let message = "";
    const userSelected = document.querySelector(".userSelected").querySelector(".selected");
    const compSelected = document.querySelector(".compSelected").querySelector(".selected");
    const announce = document.querySelector(".announce");
    const hScore = document.querySelector(".hScore");
    const cScore = document.querySelector(".cScore");

            buttonsNode.forEach(element => {

            let playerChoice = [];
            if (element.className === "rock") playerChoice = ["🪨", 0];
            if (element.className === "paper") playerChoice = ["📄", 1];
            if (element.className === "scissor") playerChoice = ["✂️", 2];
            
            element.addEventListener("click",function() {
                
                let compChoice = getComputerChoice();
                message = playRound(playerChoice, compChoice);
                userSelected.textContent =playerChoice[0];
                compSelected.textContent =compChoice[0];
                hScore.textContent = `score: ${humanScore}`;
                cScore.textContent = `score: ${compScore}`;
                announce.textContent = message;
                if(humanScore === 5 || compScore === 5){
                humanScore > compScore? announce.textContent ="YOU WIN THE MATCH!, YOU SCORED 5 POINTS FIRST!"
                : announce.textContent="you lose maaaan!, computer won 5 points faster than yow";
                humanScore = 0;
                compScore = 0;
                }
            });
        });

    
}


playGame();

