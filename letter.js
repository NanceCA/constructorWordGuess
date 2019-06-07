//-----START INQUIERER-----//
var inquirer = require("inquirer");
var correct = require("./word");
var guessedAnswers = []; //push letters into this array for guessed answers

function askLetter(finalSelection, totalGuesses) {
    console.log("hi")

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
            // totalGuesses = finalSelection.length + 5;
            console.log("------------------------------------------------------")
            console.log("Let's get started! \nGuesses remaining: " + totalGuesses);

            //determine if the letter is right or wrong, sending word, guessed array and their selection
            correct(finalSelection, guessedAnswers, recentGuess, totalGuesses);

            //this.method(answers)

        })
};

module.exports = askLetter;
