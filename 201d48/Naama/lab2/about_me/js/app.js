'use strict';

// User Name

var userName = prompt('Hello! Welcome! What is your name?');
alert('Hey there ' + userName + '! Let\'s start with a little guessing game about me \:\)');
console.log('The user\'s name is ' + userName);

// Correct Answer 

var correctAnswer = 0;

// Question 1

var answerOne = prompt('Do I like spicy food?').toLowerCase();

if (answerOne === 'no' || answerOne === 'n') {
  alert('That\'s true, I really can\'t do more than 1 star');
  console.log('User got the correct answer to question 1');
  correctAnswer++;
} else {
  alert('sadly no... I have no tolerance');
  console.log('User got the wrong answer to question 1');
}

// Question 2

var answerTwo = prompt('Did I ever travel to Argentina?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n'){
  alert('That\'s correct, but it\'s on my list!');
  console.log('User got the correct answer to question 2');
  correctAnswer++;
} else {
  alert('sadly, I did not, but would love to go some day!');
  console.log('User got the wrong answer to question 2');
}

// Question 3

var answerThree  = prompt('Did I ever live in Texas?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y'){
  alert('I sure did! And now I want a breakfast burrito...');
  console.log('User got the correct answer to question 3');
  correctAnswer++;
} else {
  alert('I actually did, but I didn\'t get to keep the accent');
  console.log('User got the wrong answer to question 3');
}

// Question 4

var answerFour = prompt('Am I a linsenced diving instructor?').toLowerCase();
if (answerFour === 'no' || answerFour === 'n'){
  alert('That\'s right. I like scuba diving, but that\'s about it');
  console.log('User got the correct answer to question 4');
  correctAnswer++;
} else {
  alert('Unfortunately, I\'m not that cool');
  console.log('User got the wrong answer to question 4');
}

// Question 5

var answerFive = prompt('Do I like baking pies?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y'){
  alert('Yeah, I do. My favorite is pumkin');
  console.log('User got the correct answer to question 5');
  correctAnswer++;
} else {
  alert('In fact I do. You might like it too if you gave it a try');
  console.log('User got the wrong answer to question 5');
}

// Question 6

// ask the user to guess a number/ a Q with numeric input - done
// alert the user if the guess is too high or too low - if/else - done
// give the user exactly four chances to guess - while loop - done

var guessesSix = 0;

while (guessesSix < 4){

  var answerSix = Number(prompt('How many Canadian Provinces have I visited, from 1-10?'));
  guessesSix++;
  console.log(typeof answerSix);

  if (answerSix > 4){
    alert('Oh, I wish! But no, not so many...');
    console.log('User got the wrong answer to question 6. Their Answer was over 4');
  } else if (answerSix < 4){
    alert('That\'s a pretty low number. I did better than that');
    console.log('User got the wrong answer to question 6. Their Answer was under 4');
  } else if (answerSix === 4){
    alert('Amazing guess! That\'s correct ' + userName);
    console.log('User got the correct answer to question 6');
    guessesSix = 5;
    correctAnswer++;
  }
}

// Question 7

// Write a question that has multiple correct answers. done.
// create an array of all the possible correct answers. done. 
// Give the user 6 chances to guess the answer. done. 
// When the user guesses right OR runs out of tries, display the full array. 

var guessesSeven = 0;
var movies =['iron man', 'black panther', 'captain marvel', 'ant man'];

while (guessesSeven < 6){

  var isCorrect = false;

  var answerSeven = prompt('What are my 4 favorites Marvel movies?').toLowerCase();
  guessesSeven++;
  console.log(typeof answerSeven);

  for (var i = 0; i < movies.length; i++){
    console.log('movies=' + movies[i]);
    if (answerSeven === movies[i]) {
      alert('That\'s right! My 4 favorites Marvel movies are: Iron Man, Black Panther, Captain Marvel, and Ant Man!');
      console.log('User got the correct answer to question 7.');
      isCorrect = true;
      guessesSeven = 7;
    }
  }
  if (!isCorrect){
    alert('Womp womp. Try again!');
    console.log('User got the wrong answer to question 7.');
  }
  if (guessesSeven === 6){
    alert('Too bad. You\'re out of guesses. FYI, my 4 favorites Marvel movies are: Iron Man, Black Panther, Captain Marvel, and Ant Man!');
    console.log('User is out of chances to answer question 7.');
  }
}


// End Game Message

// keep a tally of the total correct answers.
// display a message "Great effort userName You got X out of Y questions correct."

alert('Great effort ' + userName + ' You got ' + correctAnswer + ' out of 7 questions correct!' );

