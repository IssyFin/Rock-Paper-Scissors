//Play Game: A function that will play 5 rounds of a game and report the winner
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){//loop once
        let userChoice = prompt("Rock, Paper, or Scissors? Type your answer in the console!").toLowerCase();
        while((userChoice != "paper")&&(userChoice!="rock")&&(userChoice!="scissors")){
            console.log(`User choice is ${userChoice}`)
            userChoice = prompt("Please add a valid input: Rock, Paper, or Scissors").toLowerCase();
        }
        let computerChoice = computerPlay();
        let victor = playARound(userChoice,computerChoice);
        if (victor=="Computer"){
            console.log("The computer won this round!");
            computerScore++;
        }
        else if(victor=="Player"){
            console.log("You won this round!");
            playerScore++;
        }
        else{
            console.log("This round was a tie!");
        }
    }
    console.log(`The final score was: \n Player: ${playerScore} \n Computer: ${computerScore}`);
    if(playerScore == computerScore){
        console.log('The game was a tie!');
    }
    else if(playerScore > computerScore){
        console.log('You win!');
    }
    else{
        console.log('The computer wins; better luck next time!');
    }
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
        console.log("It's a draw! Great minds think alike :)")
        return "It's a draw! Great minds think alike :)";
    }
    else if(userMove == "paper"){
        if(computerMove == "rock"){
            console.log("Paper beats rock: you win!");
            return "Player";
        }
        else{
            console.log("Scissors beat paper: you lose.");
            return "Computer.";
        }
    }
    else if(userMove == "rock"){
        if(computerMove == "scissors"){
            console.log("Rock beats scissors: you win!");
            return "Player";
        }
        else{
            console.log("Paper beats rock: you lose.");
            return "Computer";
        }
    }
    else{
        if(computerMove == "paper"){
            console.log("Scissors beat paper: you win!");
            return "Player";
        }
        else{
            console.log("Rock beats scissors: you lose.");
            return "Computer";
        }
    }
}