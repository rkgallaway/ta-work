'use strict';

var userGuessesRemaining = 1;
var userScore = 0; //I declared these variables at the top so they would be recognized inside all functions
var getUserName;

// Ryan -lightSaberColor is declared twice -only need to use 'var =' once
function questionOne() {
  var lightSaberColor = prompt('What color is Mace Windu\'s light saber?').toLowerCase();
  while (userGuessesRemaining > 0 && lightSaberColor !== 'purple') {
    alert('Come Padawan, the answer is right before you. Please try again');
    var lightSaberColor = prompt('What color is Mace Windu\'s light saber?').toLowerCase();
    userGuessesRemaining--;
  }

  if (lightSaberColor === 'purple') {
    alert('Well done padwan');
    userScore = userScore + 1;
  } else {
    alert('Sorry, the correct answer is purple. DUH.');
  }
  console.log(userScore);
}

// Ryan - same var used twice for same variable

function questionTwo() {
  userGuessesRemaining = 1; //resetting the user guess as necessary with each question because the while loop resets it to 0
  var nameGiver = prompt('What famous Jedi gave Mace Windu his name?').toLowerCase();
  while (userGuessesRemaining > 0 && nameGiver !== 'yoda') {
    alert('Come Padawan, the answer is right before you. Please try again');
    var nameGiver = prompt('What famous Jedi gave Mace Windu his name?').toLowerCase();
    userGuessesRemaining--;
  }

  if (nameGiver === 'yoda') {
    alert('Clever, you are!');
    userScore = userScore + 1;
  } else {
    alert('Study more, you must. The correct answer is Yoda.');
  }
  console.log(userScore);
}

function questionThree() {
  var winduHistory = prompt('Did Mace Windu kill Jengo Fett at the Battle of Geonosis? Answer yes or no').toLowerCase();
  if (winduHistory === 'yes') {
    alert('Correct! Jengo should have known better than to cross a Grand Master. Good job, ' + getUserName);
    userScore = userScore + 1;
  } else if (winduHistory === 'no') {
    alert('Incorrect. Are you even trying ' + getUserName);
  } else {
    alert('I said answer YES or NO. Follow directions next time!');
  }
  console.log(userScore);
}

function questionFour() {
  userGuessesRemaining = 1;
  var birthPlace = prompt('On what planet was Mace Windu born?').toLowerCase();
  while (userGuessesRemaining > 0 && birthPlace !== 'horuun kal') {
    alert('Not even close. Don\'t feel bad though, ' + getUserName + '. That was a tough one.');
    var birthPlace = prompt('On what planet was Mace Windu born?').toLowerCase();
    userGuessesRemaining--;
  }
  if (birthPlace === 'horuun kal') {
    alert('Wow! You really know your Windu facts!');
    userScore = userScore + 1;
  }
  else {
    alert('Sorry, the correct answer is Horuun Kal!');
  }
  console.log(userScore);
}

function questionFive() {
  userGuessesRemaining = 3;
  var winduAge = 1; //prompt('How old was Mace Windu when he was betrayed by Anakin Skywalker? You get 4 guesses here.');
  while (userGuessesRemaining > 0 && winduAge !== 53) {
    winduAge = prompt('How old was Mace Windu when he was betrayed by Anakin Skywalker?');
    winduAge = parseInt(winduAge);
    if (winduAge > 53) {
      alert('Unfortunately Anakin never let him get that old. Try again.');
    } else if (winduAge < 53) {
      alert('He was older and wiser than this. Try again.');
    }
    userGuessesRemaining--;
  }
  if (winduAge === 53) {
    alert('Correct! He died too young.');
    userScore = userScore + 1;
  }
  else {
    alert('Sorry the answer we were looking for is 53!');
  }
  console.log(userScore);
}

function questionSix() {
  userGuessesRemaining = 6;
  var userGuessedCorrectly = false;
  var possibleAnswers = ['plo koon', 'yoda', 'ki adi mundi', 'obi wan kenobi', 'depa billaba', 'stass allie',
    'anakin akywalker', 'adi gallia', 'even piell', 'coleman kcaj', 'oppo rancisis', 'kit Fisto', 'shaak ti',
    'agen kolar', 'eeth koth', 'saesee tiin'];
  while (userGuessesRemaining > 0 && !userGuessedCorrectly) {
    var jediCouncilMembers = prompt('Name any jedi who served on the High Council with Mace Windu.').toLowerCase();
    userGuessesRemaining--;
    console.log(jediCouncilMembers);
    for (var i = 0; i < possibleAnswers.length; i++) {
      if (jediCouncilMembers === possibleAnswers[i]) {
        alert('That\'s right!');
        userScore = userScore + 1;
        userGuessedCorrectly = true;
      }
    }
    if (userGuessedCorrectly === false && userGuessesRemaining > 1) {
      alert('Nope. Try again!');
      console.log('user guessed wrong');
    } if (userGuessesRemaining === 1) {
      alert('last try!');
      continue;
    }
  }
  if (userGuessedCorrectly === false) {
    alert('Better luck next time!');
  }
}

function questionSeven() {
  var isWinduGreat = prompt('This one is easy. Is Mace Windu the greatest Jedi of all time? Respond with a simple yes or no.').toLowerCase();
  if (isWinduGreat === 'yes') {
    alert('The force is strong with you. You win! This was the only question that mattered. Bye ' + getUserName);
    userScore = userScore + 1;
  }

  else if (isWinduGreat === 'no') {
    alert('You must be sith. Get away from my blog right now.');
  }
  else {
    alert('I said answer YES or NO. Follow directions next time!');
  }
}

function calculateScore() {
  alert('You scored ' + userScore + ' out of 7!');
  console.log(userScore);
}

function startQuiz() {
  alert('Time to prove your Mace Windu knowledge! My coding skills are basic so answers must be spelled correctly to get credit! Good luck!');
  getUserName = prompt('To start, what\'s your name? This is the one question you can\'t get wrong.');
  alert('WRONG! Just kidding, ' + getUserName + ' is a cool name. Let\'s get started');

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
  calculateScore();
}
