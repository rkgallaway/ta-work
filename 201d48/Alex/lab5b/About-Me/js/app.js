'use strict';

var userName = prompt('Hi! Welcome! I\'m Alex! What is your name?');
alert('Hi, ' + userName + '! I\'m glad you are here! Let\'s play a guessing game so that you can learn more about me.');
console.log('The user\'s name is '+ userName);

function hawaii50() {
  var answerOne = prompt('Guess this about me: have I ever surfed in Hawaii?').toUpperCase();

  if (answerOne === 'Y' || answerOne === 'YES') {
    alert('You\'re right, ' + userName + '! I have to admit though that I did not impress the locals.');
    console.log('User got the correct answer to #1');
  } else {
    alert('Sorry, ' + userName + ', that is incorrect.');
    console.log('User got the incorrect answer to #1');
  }
};

function faveColor() {
  var answerTwo = prompt('Guess this about me: is my favorite color red?').toUpperCase();

  if (answerTwo === 'Y' || answerTwo === 'YES') {
    alert('Sorry, ' + userName + ', that is incorrect.');
    console.log('User got the incorrect answer to #2');
  } else {
    alert('You\'re right, ' + userName + '! My favorite color is actually blue as it reminds me of surfing in the ocean.');
    console.log('User got the correct answer to #2');
  }
};

function faveFood() {
  var answerThree = prompt('Guess this about me: is my favorite food curry?').toUpperCase();

  if (answerThree === 'Y' || answerThree === 'YES') {
    alert('You\'re right, ' + userName + '! Although we have way more curry places in the UK than you typically find in the USA I have to admit that the best curry I\'ve ever had was at The Bombay Cricket Club in PDX.');
    console.log('User got the correct answer to #3');
  } else {
    alert('Sorry, ' + userName + ', that is incorrect. I absolutely love curry.');
    console.log('User got the incorrect answer to #3');
  }
};

function faveHobby() {
  var answerFour = prompt('Guess this about me: is my favorite hobby knitting?').toUpperCase();

  if (answerFour === 'Y' || answerFour === 'YES') {
    alert('Sorry, ' + userName + ', that is incorrect. I am not a fan of knitting.');
    console.log('User got the incorrect answer to #4');
  } else {
    alert('You\'re right, ' + userName + '! My favorite is woodworking.');
    console.log('User got the correct answer to #4');
  }
};

function dogsOrCats() {
  var answerFive = prompt('Guess this about me: do I prefer dogs to cats?').toUpperCase();

  if (answerFive === 'Y' || answerFive === 'YES') {
    alert('You\'re right, ' + userName + '! I absolutely love dogs especially long haired border collies. My long haired border collie growing up back in Scotland was called Glen.');
    console.log('User got the correct answer to #5');
  } else {
    alert('Sorry, ' + userName + ', that is incorrect. Cats are ok but not as cool as dogs.');
    console.log('User got the incorrect answer to #5');
  }
};

hawaii50();
faveColor();
faveFood();
faveHobby();
dogsOrCats();
