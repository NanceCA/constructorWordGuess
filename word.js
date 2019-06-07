//-----COMPARE ANSWER-----//

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

module.exports = correct;
module.exports = rebuildView;
