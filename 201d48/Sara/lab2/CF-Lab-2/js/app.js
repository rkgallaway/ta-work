
//5 Questions 

var userName = prompt('Hi, what is your name?');
        alert('Welcome, ' + userName + '! Let\'s play a guessing game!');
        console.log('The user said their name is ' + userName);

function questionOne(){
var answerPizza = prompt('Do I like pizza?').toLowerCase();
    if (answerPizza === 'no' || answerPizza === 'n') {
        alert('You are incorrect, ' + userName + '! I love pizza!');
        console.log('The user got the incorrect answer to #1');
    } else {
        alert('I love pizza! Especially pepperoni pizza!');
        console.log('The user got the correct answer to #1');
    }
}
questionOne();

function questionTwo(){
var userJoe = prompt('Should I have more coffee today?').toLowerCase();
    if (userJoe === 'yes' || userJoe === 'y') {
        alert('Absolutely! Hot coffee coming up!');
        console.log('The user got the correct answer to #2');
    } else {
        alert('Maybe just one more cup...');
        console.log('The user got the incorrect answer to #2');
    }
}
questionTwo();

function questionThree(){
var answerPets = prompt('Do I have a dog?').toLowerCase();
    if (answerPets === 'no' || answerPets ==='n') {
        alert('You are incorrect ' + userName + '! I have a dog!');
        console.log('The user got the incorrect answer to #3');
    } else {
        alert('Yes! My dog is named Douglas. He is a Papillon, King Charles, Chihuahua!');
        console.log('The user got the correct answer to #3');
    }
}
questionThree();

function questionFour(){
var answerSports = prompt('Is my favorite football team the Seahawks?').toLowerCase();
    if (answerSports === 'yes' || answerSports ==='y') {
        alert('Go HAWKS!');
        console.log('The user got the correct answer to #4');
    } else {
        alert('No way ' + userName + '!');
        console.log('The user got the incorrect answer to #4');
    }
}
questionFour();

/////////////////////////////////////////////////////////

//Question 5
function questionFive(){
var answerGames = prompt('Do I like to play board games?').toLowerCase();
    if (answerGames === "yes" || answerGames === 'y') {
        alert('Absolutely ' + userName + '!' + ' Let\'s have a game night!');
        console.log('The user got the correct answer to #5');  
    } else {
        alert('Who doesn\'t love a good game night?');
        console.log('The user got the incorrect answer for #5');

    }
}
questionFive();
///////////////////////////////////////////////////////////
//Question 6

function questionSix(){
var attemptTry = 4;
while(attemptTry > 0 && guessNum != 3) {
    var guessNum = prompt('How many nephews do I have?');
    attemptTry--;

    if(guessNum == 3) {
        alert('You got it ' + userName + '!');  
        console.log('user answered question 6 correctly');
    } else if (guessNum > 3) {
        alert('Too high!'); 
        console.log('user guess is too high');
    } else if (guessNum < 3) {
        alert('Too low!');
        console.log('user guess is too low');
    } 
    if (attemptTry === 0) {
        alert('Whoops! ' + userName + ' you are out of trys!');
        console.log('user ran out of attempts');
    }
}
}
questionSix();

/////////////////////////////////////////////////////////////////
//Question 7

var attemptSports = 6;
var correctResponse = 0; 
var sportsList = ['basketball', 'football', 'volleyball', 'swimming', 'tennis', 'soccer'];

function questionSeven(){
while(attemptSports > 0)  {
var guessSports = prompt('What at my favorite sports?').toLowerCase();
        console.log(sportsList);
        attemptSports--;

    if (sportsList.indexOf(guessSports) >= 0) {
         alert('Nice job! I like it!');
        correctResponse++;
        console.log('user guessed the correct sports');
        break;
    

    } else if (sportsList.indexOf(guessSports) < 0) {
        alert('That is fun but not my favorite.');
        console.log('user was incorrect');
    }

    if (attemptSports === 0) {
        alert('Whoops! ' + userName + ' you are out of trys');
        console.log('user ran out of attempts');
        break;
    }
}
}
questionSeven();

    
    alert('You answered ' + correctResponse + ' out of 6 ' + userName + '!');
    
    

    