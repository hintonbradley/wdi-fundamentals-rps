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
        return "The result is a tie!";
    }
    else if (playerMove === "paper") {
        if (computerMove === "scissors") {
            return "Scissors wins!";
        }
        else {
            return "Paper wins!";
        }
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "Rock wins!";
        }
        else {
            return "Paper wins!";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            return "Rock wins!";
        }
        else {
            return "Scissors wins!";
        }
    }
    return winner;
}
getWinner(getPlayerMove(),getComputerMove());

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

