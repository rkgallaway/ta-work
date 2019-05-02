'use strict';

var correctResponses = 0;

var answerOne = prompt('Am I 99 years old?').toLowerCase();

if (answerOne === 'no' || answerOne === 'n') {
  alert('You are correct! I am not 99 years old!');
  correctResponses++;
  console.log('The user got the correct answer for #1');
} else {
  alert('You are wrong! I am not 99 years old!');
  console.log('The user got the wrong answer for #1');
}

var answerTwo = prompt('Am I from North Carolina?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are correct! I am from North Carolina!');
  correctResponses++;
  console.log('The user got the correct answer for #1');
} else {
  alert('You are wrong! I am from North Carolina!');
  console.log('The user got the wrong answer for #1');
}

var answerThree = prompt('Is my name Snickerdoodle?').toLowerCase();

if (answerThree === 'no' || answerThree === 'n') {
  alert('You are correct! my name is not Snickerdoodle!');
  correctResponses++;
  console.log('The user got the correct answer for #1');
} else {
  alert('You are wrong! My name is not Snickerdoodle!');
  console.log('The user got the wrong answer for #1');
}

var answerFour = prompt('Do I have three arms?').toLowerCase();

if (answerFour === 'no' || answerFour === 'n') {
  alert('You are correct! I only have two arms!');
  correctResponses++;
  console.log('The user got the correct answer for #1');
} else {
  alert('You are wrong! Sometimes I wish I had three arms!');
  console.log('The user got the wrong answer for #1');
}

var answerFive = prompt('Am I a cyclops?').toLowerCase();

if (answerFive === 'no' || answerFive === 'n') {
  alert('You are correct! No cyclops here!');
  correctResponses++;
  console.log('The user got the correct answer for #1');
} else {
  alert('You are wrong! What a goober you are!');
  console.log('The user got the wrong answer for #1');
}

var tries = 5;
var secretNumber = 17;


while (tries > 0 && answerSix !== secretNumber) {
  var answerSix = Number(prompt('What is my favorite number? Hint: it\'s a number between 0 and 20.'));
  console.log(answerSix);
  tries--;
  if (answerSix === secretNumber) {
    alert('Correct! You guessed my favorite number!');
    correctResponses++;
    console.log('The user guessed right.');
  } else if (answerSix > secretNumber) {
    alert('No! That is not my favorite number. Guess lower! You have ' + tries + ' tries left!');
    console.log('The user guessed too high.');
  } else if (answerSix < secretNumber) {
    alert('No! That is not my favorite number. Guess higher! You have ' + tries + ' tries left!');
    console.log('The user did not guess correctly and ran out of tries.');
  }
  if (tries === 0) {
    alert('You did not guess it right and you are out of tries!');
  }
}

var attempts = 6;
var cities = ['carthage', 'wilmington', 'leland', 'moon'];

while (attempts > 0) {
  var answerSeven = prompt('What other city have I lived in other than Seattle?').toLowerCase();
  console.log(answerSeven);
  attempts--;
  if (cities.indexOf(answerSeven) >= 0) {
    alert('Correct! I have lived in that city before! I have lived in: Carthage, Wilmington, Leland, Seattle, and the Moon! (Just kidding, not the moon!)');
    correctResponses++;
    console.log('The user guessed a correct city!');
    break;
  } else if (cities.indexOf(answerSeven) < 0) {
    alert('Nope! I have never lived there before.');
    console.log('The user did not guess correctly.');
  }
  if (attempts === 0) {
    alert('You have run out of tries. I have lived in: Carthage, Wilmington, Leland, Seattle, and the Moon! (Just kidding, not the moon!)');
    console.log('The user did not guess correctly and ran out of tries.');
    break;
  }
}

alert('You have gotten ' + correctResponses + ' questions correct out of 7!');







