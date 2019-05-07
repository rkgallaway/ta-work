'use strict';

//This var stores the total number of correct responses throughout the duration of questions
var correctResponses = 0;


//This var is requesting the user's name
var userName = prompt('Hi there! What is your name?');
console.log(userName);

alert('Alright ' + userName + ', let\'s play!');


//Question one
function questionOne(){
  var answerOne = prompt('Am I 99 years old?').toLowerCase();

  if (answerOne === 'no' || answerOne === 'n') {
    alert('You are correct, ' + userName + '! I am not 99 years old!');
    correctResponses++;
    console.log('The user got the correct answer for #1');
  } else {
    alert('You are wrong, ' + userName + '! I am not 99 years old!');
    console.log('The user got the wrong answer for #1');
  } 
}
questionOne();


//Question two
function questionTwo() {
  var answerTwo = prompt('Alright ' + userName + ', am I from North Carolina?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('You are correct! I am from North Carolina!');
    correctResponses++;
    console.log('The user got the correct answer for #1');
  } else {
    alert('You are wrong! I am from North Carolina!');
    console.log('The user got the wrong answer for #1');
  }
}
questionTwo();


//Question three
function questionThree(){
  var answerThree = prompt('Alright ' + userName + ', I bet you can\'t guess this one! Is my name Snickerdoodle?').toLowerCase();

  if (answerThree === 'no' || answerThree === 'n') {
    alert('You are correctemundo! my name is not Snickerdoodle!');
    correctResponses++;
    console.log('The user got the correct answer for #1');
  } else {
    alert('You are wrong! How about instead of your name being ' + userName + ', you now call yourself Snickerdoodle!');
    console.log('The user got the wrong answer for #1');
  }
}
questionThree();


//Question four
function questionFour(){
  var answerFour = prompt('Do I have three arms? Think really hard on this one ' + userName + '...').toLowerCase();

  if (answerFour === 'no' || answerFour === 'n') {
    alert('You are correct! I only have two arms!');
    correctResponses++;
    console.log('The user got the correct answer for #1');
  } else {
    alert(userName + ' you are so very wrong. Although sometimes I wish I had three arms!');
    console.log('The user got the wrong answer for #1');
  }
}
questionFour();


//Question five
function questionFive(){
  var answerFive = prompt('FYI: You are not allowed to get this one wrong. Am I a cyclops?').toLowerCase();

  if (answerFive === 'no' || answerFive === 'n') {
    alert('You are correct, ' + userName + '! No cyclops here!');
    correctResponses++;
    console.log('The user got the correct answer for #1');
  } else {
    alert('You are wrong! What a goober you are ' + userName + '!');
    console.log('The user got the wrong answer for #1');
  }
}
questionFive();


//Question six
function questionSix(){
  var tries = 5;
  var secretNumber = 17;

  while (tries > 0 && answerSix !== secretNumber) {
    var answerSix = Number(prompt(userName + ', do you know what my favorite number is? Hint: it\'s a number between 0 and 20.'));
    console.log(answerSix);
    tries--;
    if (answerSix === secretNumber) {
      alert('Correct! You guessed my favorite number!');
      correctResponses++;
      console.log('The user guessed right.');
      break;
    } else if (answerSix > secretNumber) {
      alert('No! That is not my favorite number. Guess lower ' + userName + '! You have ' + tries + ' tries left!');
      console.log('The user guessed too high.');
    } else if (answerSix < secretNumber) {
      alert('No! That is not my favorite number. Guess higher ' + userName + '! You have ' + tries + ' tries left!');
      console.log('The user did not guess correctly and ran out of tries.');
    }
    if (tries === 0) {
      alert('Womp womp womp.. you failed in epic fashion. FYI, my favorite number is ' + secretNumber + '.');
    }
  }
}
questionSix();


//Question seven
function questionSeven(){
  var attempts = 6;
  var cities = ['carthage', 'wilmington', 'leland', 'moon'];

  while (attempts > 0) {
    var answerSeven = prompt('So ' + userName + ', can you guess one other city I have lived in other than Seattle?').toLowerCase();
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
      alert('Admittedly, I have not lived in very many places, so that may have been too difficult to guess. I have lived in: Carthage, Wilmington, Leland, Seattle, and the Moon! (Just kidding, not the moon!)');
      console.log('The user did not guess correctly and ran out of tries.');
      break;
    }
  }
}
questionSeven();


//This returns the value of correct responses collected
if (correctResponses === 7) {
  alert('You have gotten all seven questions correct! That is epic and you deserve a beautiful gold star!');
} else if(correctResponses < 7 && correctResponses > 3) {
  alert('You have gotten ' + correctResponses + ' questions correct out of 7! That is pretty darn good!');
} else if(correctResponses < 4) {
  alert('You did\'t do so hot there. You only got ' + correctResponses + ' questions correct. Maybe you should try again.');
}




