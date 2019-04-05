'use strict';

//-----------------------------------------------------------------------------
// Opening Alerts
//-----------------------------------------------------------------------------
alert('Why hello there! What is your name?');

var userName = prompt('First, What is your name?');
var correctAnswers = 0;

var doYouKnowJon = confirm('Do you think know Jon Rice?');
if(doYouKnowJon) {
  alert('We will see about that....');
}
else {
  alert('Bye. You are missing out');//Jon - If user has this answer make complete break of code and dont go on to below
}
if(doYouKnowJon) {
  alert('Please answer the following questions Yes or No');
}
//-----------------------------------------------------------------------------
// Question 1 Growing Up
//-----------------------------------------------------------------------------
var grewUpAnswer = prompt('Did Jon grow up in Ohio?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//grewUpAnswer = grewUpAnswer.toLowerCase();
if(grewUpAnswer === 'yes') {
  alert('Correct! Good thing we are starting with the basics');
  correctAnswers++;
} else if(grewUpAnswer === 'no') {
  alert ('Inncorrect? I thought you said you knew Jon...');
} else {
  alert('Please enter EITHER Yes or No');
}
console.log('User answer for where Jon grew up:', grewUpAnswer);
//-----------------------------------------------------------------------------
// Question 2 Profession
//-----------------------------------------------------------------------------
var professionAnswer = prompt('Did Jon want to be a Ortopedic Surgon?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//professionAnswer = professionAnswer.toLowerCase();
if(professionAnswer === 'yes') {
  alert('Correct! Huh there might be hope for you yet');
  correctAnswers++;
} else if(professionAnswer === 'no') {
  alert ('Inncorrect? I thought you said you knew Jon...');
} else {
  alert('Please enter EITHER Yes or No');
}
console.log('User answer for what Jon wanted to be:', professionAnswer);
//-----------------------------------------------------------------------------
// Question 3 Siblings
//-----------------------------------------------------------------------------
var siblingsNumberAnswer = prompt('Does Jon have more than one sibling?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//siblingsNumberAnswer= siblingsNumberAnswer.toLowerCase();
if(siblingsNumberAnswer === 'yes') {
  alert('Inncorrect? It is obvious he only has a younger sister');
} else if(siblingsNumberAnswer === 'no') {
  alert ('Correct! Childs play really..');
  correctAnswers++;
} else {
  alert('Please enter EITHER Yes or No');
}
console.log('User answer for how many siblings Jon has:', siblingsNumberAnswer);
//-----------------------------------------------------------------------------
// Question 4 Yoyoing
//-----------------------------------------------------------------------------
var yoyoingAnswer = prompt('Has Jon been Yoyoing for over 15 years?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//yoyoingAnswer = yoyoingAnswer.toLowerCase();
if(yoyoingAnswer === 'yes') {
  alert('Correct! Wow...yup.....that happened');
  correctAnswers++;
} else if(yoyoingAnswer === 'no') {
  alert ('Inncorrect? Where have you been?');
} else {
  alert('Please enter EITHER Yes or No');
}
console.log('User answer to how long Jon has been Yoyoing:', yoyoingAnswer);
//-----------------------------------------------------------------------------
// Question 5 Marathons
//-----------------------------------------------------------------------------
var marathonsAnswer = prompt('Has Jon run a marathon within 3 hours?').toLowerCase();
//can follow with .toLowerCase() or .toUpperCase() elimnating following line
//marathonsAnswer= marathonsAnswer.toLowerCase();
if(marathonsAnswer === 'yes') {
  alert('Inncorrect? He is not THAT crazy!');
} else if(marathonsAnswer === 'no') {
  alert ('Correct! So many miles so little time.');
  correctAnswers++;
} else {
  alert('Please enter EITHER Yes or No');
}
console.log('User answer to how fast Jon has run a marathon:', marathonsAnswer);
//-----------------------------------------------------------------------------
// Question 6 How many states
//-----------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------
// Question 7 What states lived in
//-----------------------------------------------------------------------------
/* var validStatesLivedInNameAnswer = ['ohio','arizona'];
var guessNumberLeftStateName = 6;
var answerFound = false;
while(guessNumberLeftStateName > 0) {
    var statesLivedInNameAnswer = prompt('Which states has Jon lived in beside Washington?').toLowerCase();
    guessNumberLeftStateName--;
    if(statesLivedInNameAnswer == validStatesLivedInNameAnswer[0] || statesLivedInNameAnswer == validStatesLivedInNameAnswer[1]){
        answerFound = true;
        alert('Correct!');
        break;
    } else {
        alert('Sorry. Try again you have ' + guessNumberLeftStateName + ' guesses left.');
    }
}
*/
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
      alert('He has also lived in Arizona');
    } else {
      alert('HE has also lived in Ohio');
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
/*if (validStatesLivedInNameAnswer == 0) {
    alert('He has also lived in Arizona');

   }   else {
    alert('He has also lived in Ohio');
}*/
//Following borrowed from https://raw.githubusercontent.com/ravewillow6383/lab02/master/js/app.js
console.log('checking correct answers math:' , correctAnswers);

if(correctAnswers < 4){
  alert('Hum, ' + userName + ', looks like you got ' + correctAnswers + ' out of 7. Spend sometime here and see if you can do better.');
}

if(correctAnswers > 4 && correctAnswers < 7){
  alert('Ok ' + userName + ' you got' + correctAnswers + ' out of 7. Stick around to see if you can up that knowledge');
}

if(correctAnswers === 7){
  alert('WOW, ' + userName + '! 7/7 Niiiiiiiiccccccceeeeeeee');
}
