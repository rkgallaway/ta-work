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

var answerFour = prompt('Is the US the 3rd largest Country').toLowerCase();
if(answerFour === 'no' || answerFour === 'n') {
  alert('you are correct '+ userName +', the US is the 4th largest country');
  console.log('The user got the correct answer for #4');
  score++;
} else {
  alert('you are incorrect '+ userName +', the Us is the 4th largest country');
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

var Try = 0;
while (Try < 4){
  var answerSix = prompt('Guess the magic number that will be between 0-10');
  if(answerSix == randomNumber) {
    alert('You Got It!');
    Try += 4;
    console.log('Try ' + Try);
    score++;
  }else if (answerSix < randomNumber){
    alert('No Dice! The magic number is higher. You have '+ (3 - Try) +' tries left');
    Try += 1;
    console.log('Try ' + Try);
  }else {
    alert('No Dice! The magic number is lower. You have '+ (3 - Try) +' tries left');
    Try += 1;
    console.log('Try ' + Try);
  }
}

var correctAnswer = 0;
Try = 0;
while (Try < 6){
  var answerSeven = prompt('Guess a European country I have been to.').toLowerCase();
  console.log('User Answer for #7, try # '+ (Try + 1) + ' ' + answerSeven);
  if(answerSeven === 'england' ||
    answerSeven === 'germany' ||
    answerSeven === 'spain' ||
    answerSeven === 'netherlands' ||
    answerSeven === 'italy' ||
    answerSeven === 'france') {
    alert('You Got It!');
    Try += 6;
    console.log('Try ' + Try);
    score++;

  }else {
    alert('No I have not been to ' + answerSeven + ' you have ' + (5-Try) + ' tries left');
    correctAnswer++;
    Try += 1;
    console.log('Try ' + Try);
  }
}
if(Try === 1){
  alert('Uh... no I havent been to any of those places. Are you even trying? I have been to England, Germany, Spain, The Netherlands, Italy, and Spain');
  console.log('Try ' + Try);
}else {
  alert('Correct! I have been to England, Germany, Spain, The Netherlands, Italy, and Spain.');
  console.log('Try ' + Try);
}

if (score > 5){
  alert('Good work ' + userName + '! You got ' + score + ' out of 7 answers correct.');
}else {
  alert('Well ' + userName + ', I would say I am supprised that you only got ' + score + ' out of 7 answers correct, but that would be a lie.');
}

document.getElementById('score').innerHTML = 'Your Score: ' + score + ' out of 7';
