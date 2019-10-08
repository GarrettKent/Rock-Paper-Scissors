let userScore = 0;
let computerScore = 0;

//create dom elements and store them for future use
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//gets random computer choice then implements it in game function
function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}
getComputerChoice();

function convertToWord(letter) {
    if(letter === 'r'){ return "Rock" };
    if(letter === 'p'){ return "Paper" };
    if(letter === 's'){ return "Scissors" };
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;     
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}, You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;     
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}, You Lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice) {  
    const userChoice_div = document.getElementById(userChoice)  
    result_div.innerHTML = "It's A Draw!";
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

//userChoice is whatever user clicks on from main function
function game(userChoice) {
     const computerChoice = getComputerChoice();
     switch (userChoice + computerChoice) {
         case "rs":
         case "pr":
         case "sp":
             console.log("User Wins");
             win(userChoice, computerChoice);
             break;
        case "rp":
        case "ps":
        case "sr":
            console.log("User Loses");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Draw");
            draw(userChoice, computerChoice);
            break;
     }
}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}
main();

