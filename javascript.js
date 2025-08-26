// the value of rock is 0, paper is 1, scissor is 2 

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
    
}

function getHumanChoice(){
    
}