var elements=['rock','paper','scissors'];
console.log(elements)

computerChoice =  Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} 
else {
	computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);



userChoice = Math.random();
if (userChoice < 0.34) {
	userChoice = "rock";
} 
else if(userChoice <= 0.67) {
	userChoice = "paper";
} 
else {
	userChoice = "scissors";
}
console.log("User: " + userChoice);



var compare = function(comp,user) {
    if (comp === user) {
        console.log("The result is a tie!");
    }
    else if (comp === "rock") {
        if (user === "scissors") {
            console.log( "Computer wins");
        }
        else {
            console.log( "User wins")
        }
    }     
    else if (comp === "paper") {
        if (user === "rock") {
            console.log( "Computer wins");
        }
        else {
            console.log( "User wins");
        }
    }
    else if (comp === "scissors") {
        if (user === "paper") {
            console.log( "Computer wins");
        }
        else {
            console.log( "User wins");
        }
    }
}
compare(computerChoice, userChoice);