//Global variables
var computerWins = 0;
var userWins = 0;
var lastWinner = "none";
var thisWinner = "none";

//Link functions to events
document.getElementById('rock-btn').addEventListener("click", function() {
	runGame("rock");
});//finds and element on the page with the 
//ID of rock-btn and then adds an event listener for a click; on click, runs the rungame function w tha param of rock
document.getElementById('paper-btn').addEventListener("click", function() {
	runGame("paper");
});
document.getElementById('scissors-btn').addEventListener("click", function() {
	runGame("scissors");
});

//Functions

function runGame(userChoice) {
	var computerChoice = getComputerChoice();
	var results = determineWinner(userChoice, computerChoice);
	lastWinner = thisWinner;
	if(results == "user"){
		thisWinner = "user";
		userWins += 1;
	}else if(results == "computer"){
		thisWinner = "computer";
		computerWins += 1;
	}else{
		//do nothing, it's tied
	}
	var trashTalk = getTrashTalk(results, computerChoice, userChoice);
	updateUserInterface(trashTalk);
}

function getComputerChoice(){
	var rand = Math.random();
	if(rand < .333){
		return "rock";
	}else if(rand < .666){
		return "paper";
	}else{
		return "scissors";
	}
}
function determineWinner(userChoice, computerChoice){
	if ((userChoice == computerChoice)) {
		return "tie";
	}
	else if((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper")){
		return "user";
	}else {
		return "computer";
	}
}
function updateUserInterface(trashTalk){
	document.getElementById('user-score').innerHTML = userWins;
	document.getElementById('computer-score').innerHTML = computerWins;
	document.getElementById('trash-talk').innerHTML = trashTalk;
}
// results and lastWinner appear to be the same thing
function getTrashTalk(thisWinner, computerChoice, userChoice){
	var message;
	if(thisWinner == "tie"){
		message = "We both picked " + userChoice + ".<br><br>Get out of my head, Charles!!!"
	}else if(thisWinner == "user" && (lastWinner == "computer" || lastWinner == "none")){
		message = userChoice + " beats " + computerChoice + ". You win this time, I guess."
	}else if(thisWinner == "user" && lastWinner == "user"){
		message = userChoice + " beats " + computerChoice + "... again";
	}else if(thisWinner == "computer" && (lastWinner == "user" || lastWinner == "none")){
		message = computerChoice + " beats " + userChoice + ". Sucks to be you."
	}else if(thisWinner == "computer" && lastWinner == "computer"){
		message = computerChoice + " beats " + userChoice + "!!! I'm on a roll, baby!!!"
	}
	return message;
}