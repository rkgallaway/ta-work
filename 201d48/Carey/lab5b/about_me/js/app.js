'use strict';

var userName = prompt('Hi! Welcome! I\'m Carey! What\'s your name?');
alert('Hi, ' + userName + '! I\'m glad you\'re here! Let\'s play a guessing game so that you can learn more about me.');
console.log('The user\'s name is' + userName);

var correctAnswer = 0;

function brokenFinger(){

  var answerOne = prompt('Guess this about me: have I ever in any way shape or form ran over my own finger?').toLowerCase();

  if (answerOne === 'y' || answerOne === 'yes'){
    alert('You\'re right, ' + userName + '! I did! When I used to skateboard, I somehow rolled right over my right index finger! :D');
    console.log('User got the correct answer to #1');
  }else {
    alert('Sorry ' + userName + ', that\'s a big negative!');
    console.log('User got the incorrect answer to #1');
    correctAnswer++;
  }
}
brokenFinger();


//////
var answerTwo = prompt('Do I prefer Apple over Android?').toLowerCase();

if (answerTwo === 'n' || answerTwo === 'no'){
  alert('You\'re right, ' + userName + '! I despise Apple! Android forever!');
  console.log('User got the correct answer to #2');
} else {
  alert('Sorry ' + userName + ', I love things that have problems for no reason. It makes things challenging!');
  console.log('User got the incorrect answer to #2');
  correctAnswer++;
}

var answerThree = prompt('Detroit Lions are my favorite NFL team! But are the Detroit Lions the best team ever?').toLowerCase();

if (answerThree === 'n' || answerThree === 'no'){
  alert('Sadly... You\'re right, ' + userName + 'Although I wish it was true...');
  console.log('User got the correct answer to #3');
} else {
  alert('Sorry ' + userName + ', we\'re just not good enough');
  console.log('User got the incorrect answer to #2');
  correctAnswer++;
}

var answerFour = prompt('Do I prefer chocolate over fruity tasting candies?').toLowerCase();

if (answerFour === 'y' || answerFour === 'yes'){
  alert('You\'re right, ' + userName + '! Chocolate is the best!');
  console.log('User got the correct answer to #4');
} else {
  alert('Sorry ' + userName + ', I just dont like them.');
  console.log('User got the incorrect answer to #4');
  correctAnswer++;
}

var answerFive = prompt('Am I glad this is my last question for this assignment?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes'){
  alert('You\'re right, ' + userName + '! One small victory but the battle rages on!');
  console.log('User got the correct answer to #5');
} else {
  alert('Sorry ' + userName + ', That\'s wrong buddy.');
  console.log('User got the incorrect answer to #5');
  correctAnswer++;
}


var attempts = 4;

while (attempts > 0 && answerSix !== 7){
  var answerSix = Number(prompt('Now let\'s see if you have what it takes to guess how many fish are in my fish tank!').toLowerCase());
  attempts--;
  if (answerSix === 7){
    alert('You\'re right, ' + userName + '! I have 7 tetras. Three black skirt tetras and 4 white skirt tetras.');
    console.log('User got the correct answer to #6');
  } else if(answerSix < 7){
    alert('Sorry ' + userName + ', That\'s too low, you have ' + attempts + ' guesses left!');
    console.log('User got the incorrect answer to #6');
  } else if(answerSix > 7){
    alert('Sorry ' + userName + ', That\'s too high, you have ' + attempts + ' guesses left!');
    console.log('User got the incorrect answer to #6');
    correctAnswer++;
  }
}

var attemptsOne = 0;
var candies =['kitkat', 'snickers', 'reeses sticks', 'symphony'];

while (attemptsOne < 6){

  var isCorrect = false;

  var answerSeven = prompt('What are my 4 favorite candies?').toLowerCase();
  attemptsOne++;
  console.log(typeof answerSeven);

  for (var i = 0; i < candies.length; i++){
    console.log('candies=' + candies[i]);
    if (answerSeven === candies[i]) {
      alert('That\'s right! My 4 favorite candies are: Kitkat, Snickers, Reeses Sticks, and Symphony!');
      console.log('User got the correct answer to question 7.');
      isCorrect = true;
      attemptsOne = 7;
    }
  }
  if (!isCorrect){
    alert('Sorry big fella, try that again.');
    console.log('User got the wrong answer to question 7.');
  }
  if (attemptsOne === 6){
    alert('Too bad. You\'re out of guesses. FYI, my 4 favorite candies are: Kitkat, Snickers, Reeses Sticks, and Symphony!');
    console.log('User is out of chances to answer question 7.');
  }
}

alert('Great effort ' + userName + ' You got ' + correctAnswer + ' out of 7 questions correct!' );
