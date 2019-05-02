'use strict';
var userName = prompt('Hello, what\'s your name?');
console.log('The user said their name is ' + userName);

var correctAnswers = 0;

var answerOne = prompt('Hi ' + userName + '! Welcome to my guessing game! First question, have I ever lived in a foreign country?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct ' + userName + '! I studied abroad in Seoul, South Korea and lived in Sydney, Australia for 6 months!');
  correctAnswers++;
  console.log('The user got the correct answer for number 1');

} else if (answerOne === 'no' || answerOne === 'n') {
  alert('You are wrong ' + userName + '! I studied abroad in Seoul, South Korea and lived in Sydney, Australia for 6 months!');
  console.log('The user got the wrong answer for number 1');
} else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 1');
}

var answerTwo = prompt('Is pizza my favorite food?').toLowerCase();
if (answerTwo === 'no' || answerTwo === 'n') {
  alert('You are correct ' + userName + '! I would choose Thai, Korean, or Vietnamese food over pizza anyday.');
  correctAnswers++;
  console.log('The user got the correct answer for number 2');
} else if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are wrong ' + userName + '! I would choose Thai, Korean, or Vietnamese food over pizza anyday.');
  console.log('The user got the wrong answer for number 2');
} else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 2');
}


var answerThree = prompt('Am I from Seattle?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  alert('You are correct ' + userName + '! I\'m a born and raised Seattleite!');
  correctAnswers++;
  console.log('The user got the correct answer for number 3');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('You are wrong ' + userName + '! I\'m a born and raised Seattleite!');
  console.log('The user got the wrong answer for number 3');
} else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 3');
}

var answerFour = prompt('Do I watch Game of Thrones?').toLowerCase();
if (answerFour === 'no' || answerFour === 'n') {
  alert('You are correct ' + userName + '! I never got into it, I\'m more into comedy shows. Some of my favorites are: Bob\'s Burgers, 30 Rock, and Schitt\'s Creek.');
  correctAnswers++;
  console.log('The user got the correct answer for number 4');
} else if (answerFour === 'yes' || answerFour === 'y') {
  alert('You are wrong ' + userName +'! I never got into it, I\'m more into comedy shows some of my favorites are: Bob\'s Burgers, 30 Rock, and Schitt\'s Creek.');
  console.log('The user got the wrong answer for number 4');
} else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 4');
}

var answerFive = prompt('Do I speak any languages other than English?').toLowerCase();
if (answerFive === 'no' || answerFive === 'n') {
  alert('You are correct ' + userName + '! I wish! I want to learn French.');
  correctAnswers++;
  console.log('The user got the correct answer for number 5');
} else if (answerFive === 'yes' || answerFive === 'y') {
  alert('You are wrong ' + userName +'! I wish! I want to learn French.');
  console.log('The user got the wrong answer for number 5');
} else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 5');
}

for (var i = 0; i < 4; i++) {
  var answerSix = prompt ('What is my favorite number?');
  if (answerSix === '3') {
    alert('You are correct! 3 is my favorite number!');
    correctAnswers++;
    console.log('The user got the correct answer for question 6 and has ' + correctAnswers + ' correct answer(s)');
    i = 5;
  } else if (answerSix < 3) {
    alert('Too low, try again!');
  } else if (answerSix > 3){
    alert('Too high, try again!');
  }
  if (i === 3){
    alert('You\'re out of guesses!');
    console.log('The user got the correct answer for question 6 and has ' + correctAnswers + ' correct answer(s)');
  }
}

for (var x = 0; x < 6; x++) {
  var answerSeven = prompt('Can you guess my favorite animals?').toLowerCase();
  var favoriteAnimals = ['dogs','cats', 'manatees','dog','cat','manatee'];
  if (favoriteAnimals.includes(answerSeven)) {
    alert('You\'re right! My favorite animals are Cats, Dogs and Manatees');
    correctAnswers++;
    console.log('The user got the correct answer for question 7 and has ' + correctAnswers + ' correct answer(s)');
    break;
  } else {
    alert('Wrong, try again!');
  }
  if (x === 5) {
    alert('You\'re out of guesses! My favorite animals are Cats, Dogs and Manatees');
    console.log('The user got the incorrect answer for question 7 and has ' + correctAnswers + ' correct answer(s)');
  }

}

alert('Thanks for playing my guessing game ' + userName + '! you got ' + correctAnswers + '/7 answers correct!');
