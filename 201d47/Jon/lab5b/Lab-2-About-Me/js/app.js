'use strict';
//-----------------------------------------------------------------------------
// Opening Alerts
//-----------------------------------------------------------------------------
var correctAnswers = 0;
var userName; 
function welcome(){
    alert('Why hello there! Lets play a game!!');

userName = prompt('First, What is your name?');

var doYouKnowJon = confirm("Do you think you know Jon Rice?");
if(doYouKnowJon) {
    alert('We will see about that....');
}
    else {
    alert('Bye. You are missing out');
    }

    alert('Please answer the following questions Yes or No');
}
//-----------------------------------------------------------------------------
// Question 1 Growing Up
//-----------------------------------------------------------------------------
function growUp(){
 var vaildAnswer = false;
while(!vaildAnswer)  {
    var grewUpAnswer = prompt('Did Jon grow up in Ohio?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//grewUpAnswer = grewUpAnswer.toLowerCase();
if(grewUpAnswer === 'yes') {
    alert('Correct! Good thing we are starting with the basics');
    correctAnswers++;
    vaildAnswer = true;
}   else if(grewUpAnswer === 'no') {
    alert ('Inncorrect? I thought you said you knew Jon...');
    vaildAnswer = true;
}   else {
    alert('Please enter EITHER Yes or No');
}
console.log('User answer for where Jon grew up:', grewUpAnswer);
}
}
//-----------------------------------------------------------------------------
// Question 2 Profession
//-----------------------------------------------------------------------------
function profession(){
var vaildAnswer = false;
while(!vaildAnswer)  {
    var professionAnswer = prompt('Did Jon want to be a Orthopedic Surgon?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//professionAnswer = professionAnswer.toLowerCase();
if(professionAnswer === 'yes') {
    alert('Correct! Huh there might be hope for you yet');
    correctAnswers++;
    vaildAnswer = true;
}   else if(professionAnswer === 'no') {
    alert ('Inncorrect? I thought you said you knew Jon...');
    vaildAnswer = true;
}   else {
    alert('Please enter EITHER Yes or No');
}
console.log('User answer for what Jon wanted to be:', professionAnswer);
}
}
//-----------------------------------------------------------------------------
// Question 3 Siblings
//-----------------------------------------------------------------------------
function siblings(){
 var vaildAnswer = false;
 while(!vaildAnswer)  {
    var siblingsNumberAnswer = prompt('Does Jon have more than one sibling?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//siblingsNumberAnswer= siblingsNumberAnswer.toLowerCase();
if(siblingsNumberAnswer === 'yes') {
    alert('Inncorrect? It is obvious he only has a younger sister');
    vaildAnswer = true;
}   else if(siblingsNumberAnswer === 'no') {
    alert ('Correct! Childs play really..');
    correctAnswers++;
    vaildAnswer = true;
}   else {
    alert('Please enter EITHER Yes or No');
}
console.log('User answer for how many siblings Jon has:', siblingsNumberAnswer)
}
}
//-----------------------------------------------------------------------------
// Question 4 Yoyoing
//-----------------------------------------------------------------------------
function yoyoing(){
    var vaildAnswer = false;
    while(!vaildAnswer)  {
    var yoyoingAnswer = prompt('Has Jon been Yoyoing for over 15 years?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//yoyoingAnswer = yoyoingAnswer.toLowerCase();
if(yoyoingAnswer === 'yes') {
    alert('Correct! Wow...yup.....that happened');
    correctAnswers++;
    vaildAnswer = true;
}   else if(yoyoingAnswer === 'no') {
    alert ('Inncorrect? Where have you been?');
    vaildAnswer = true;
}   else {
    alert('Please enter EITHER Yes or No');
}
console.log('User answer to how long Jon has been Yoyoing:', yoyoingAnswer)
}
}
//-----------------------------------------------------------------------------
// Question 5 Marathons
//-----------------------------------------------------------------------------
function marathon(){
var vaildAnswer = false;
  while(!vaildAnswer)  {
  var marathonsAnswer = prompt('Has Jon run a marathon within 3 hours?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//marathonsAnswer= marathonsAnswer.toLowerCase();
if(marathonsAnswer === 'yes') {
    alert('Inncorrect? He is not THAT crazy!');
    vaildAnswer = true;
}   else if(marathonsAnswer === 'no') {
    alert ('Correct! So many miles so little time.');
    correctAnswers++;
    vaildAnswer = true;
}   else {
    alert('Please enter EITHER Yes or No');
}
}
console.log('User answer to how fast Jon has run a marathon:', marathonsAnswer)
}
//-----------------------------------------------------------------------------
// Question 6 How many states
//-----------------------------------------------------------------------------
function numberOfStates(){
var numberOfGuessesLeft = 4;
while(numberOfGuessesLeft > 0 && correctNumberOfStates !== 3){
    var correctNumberOfStates = Number(prompt('How many states has Jon lived in?'));
    numberOfGuessesLeft--;
   if(correctNumberOfStates === 3) {
        alert('Correct!');
        correctAnswers++;
   }
    else if(correctNumberOfStates > 3){
        alert('Sorry that is too high you have ' + numberOfGuessesLeft + ' left');
    }
        else {
        alert('Sorry that is too low you have ' + numberOfGuessesLeft + ' left');
    }
}
}
//-----------------------------------------------------------------------------
// Question 7 What states lived in
//-----------------------------------------------------------------------------
function nameOfStates(){
var validStatesLivedInNameAnswer = ['ohio','arizona'];
var guessNumberLeftStateName = 6;
var answerFound = false;
/*while(guessNumberLeftStateName > 0) {
    var statesLivedInNameAnswer = prompt('Which states has Jon lived in beside Washington?').toLowerCase();
    guessNumberLeftStateName--;
    if(statesLivedInNameAnswer == validStatesLivedInNameAnswer[0] || statesLivedInNameAnswer == validStatesLivedInNameAnswer[1]){
        answerFound = true;
        alert('Correct!');
        break;
    } else {
        alert('Sorry. Try again you have ' + guessNumberLeftStateName + ' guesses left.');
    }
}*/
var validStatesLivedInNameAnswer = ['ohio','arizona'];
var guessNumberLeftStateName = 6;
var answerFound = false;
while(guessNumberLeftStateName > 0) {
    var statesLivedInNameAnswer = prompt('Which states has Jon lived in beside Washington?').toLowerCase();
    guessNumberLeftStateName--;
    for (var i = 0; i <= validStatesLivedInNameAnswer.length; i++) {
        if (statesLivedInNameAnswer === validStatesLivedInNameAnswer[i]) {
            answerFound = true;
            break; 
        }
    }
    if (answerFound) {
        alert('Correct!');
        correctAnswers++;
            if (statesLivedInNameAnswer === validStatesLivedInNameAnswer[0]){
                alert('He has also lived in Arizona')
            } else {
                alert('HE has also lived in Ohio')
            }
        break;
    } else {
        if (guessNumberLeftStateName == 0) { break; }
        alert('Sorry. Try again you have ' + guessNumberLeftStateName + ' guesses left.');
    }
}
if (!answerFound){
    alert('Sorry -- you didn\'t guess correctly.');
}
}
//Following borrowed from https://raw.githubusercontent.com/ravewillow6383/lab02/master/js/app.js
function rightAnswers(){
if(correctAnswers < 4){
  alert('Hum, ' + userName + ', looks like you got ' + correctAnswers + ' out of 7. Spend sometime here and see if you can do better.');
}

if(correctAnswers > 4 && correctAnswers < 7){
  alert('Ok ' + userName + ' you got' + correctAnswers + ' out of 7. Stick around to see if you can up that knowledge');
}

if(correctAnswers === 7){
  alert('WOW, ' + userName + '! 7/7 Niiiiiiiiccccccceeeeeeee');
}
}
welcome();
growUp();
profession();
siblings();
yoyoing();
marathon();
numberOfStates();
nameOfStates();
rightAnswers();