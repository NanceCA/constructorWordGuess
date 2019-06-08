//randomly select a word from the word constructor/ array
// sample syntax: tv.findShow(term) name of contructor variable and method, passing along the data
//inquirer prompt asks user to guess a letter
//inquirer sends the response (somewhere?)
//determination of whether or not the user was correct

//-----GLOBAL VARIABLES-----//

var askLetter = require("./letter.js");
var inquirer = require("inquirer");
var words = ["happy", "cloudy", "stuffy nose", "programmer"];
var game = new Game();


var correctGuess = []; // push letters into this array if correct
var finalSelection = []; //array to hold the randomly selected word
var totalGuesses = finalSelection.length + 5; //user guess quantity

function Game() {

    //-----SELECT WORD-----//
    this.select = function (totalGuesses) {
        //selects words from array and splits the word into an array
        //use the read file function in here in the future
        finalSelection = words[Math.floor(Math.random() * words.length)].split("");
        // console.log(finalSelection);
        //sending to the function that leverages inquirer
        askLetter(finalSelection, totalGuesses);
    }
};

//-----JAVASCRIPT START READING HERE-----//
game.select(totalGuesses);
// correct(finalSelection, guessedAnswers, recentGuess, totalGuesses);

//-----RESET GAME -----//

function resetGame() {
    var underscores = "";
    var correctGuess = [];
    var guessedAnswers = [];
    select();
};

//-----END GAME -----//
function end() {
    console.log("Thank you for playing.")
}



