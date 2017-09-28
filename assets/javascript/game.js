// js doc

//console.log("Hello I am a Psychic");
//console.log("I am 300 Years Old")
//console.log("2 + 3 = " + (2+3));
//console.log("This is from game.js");

// array of Alphabet choices
var psychicChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

// variables to hold wins, losses, guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = "";

// random selection from the options array - the psychic choice
var psychicNum = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

// this function is run whenever the user hits a key
document.onkeyup = function(event)
  {

    // which key was hit?
    var userGuess = event.key;

    // see console for the psychic's choice. I must guess at least once before seeing it though!
    console.log(psychicNum);

    // conditionals that determine outcomes
    // 26 letters of alphabet, lower case
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

      // winning situation
      if (userGuess === psychicNum) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = "";
        psychicNum = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
      }

      // losing situation
      else {
        guessesLeft--;
        guessesSoFar = guessesSoFar + "" + userGuess + "," ;

      // game over
        if (guessesLeft===0) {
          losses++;
          guessesLeft = 9;
          guessesSoFar = "";
          psychicNum = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
        }
      }
    }

    // variable that holds data in HTML
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessesSoFar + "</p>" ;

    // set div contents to string above
    document.querySelector("#game").innerHTML = html;

  } ;

