var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

// we need to track player score, comp score and draws

// we need a way of displaying the score

// when a player wins we need to add a point to the player scrore 
// when comp wins add point to player score 

// show new score







function newGame(playerMove) {
    // use prompt to pick input from the user r,p or s. Store in variable called playerName
console.log("Player selects " + playerMove); //display player choice

var cpuMove = generateComputerMove();

showComputerMove("Computer chooses: " + cpuMove)

/// create a function to showMessage (change id "results" to our message)
// pass in our message when its called

// create a function that shows cpu move in web browser
// we can use show message function
// chris added a 2nd parameter for ID 
// then called it in generate CPU move function
// call

if (playerMove === cpuMove) {
    showWinner("it's a draw");
    drawScore++;
    //var winner = document.getElementById("header");
    //winner.innerText = "it's a draw"
    } else if (playerMove === "rock") {
        if (cpuMove == "paper") {
    showWinner("cpu wins");
    computerScore++;
    //winner = document.getElementById("header");
    //winner.innerText = "CPU Wins"
        } else if (cpuMove === "scissors") {
    //       winner = document.getElementById("header");
    //        winner.innerText = "Player Wins"
    showWinner("player wins");
    playerScore++;
        }   
    } else if (playerMove === "scissors") {
        if (cpuMove === "rock") {
    //        winner = document.getElementById("header");
    //        winner.innerText = "CPU Wins"
    showWinner("cpu wins");
    computerScore++;
        } else if (cpuMove === "paper") {
    //        winner = document.getElementById("header");
    //        winner.innerText = "Player Wins"
    showWinner("player wins");
    playerScore++;
        }
    } else if (playerMove === "paper") {
        if (cpuMove === "scissors") {
    //        winner = document.getElementById("header");
    //        winner.innerText = "CPU Wins"
    showWinner("cpu wins")
    computerScore++;
        } else if (cpuMove === "rock") {
    //        winner = document.getElementById("header");
    //        winner.innerText = "Player Wins"
    showWinner("player wins")
    playerScore++;
        }
    } 

    document.getElementById('wins').innerText = "Player score: " + playerScore;
    document.getElementById('losses').innerText = "Computer score: " + computerScore;
    document.getElementById('draws').innerText = "Draws: " + drawScore;
}

function generateComputerMove() {
    var randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "scissors";
    } else {
        return "paper";
    }
}

function showMessage(message, id) {
    var resultElement = document.getElementById(id);
    resultElement.innerText = message;
} 

function showWinner(message) {
    var resultElement = document.getElementById("results");
    resultElement.innerText = message;
}

function showComputerMove(message) {
    var resultElement = document.getElementById("cpu-choice");
    resultElement.innerText = message;
}



document.getElementById("rock").addEventListener("click", playRock)
document.getElementById("paper").addEventListener("click", playPaper)
document.getElementById("scissors").addEventListener("click", playScissors)

function playRock() {
    newGame("rock");
    var playerChoice = document.getElementById("player-choice");
    playerChoice.innerText = "Player chooses: Rock"
}

function playPaper() {
    newGame("paper");
    var playerChoice = document.getElementById("player-choice");
    playerChoice.innerText = "Player chooses: Paper"
}

function playScissors() {
    newGame("scissors");
    var playerChoice = document.getElementById("player-choice");
    playerChoice.innerText = "Player chooses: Scissors"
}



//function checkWinner() {
    // ........ 
    // if player wins     
    //return playerScore += 1
    // else if 
    //return computerScore += 1
//}









//1)
//create 3 event listeners that wait for one of the 3 buttons to be clicked
//these event listeneners call the functions, playRock, playPaper or playScissors
/*document.getElementById("rock").addEventListener('click', playRock);
document.getElementById("paper").addEventListener('click', playPaper);
document.getElementById("rock").addEventListener('click', playScissors);

//2)
//create functions that are called when you click on of the 3 choices
//the new play functions should call newGame with the argument a string rock, paper or scissors. This will run the check game function.
function playRock() {
    newGame("rock");
    var playerChoice = document.getElementById("player-choice");
    playerChoice.innerText = "Player chooses: Rock"
}
function playPaper() {
    newGame('paper');  
    var playerChoice = document.getElementById("player-choice");
    playerChoice.innerText = "Player chooses: Paper" 
}
function playScissors() {
    newGame('scissors');
    var playerChoice = document.getElementById("player-choice");
    playerChoice.innerText = "Player chooses: Scissors"
}*/

//3)
// when playerMove is comeplete, display player choice in the ui
// use id of player-choice to select the id, use inner text function to change it 

//4) 
// After winner is determined, display winner on webpage using inner text and h1. optimize by storing it in a function that is called when a winner is determined?
// determine who is the winner, using a function assign a variable a,b and subtract? if positive then player 1 if 0 then draw if - 1 then cpu


//5) display CPU choice on the UI using DOM manipulation etc...

function displayCpu(randomNumber) {
    if (randomNumber === "rock") {
        var cpuDisplay = document.getElementById("cpu-choice");
        cpuDisplay.innerText = "CPU chooses: Rock";
     } else if (randomNumber === "paper") {
        var cpuDisplay = document.getElementById("cpu-choice");
        cpuDisplay.innerText = "CPU chooses: Paper";
    } else if (randomNumber === "scissors") {
        var cpuDisplay = document.getElementById("cpu-choice");
        cpuDisplay.innerText = "CPU chooses: Scissors";
    }
}


//6) add a scoring system
//    - write a score element into the HTML
//    - style with CSS
//    - use JS to addscore, possibly need a function to save the result of each event and then store it in a variable?