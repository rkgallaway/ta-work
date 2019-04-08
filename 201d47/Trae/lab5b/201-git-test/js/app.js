'use strict';

var questionButton = document.getElementById("questionQuiz");
questionButton.onclick = function (){
    questionGame();
}

function questionGame() {
    var ageGuess = prompt('Do you think I am younger than 30?').toLowerCase();

    if (ageGuess === "yes") {
        alert('Correct, Thank you!');
    } else {
        alert('Incorrect, Hm I guess it is the beard.');
    } console.log('Do you think I am younger than 30?' + ageGuess);


    var videoGameQuestion = prompt('Do you think I enjoy playing video games?').toLowerCase();

    if (videoGameQuestion === 'yes') {
        alert('Correct! Good guess, though I think that was a bit too easy.');
    } else {
        alert('Incorrect! Come on, that was easy!');
    } console.log('Do I like to play video games?' + videoGameQuestion);

    var petQuestion = prompt('Do you think I have pets?').toLowerCase();

    if (petQuestion === 'no') {
        alert('Correct! Unfortuantely, I do not have any animals right now :(');
    } else {
        alert('Incorrect! I wish I did!');
    } console.log('Do you think I have pets?' + petQuestion);

    var sportsGuess = prompt('Do you think I play sports?').toLowerCase();

    if (sportsGuess === 'no') {
        alert('Correct! If I played sports, I would not have enough time to game and code!');
    } else {
        alert('Incorrect! I am actually not very fond of sports.');
    } console.log('Do you think I play sports?' + sportsGuess);

    { alert('I will make the next one an easy one for you'); }

    var musicGuess = prompt('Do you think I enjoy coding?');

    if (musicGuess === 'yes') {
        alert('Correct! Of course you knew this!');
    } else {
        alert('Incorrect! Awhh come on! That was supposed to be obvious!');
    }
    console.log('Do i like rock music?' + musicGuess);

    alert("Okay, this time I'm going to ask you a question and you will have 4 attempts to guess correctly. Are you ready?");

    var favoriteNumber = prompt('What do you think my favorite number is from 1-10?');
    var numberGuessed = parseInt(favoriteNumber);
    var currentGuessAmount = 0;
    while (numberGuessed !== 2 && currentGuessAmount < 4) {
        alert('Incorrect! ');
        currentGuessAmount++;
        favoriteNumber = prompt('What do you think my favorite number is from 1-10?');
        numberGuessed = parseInt(favoriteNumber);
    }
    if (numberGuessed === 2) {
        alert('Correct! Good Guess!');
    } else {
        alert('Incorrect! ');
    }
    alert('Okay, so the next question there will be multiple coorect answers. I will give you 6 attempts. Ready?');

    var statesLivedIn = ['Missouri', 'Georgia', 'Kentucky'];
    var guessStates = prompt('Can you guess what states I have lived in besides Washington?');
    var guessedCorrectly = false;
    currentGuessAmount = 0;
    while (currentGuessAmount < 6 && !guessedCorrectly) {
        currentGuessAmount++;
        for (var i = 0; i < statesLivedIn.length; i++) {
            if (guessStates.toLowerCase() === statesLivedIn[i].toLowerCase()) {
                guessedCorrectly = true; alert('Correct! Solid Guess.');
                break;
            }
        }
        if (!guessedCorrectly) {
            alert('Incorrect!');
            guessStates = prompt('Can you guess what states I have lived in?');
        }
    }
}

