'use strict'
var correctAnswers = 0;
var intro = confirm('Quick get ready want to play guessing game? Only Answer with Y and N');

function myJob() {
    var usersAnswer = prompt('Did i work in the navy?').toUpperCase();
    if (usersAnswer === 'Y' || usersAnswer === "YES") {
        alert('Wrong Answer Sorry');
    }
    else if (usersAnswer === 'N' || usersAnswer === "NO") {
        alert('Good job you guessed right!');
        correctAnswers++;
    }
    else {
        alert('Sorry but you didnt follow my instructions please only answer with\
     Y and N.');
    }
    console.log('myJob', usersAnswer);
}

//What is my age question
function myAge() {
    var usersAnswer = prompt('Is my age 22').toUpperCase();
    if (usersAnswer === 'Y' || usersAnswer === 'YES') {
        alert('Good job you guessed right!');
        correctAnswers++;
    }
    else if (usersAnswer === 'N' || usersAnswer === "NO") {
        alert('Wrong Answer Sorry');
    }
    else {
        alert('Sorry but you didnt follow my instructions please only answer with\
            Y and N.');
    }
    console.log('myAge:', usersAnswer);
}
//Do i love tequila question
function myLoveForTequila() {
    var usersAnswers = prompt('Do i love tequila?').toUpperCase();
    if (usersAnswers === 'Y' || usersAnswers === 'YES') {
        alert("Of course who doesn't love tequila");
        correctAnswers++;
    }
    else if (usersAnswers === 'N' || usersAnswers === 'NO') {
        alert('Sorry to tell you but I do.');
    }
    else {
        alert('Sorry but you didnt follow my instructions please only answer with\
        Y and N.');
    }
    console.log('myLoveForTequila:', usersAnswers);
}
//Allergy question
function myAllergy() {
    var usersAnswers = prompt('Am I allergic to anything?').toUpperCase();
    if (usersAnswers === 'Y' || usersAnswers === 'YES') {
        alert('Correct im allergic to mosquitos');
        correctAnswers++;
    }
    else if (usersAnswers === 'N' || usersAnswers === 'NO') {
        alert('Incorrect im allergic to mosquitos');
    }
    else {
        alert('Sorry but you didnt follow my instructions please only answer with\
            Y and N.');
    }
    console.log('myAllergy:', usersAnswers);
}
// //Did i go to college question
function myEducation() {
    var UserAnswers = prompt('Did i go to college?').toUpperCase();
    if (UserAnswers === 'Y' || UserAnswers === 'YES') {
        alert('Correct but i dropped out.');
        correctAnswers++;
    }
    else if (UserAnswers === 'N' || UserAnswers === 'NO') {
        alert('Incorrect I did but i dropped out.');
    }
    else {
        alert('Sorry but you didnt follow my instructions please only answer with\
        Y and N.');
    }
    console.log('myEducation:', UserAnswers)
}
//Number guessing question six
function myNumberGuess() {
    var usersAnswer = 4;
    while (usersAnswer > 0 && usersNumber !== 7) {
        var usersNumber = Number(prompt('Guess a number between 1-10'));
        console.log('usersNumber:', usersNumber);
        usersAnswer--;
        if (usersNumber === 7) {
            alert('You guessed correct.');
            correctAnswers++;
        }
        else if (usersNumber > 7) {
            alert('Too High, you have ' + usersAnswer + ' guesses remaining.');
        }
        else if (usersNumber < 7) {
            alert('Too low, you have ' + usersAnswer + ' guesses remaining.');
        }
    }
}
//seventh question
function myHomeQuestion() {
    var usersAnswer = 6
    var myHome = ['PUERTO RICO', 'FLORIDA', 'GEORGIA', 'KOREA'];
    var yourGuessStatus = false;
    while (usersAnswer > 0 && !yourGuessStatus) {
        var yourGuess = prompt('Guess a place I haved lived in only name states or countrys.').toUpperCase();
        console.log(yourGuess);
        for (var i = 0; i < myHome.length; i++) {
            if (yourGuess === myHome[i]) {
                alert('You guessed correct.');
                yourGuessStatus = true;
                correctAnswers++;
            }
        }
        usersAnswer--;
        if (usersAnswer > 0 && !yourGuessStatus) {
            alert('Please try again you have ' + usersAnswer + ' tries left');
        }
        if (usersAnswer === 0) {
            alert('Your out of guesses.');
        }
    }
}
function allquestions() {
    myJob();
    myAge();
    myLoveForTequila();
    myAllergy();
    myEducation();
    myNumberGuess();
    myHomeQuestion();
}
allquestions();
alert('Congrats you got ' + correctAnswers + ' out of 7!')
console.log(correctAnswers);
// can you assign functions to items in an array