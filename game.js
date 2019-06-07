//randomly select a word from the word constructor/ array
// sample syntax: tv.findShow(term) name of contructor variable and method, passing along the data
//inquirer prompt asks user to guess a letter
//inquirer sends the response (somewhere?)
//determination of whether or not the user was correct

//-----GLOBAL VARIABLES-----//
var inquirer = require("inquirer");
var words = ["happy", "cloudy", "stuffy nose", "programmer"];
var correctGuess = []; // push letters into this array if correct
var guessedAnswers = []; //push letters into this array for guessed answers
var totalGuesses = 0;

//-----SELECT WORD-----//
function select() {

    //selects words from array and splits the word into an array
    //use the read file function in here in the future
    var finalSelection = words[Math.floor(Math.random() * words.length)].split("");
    // console.log(finalSelection);
    //sending to the function that leverages inquirer
    askLetter(finalSelection);
};

//---START INQUIERER--//

function askLetter(finalSelection, totalGuesses) {

    inquirer
        .prompt([
            {
                type: "input",
                message: "Let's play! Type in a letter",
                name: "letter",

            }
        ]).then(function (answers) {
            var recentGuess = answers.letter;
            console.log("You submitted the following: " + recentGuess);

            //push guessed answers into array
            guessedAnswers.push(recentGuess);
            console.log("------------------------------------------------------")
            console.log("Here's what you've guessed so far " + guessedAnswers)

            //establish total guesses
            totalGuesses = finalSelection.length + 5;
            console.log("------------------------------------------------------")
            console.log("Let's get started! \nGuesses remaining: " + totalGuesses);

            //determine if the letter is right or wrong, sending word, guessed array and their selection
            correct(finalSelection, guessedAnswers, recentGuess, totalGuesses);

            //this.method(answers)

        })
};

function correct(finalSelection, userAnswer, recentGuess, totalGuesses) {
    // console.log(userAnswer, recentGuess);

    for (var j = 0; j < finalSelection.length; j++) {

        //if the guess is in the length of the word and already in the correct guess array
        if ((recentGuess === finalSelection[j]) && (correctGuess.indexOf(recentGuess) === -1)) {
            correctGuess.push(recentGuess);
            console.log("------------------------------------------------------")
            console.log("Your correct guesses " + correctGuess);
            console.log("------------------------------------------------------")
        }
    }
    rebuildView(finalSelection, correctGuess, recentGuess, totalGuesses);
};

function rebuildView(finalSelection, correctGuess, recentGuess, totalGuesses) {
    var userViews = "";

    if (finalSelection.indexOf(recentGuess) !== -1) {
        console.log("Congratulations! That is CORRECT!");
        askLetter(finalSelection);
    }
    else {
        console.log("Yikes, NOT CORRECT.")
        totalGuesses--;
        console.log("Guesses left " + totalGuesses);

        if (totalGuesses === 0) {
            end();
        }
        else {
            askLetter(finalSelection, totalGuesses);
        }
    }

    for (var i = 0; i < finalSelection.length; i++) {

        //if the letter is in correct guesses, reveal the letter or the underscore
        if (correctGuess.indexOf(finalSelection[i]) !== -1) {
            userViews += finalSelection[i]
        }
        else {
            userViews += " _ ";
        }
    };

    console.log(userViews);

};

//-----JAVASCRIPT START READING HERE-----//
select();

function resetGame() {
    var underscores = "";
    var correctGuess = [];
    var guessedAnswers = [];
    select();
};

function end() {
    console.log("Thank you for playing.")
}



