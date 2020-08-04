function computerPlay(){
    let randomNumber = (Math.floor(Math.random() * 3)) + 1;
    switch(randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }
}


function capitalizeFirstLetter(string){
    firstString = string.toLowerCase();
    secondString = firstString[0].toUpperCase() + firstString.slice(1);
    return secondString;
}


function playRound(playerSelection, computerSelection){
    switch(computerSelection.toLowerCase()){
        case "paper":
            switch(playerSelection.toLowerCase()){
                case "paper":
                    return "tie";
                case "rock":
                    return "lose";
                case "scissor":
                    return "win";
            }
         case "rock":
                switch(playerSelection.toLowerCase()){
                    case "paper":
                        return "win";
                    case "rock":
                        return "tie";
                    case "scissor":
                        return "lose";
                }
         case "scissor":
                    switch(playerSelection.toLowerCase()){
                        case "paper":
                            return "lose";
                        case "rock":
                            return "win";
                        case "scissor":
                            return "tie";
                    }
    }
}


function game(){
    let input, input1;
    let result;
    let winningMessage = ` Great! \${input1} won`;
    let losingMessage =` Bad luck! \${computerSelection.capitalizeFirstLetter()} beats \${input1.capitalizeFirstLetter()} `;
    let tieMessage = ` Good fight! You both have chosen \${computerSelection.capitalizeFirstLetter()} `;
    let turns = ["rock", "paper", "scissor"];
    let computerScore = 0;
    let playerScore = 0;
    for(let i=0; i<5; i++){
        while(1){
            input = prompt("Hey. Enter Rock, Paper or Scissor");
            input1 = input.toLowerCase(input);
            if(turns.indexOf(input1)== '-1'){
                alert("Enter only amongst these three. Rock or Paper or Scissor.");
                continue;
            } else {
                break;
            }
        }
        computerSelection = computerPlay();
        result = playRound(input1, computerSelection);
        if(result === "win"){
            alert(` Congrats! You defeated Computer's choice ${computerSelection}`);
                playerScore++;
            } else if(result === "lose") {
                alert(` Oh no! You lost to Computer's choice ${computerSelection}`);
                computerScore++;
            } else if(result === "tie"){
                alert(` Tie! You both have chosen ${computerSelection}`);
            }
    }
    finalResult(computerScore, playerScore);
}
game();

function finalResult(computerScore, playerScore){
if(computerScore > playerScore){
    return alert(`Computer(${computerScore}) defeated you(${playerScore}).`);
 } else if(playerScore > computerScore){
    return alert(`You(${playerScore}) defeated Computer(${computerScore}).`);
 } else {
    return alert(`Match Tied. Refresh this page to play again.`);
 }
}




















