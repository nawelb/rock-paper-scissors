let userScore=0;
let computerScore=0;

//stock DOM into variable
const userScore_span = document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");

const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");


function getComputerChoice(){
    const choices=[ 'rock', 'paper', 'scissors'];
    const randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter ==="scissors") return "Scissors";
    if(letter ==="paper") return "Paper";
    return "Rock";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You Win!`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => document.getElementById(user).classList.remove("green-glow"), 300);
}

function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You Lost! `
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => document.getElementById(user).classList.remove("red-glow"), 300);
}
function draw(user, computer){
    result_div.innerHTML = `${convertToWord(computer)} equals ${convertToWord(user)}. It's a draw! `
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(() => document.getElementById(user).classList.remove("grey-glow"), 300);
}




function game(userChoice){
    const computerChoice= getComputerChoice();
    console.log(computerChoice);
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            lose(userChoice, computerChoice);
            break;
        default: 
            draw(userChoice, computerChoice);
    }


}


function main(){
    rock_div.addEventListener('click', function(){
        game('rock');
    });
    paper_div.addEventListener('click', function(){
        game('paper');
    });
    scissors_div.addEventListener('click', function(){
        game('scissors');
    
    });
}

main();