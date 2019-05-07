'use strict';
var userName = prompt('Hey! Ready to play a guessing game about me? Let\'s start with an easy one, what\'s your name?');
console.log('The user said their name is ' + userName);
var questions = ['Have I ever lived in a foreign country?','Is pizza my favorite food?','Am I from Seattle?','Do I watch Game of Thrones?','Do I speak any languages other than English?'];
var response = ['I studied abroad in Seoul, South Korea and lived in Sydney, Australia for 6 months!', 'I would choose Thai, Korean, or Vietnamese food over pizza anyday.', 'I\'m a born and raised Seattleite!', 'I never got into it, I\'m more into comedy shows. Some of my favorites are: Bob\'s Burgers, 30 Rock, and Schitt\'s Creek.', 'I wish! I want to learn French.'];
var answers = ['yes', 'no', 'yes','no','no'];
var correctAnswers = 0;

// Question 1 through 5
function userQuestions(){
  for (var y = 0; y < questions.length; y++){
    var userAnswer = prompt (questions[y]).toLocaleLowerCase();
    if (userAnswer === (answers[y])) {
      alert ('You got it ' + userName + '! ' + response[y]);
      console.log(userName + ' guessed the correct answer for number ' + y);
      correctAnswers++;
    } else if (userAnswer !== 'yes' && userAnswer !== 'no'){
      alert ('Please answer with a yes or no');
      userQuestions();
    } else {
      alert ('Boo you are wrong ' + userName + '! ' + response[y]);
      console.log(userName + ' guessed the incorrect answer for number ' + y);
    }
  }
}


// Question 6
function questionSix() {
  for (var i = 0; i < 4; i++) {
    var answerSix = prompt ('What is my favorite number?');
    // answerSix = parseInt(answerSix);
    if (answerSix === '3') {
      alert('You are correct! 3 is my favorite number!');
      correctAnswers++;
      console.log('The user got the correct answer for question 6 and has ' + correctAnswers + ' correct answer(s)');
      break;
    } else if (answerSix < 3) {
      alert('Too low, try again!');
    } else {
      alert('Too high, try again!');
    }
    if (i === 3){
      alert('You\'re out of guesses!');
      console.log('The user got the correct answer for question 6 and has ' + correctAnswers + ' correct answer(s)');
    }
  }
}


// Question 7
function questionSeven() {
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
    } if (x === 5) {
      alert('You\'re out of guesses! My favorite animals are Cats, Dogs and Manatees');
      console.log('The user got the incorrect answer for question 7 and has ' + correctAnswers + ' correct answer(s)');
    }

  }
}

userQuestions();
questionSix();
questionSeven();

alert('Thanks for playing my guessing game ' + userName + '! you got ' + correctAnswers + '/7 answers correct!');
