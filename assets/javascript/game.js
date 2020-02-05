$(window).bind("load", function() {
console.log("you are linked")
//  var r = "Rock"
//  var p = "Paper"
//  var s = "scissors"
var name = $("#name-imput").text("")
     // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
     var computerChoices = ["Rock", "Paper", "Scissors"];
     
     // Creating variables to hold the number of wins, losses, and ties. They start at 0.
     var wins = 0;
     var losses = 0;
     var ties = 0;
 
     // Create variables that hold references to the places in the HTML where we want to display things.
     var directionsText = document.getElementById("directions-text");
     var userChoiceText = document.getElementById("userchoice-text");
     var computerChoiceText = document.getElementById("computerchoice-text");
     var winsText = document.getElementById("wins-text");
     var lossesText = document.getElementById("losses-text");
     var tiesText = document.getElementById("ties-text");
 
     // This function is run whenever the user presses a key.
     $("#btn-group").on('click', function() {
        event.preventDefault();
 
       // Determines which key was pressed.
       var userGuess =[
        (document.getElementById('r').onclick = "Rock"),
        (document.getElementById('p').onclick = "Paper"),
        (document.getElementById('s').onclick = "Scissors"),
       ];
 
       // Randomly chooses a choice from the options array. This is the Computer's guess.
       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 
       // Reworked our code from last step to use "else if" instead of lots of if statements.
 
       // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
       if ((userGuess === "Rock") || (userGuess === "Paper") || (userGuess === "Scissors")) {
 
         if ((userGuess === "Rock" && computerGuess === "Scissors") ||
           (userGuess === "Scissors" && computerGuess === "Paper") || 
           (userGuess === "Paper" && computerGuess === "Rock")) {
           wins++;
         } else if (userGuess === computerGuess) {
           ties++;
         } else {
           losses++;
         }
 
         // Hide the directions
         directionsText.textContent = "";
 
         // Display the user and computer guesses, and wins/losses/ties.
         userChoiceText.textContent =  name + "chose: " + userGuess;
         computerChoiceText.textContent = "The computer chose: " + computerGuess;
         winsText.textContent = "wins: " + wins;
         lossesText.textContent = "losses: " + losses;
         tiesText.textContent = "ties: " + ties;
       };
     });
    });