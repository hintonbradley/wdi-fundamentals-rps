////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    console.log("You chose ")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
    	console.log("The computer chose rock");
        return "rock";
    } else if (randomNumber < 0.66) {
    	console.log("The computer chose paper");
        return "paper";
    } else {
    	console.log("The computer chose scissors");
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */ move?move:getInput();
}  
    /*	
    switch (move) {
		case "rock":
			return "rock";
			break;
		case "paper":
			return = "paper";
			break;
		case "scissors":
			return = "scissors";
			break;
		case 0:
			console.log("I'm sorry you don't want to play.");
			break;
		default:
			return getInput();
			break;
	};
*/
/* or could possibly use code below in place of switch, but player would be able to input any word not just the three options allowed
	if (move === 'undefined' || move === 'null') {
		move = getInput();
	}
*/
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */move?move:randomPlay();
}   
/*    switch (move) {
		case "rock":
			return "rock";
			break;
		case "paper":
			return "paper";
			break;
		case "scissors":
			return "scissors";
			break;
		default:
			randomPlay();
			break;
	};
*/
/* or could possibly use code below in place of switch, but player would be able to input any word not just the three options allowed
	if (move === 'undefined' || move === 'null') {
		move = getInput();
	}
*/
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}

/* 
function playToFive(placeholder) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.*/
    /* YOUR CODE HERE */
/*       do {
            var newGame=getWinner(getPlayerMove(),getComputerMove());
            if (newGame ==="tie"){
                return "tie";
            }
            else {
                return "player";
            }
        }
    while (1>10);
}

playToFive();
*/

function playToFive(placeholder) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.*/
      /* YOUR CODE HERE */
      var newGame;
      while ((computerWins<5)&&(playerWins<5)) {
        newGame=getWinner(getPlayerMove(),getComputerMove());
        if (newGame === "computer") {
        computerWins=computerWins + 1;
       }
       else if (newGame === "player") {
           playerWins=playerWins + 1;
       }
       else {
           computerWins = computerWins;
           playerWins = playerWins;
       }
       console.log("Computer wins: " + computerWins);
       console.log("Player wins: " + playerWins);
    }
    var thanks = "Thanks for playing!";
    if (computerWins > playerWins) {
    	console.log("The computer beat you " + computerWins + " to " + playerWins + ". " + thanks);
    	}
    	else {
    	console.log("You beat the computer " + playerWins + " to " + computerWins + "! " + thanks);
    	}
    	
    
}
playToFive();
      
      
      
      
      
      
/*      
    while ((computerWins<5)&&(playerWins<5)) {
        newGame=getWinner(getPlayerMove(),getComputerMove());
        if (newGame = "computer") {
        computerWins=computerWins + 1;
       }
       else if (newGame = "player") {
           playerWins=playerWins + 1;
       }
       else {
           computerWins = computerWins;
           playerWins = playerWins;
       }
    }
}
playToFiveTwo();





/*
playToFive();
       
       do {
     statement(s)
} while (expression);
       
       
       
       
       
/*    
        if (placeholder==="Player") {
            playerWins += playerWins;
        }
        else if (placeholder==="Computer") {
            computerWins+=computerWins;
        }
        else {
            computerWins = computerWins;
            playerWins = playerWins;
        }
    getWinner(getPlayerMove(),getComputerMove());    
    }
}
*/