'use strict';

var userName = prompt('What is your name?');
var score = 0;

var answerOne = prompt('Is Africa the second largest continent?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y') {
  alert('you are correct '+ userName +', Africa is the second largest continent');
  console.log('The user got the correct answer for #1');
  score++;
} else {
  alert('you are incorrect '+ userName +', Africa is the second largest continent');
  console.log('The user got the wrong answer for #1');
}

var answerTwo = prompt('Is the Amazon the longest river').toLowerCase();
if(answerTwo === 'no' || answerTwo === 'n') {
  alert('you are correct '+ userName +', the Nile is the longest river');
  console.log('The user got the correct answer for #2');
  score++;
} else {
  alert('you are incorrect '+ userName +', the Nile is the longest river');
  console.log('The user got the wrong answer for #2');
}

var answerThree = prompt('Is Mt Everest the tallest mountain?').toLowerCase();
if(answerThree === 'yes' || answerThree === 'y') {
  alert('you are correct '+ userName +', Mt Everest the tallest mountain');
  console.log('The user got the correct answer for #3');
  score++;
} else {
  alert('you are incorrect '+ userName +', Mt Everest the tallest mountain');
  console.log('The user got the wrong answer for #3');
}

var answerFour = prompt('Is the US the 3rd largest Countries').toLowerCase();
if(answerFour === 'no' || answerFour === 'n') {
  alert('you are correct '+ userName +', the US is the 4th largest countries');
  console.log('The user got the correct answer for #4');
  score++;
} else {
  alert('you are incorrect '+ userName +', the Us is the 4th largest countries');
  console.log('The user got the wrong answer for #4');
}

var answerFive = prompt('Is the Atlantic the biggest ocean?').toLowerCase();
if(answerFive === 'no' || answerFive === 'n') {
  alert('you are correct '+ userName +', the Atlantic is the second largest Ocean');
  console.log('The user got the correct answer for #5');
  score++;
} else {
  alert('you are incorrect '+ userName +', the Atlantic is the second largest Ocean');
  console.log('The user got the wrong answer for #5');
}



var randomNumber = Math.floor(Math.random() * 10);
console.log('random number ' + randomNumber);

var tries = 0;
while (tries < 4){
  var answerSix = prompt('Guess the magic number that will be between 0-10');
  answerSix =parseInt(answerSix);
  if(answerSix === randomNumber) {
    alert('You Got It!');
    tries += 4;
    console.log('tries ' + tries);
    score++;
  }else if (answerSix < randomNumber){
    alert('No Dice! The magic number is higher. You have '+ (3 - tries) +' tries left');
    tries ++;
    console.log('tries ' + tries);
  }else {
    alert('No Dice! The magic number is lower. You have '+ (3 - tries) +' tries left');
    tries ++;
    console.log('tries ' + tries);
  }
}

tries = 0;
while (tries < 6){
  var isCorrect = false;
  var answerSeven = prompt('Guess a European countries I have been to.').toLowerCase();
  console.log('User Answer for #7, tries # '+ (tries + 1) + ' ' + answerSeven);

  var visitedCountries = ['england', 'germany', 'spain', 'netherlands', 'italy', 'france'];

  for(var i = 0; i < visitedCountries.length; i++){
    if (answerSeven === visitedCountries[i]){
      alert('You Got It!');
      tries += 6;
      console.log('tries ' + tries);
      score++;
      isCorrect = true;
      break;
    }
  }
  if(!isCorrect){
    alert('No I have not been to ' + answerSeven + ' you have ' + (5-tries) + ' tries left');
    tries ++;
    console.log('tries ' + tries);
  }
}
if(tries === 1){
  alert('Uh... no I havent been to any of those places. Are you even trying? I have been to England, Germany, Spain, The Netherlands, Italy, and Spain');
  console.log('tries ' + tries);
}else {
  alert('Correct! I have been to England, Germany, Spain, The Netherlands, Italy, and Spain.');
  console.log('tries ' + tries);
}

if (score > 5){
  alert('Good work ' + userName + '! You got ' + score + ' out of 7 answers correct.');
}else {
  alert('Well ' + userName + ', I would say I am supprised that you only got ' + score + ' out of 7 answers correct, but that would be a lie.');
}

document.getElementById('score').innerHTML = 'Your Score: ' + score + ' out of 7';
