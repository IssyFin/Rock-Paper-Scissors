//Play Game: A function that will play 5 rounds of a game and report the winner
// window.addEventListener('click',console.log(this));

// const scissorsButton = document.querySelector(".scissorsButton");
// const rockButton = document.querySelector(".rockButton");
// const paperButton = document.querySelector(".paperButton");


// scissorsButton.addEventListener('click',(e)  =>  {
//     console.log(e.target.classList[0])
// })

// rockButton.addEventListener('click', (e) => {
//     console.log(e.target.classList[0])
// })

// paperButton.addEventListener('click', (e) =>{
//     console.log(e.target.classList[0])
// })

const gameButton = document.querySelectorAll("button");
const playerScoreBlock = document.querySelector("#playerScoreBlock"); //finds where score needs to go
const computerScoreBlock = document.querySelector("#computerScoreBlock"); // finds where score needs to go
const messageBlock = document.querySelector("#messageBlock");
const introMessageBlock = document.querySelector("#introMessageBlock");

const playerScore = document.createElement('playerScore'); //creates a div for the player score
const computerScore = document.createElement('computerScore'); //creates a div for computer score
playerScore.classList.add("playerScore");//adds class of player score
computerScore.classList.add("computerScore");//adds class of computer score

const message = document.createElement('message');
message.classList.add("message");
const introMessage = document.createElement('introMessage');
introMessage.classList.add("introMessage");


// message.textContent = "Choose Rock, Paper, or Scissors to begin the game!";
let gameStarted = false;
let playerScoreNumber = 0;
let computerScoreNumber = 0;
introMessage.textContent = "Choose Rock Paper, or Scissors to begin the game! \n";
playerScore.textContent = 0;
computerScore.textContent = 0;
introMessageBlock.appendChild(introMessage);
playerScoreBlock.appendChild(playerScore);
computerScoreBlock.appendChild(computerScore);
// let gameStarted = false;

// const playerScore = document.querySelector(".playerScore");
// const computerScore = document.querySelector("computerScore");
// playerScoreBlock.appendChild(playerScore);
// computerScoreBlock.appendChild(computerScore);
// messageBlock.appendChild(message);

gameButton.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    // console.log(e.target.classList[0])
    if (gameStarted == false){
        gameStarted = true;
        playerScoreNumber = 0;
        computerScoreNumber = 0;
        introMessageBlock.removeChild(introMessage);
    }
    let computerChoice = computerPlay();
    if(e.target.classList[0] == "paperButton"){
        playARound("Paper",computerChoice);
    }
    else if(e.target.classList[0] == "rockButton"){
        playARound("Rock",computerChoice);
    }
    else if(e.target.classList[0] == "scissorsButton"){
        playARound("Scissors",computerChoice);
    }
    if(playerScoreNumber == 5 || computerScoreNumber == 5){
        gameStarted = false;
        introMessageBlock.appendChild(introMessage);
        
        if(playerScoreNumber == computerScoreNumber){
            message.textContent = message.textContent + ' The game was a tie!';
        }
        else if(playerScoreNumber > computerScoreNumber){
            message.textContent = message.textContent + ' You won the game!';
        }
        else{
            message.textContent = message.textContent + ' The computer won the game; better luck next time!';
        }
        message.textContent = message.textContent+` The final score was Player: ${playerScoreNumber} Computer: ${computerScoreNumber}`
    }
    playerScoreBlock.appendChild(playerScore);
    computerScoreBlock.appendChild(computerScore);
    messageBlock.appendChild(message);

}))

function game(){
    let playerScore = 0;
    let computerScore = 0;
    // for(let i=0; i<5; i++){//loop once
    //     let userChoice = prompt("Rock, Paper, or Scissors? Type your answer in the console!").toLowerCase();
    //     while((userChoice != "paper")&&(userChoice!="rock")&&(userChoice!="scissors")){
    //         console.log(`User choice is ${userChoice}`)
    //         userChoice = prompt("Please add a valid input: Rock, Paper, or Scissors").toLowerCase();
    //     }
    //     let computerChoice = computerPlay();
    //     let victor = playARound(userChoice,computerChoice);
    //     if (victor=="Computer"){
    //         console.log("The computer won this round!");
    //         computerScore++;
    //     }
    //     else if(victor=="Player"){
    //         console.log("You won this round!");
    //         playerScore++;
    //     }
    //     else{
    //         console.log("This round was a tie!");
    //     }
    // }
    // message.textContent = message.textContent+`\n The final score was: \n Player: ${playerScore} \n Computer: ${computerScore}`
    // if(playerScore == computerScore){
    //     message.textContent = message.textContent + '\n The game was a tie!';
    // }
    // else if(playerScore > computerScore){
    //     message.textContent = message.textContent + '\n You win!';
    // }
    // else{
    //     message.textContent = message.textContent + '\n The computer wins; better luck next time!';
    // }
}

//Computer play: A function that randomly chooses between rock, paper, and scissors
function computerPlay(){
    let randomPlay = Math.floor(Math.random()*3); //randomly output one of three values (0, 1, or 2)
    if(randomPlay == 0){
        return "Rock";
    }
    else if(randomPlay == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

//playARound: takes the user move and the computer move and declares a winner
function playARound(userMove, computerMove){
    userMove = userMove.toLowerCase();
    computerMove = computerMove.toLowerCase();
    if(computerMove == userMove){ //If the computer and user do the same move, report a tie
        message.textContent = "It's a draw! Great minds think alike :)"
        return;
    }
    else if(userMove == "paper"){
        if(computerMove == "rock"){
            message.textContent = "Paper beats rock: you win!";
            // playerScore++;
            playerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
            computerScore.textContent = computerScoreNumber;
            // console.log('Player score is '+playerScoreNumber);
            return "Player";
        }
        else{
            message.textContent = "Scissors beat paper: you lose.";
            // computerScore++;
            computerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
            computerScore.textContent = computerScoreNumber;
            // console.log('Player score is '+ playerScoreNumber);
            return "Computer.";
        }
    }
    else if(userMove == "rock"){
        if(computerMove == "scissors"){
            message.textContent = "Rock beats scissors: you win!";
            // playerScore++;
            playerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
            computerScore.textContent = computerScoreNumber;
            return "Player";
        }
        else{
            message.textContent = "Paper beats rock: you lose.";
            // computerScore++;
            computerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
            computerScore.textContent = computerScoreNumber;
            return "Computer";
        }
    }
    else{
        if(computerMove == "paper"){
            message.textContent = "Scissors beat paper: you win!";
            // playerScore++;
            playerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
            computerScore.textContent = computerScoreNumber;
            return "Player";
        }
        else{
            message.textContent = "Rock beats scissors: you lose.";
            // computerScore++;
            computerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
            computerScore.textContent = computerScoreNumber;
            return "Computer";
        }
    }
}