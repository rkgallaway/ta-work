'use strict';

var correctAnswers = 0;
var wrongAnswers = 7;
var userName = userName;

userName = prompt('Hi! Im Yoshi! whats your name??');
console.log('userName:', userName);
if(userName === 'kali' || userName === 'Kali'){
  alert('You dont look like a pupperoni....');
}else{
  alert('Hey, ' +userName+ '!!' + ' Good to know ya!');
}

function hatchFromEggQuestion() {
  var hatchFromAnEggAnswer = prompt('Did I hatch from an egg??').toLowerCase();
  //---------------------------------------------------------
  //HATCH QUSTION
  //---------------------------------------------------------
  console.log('hatchFromAnEggAnswer:', hatchFromAnEggAnswer);
  if (hatchFromAnEggAnswer === 'y' || hatchFromAnEggAnswer === 'yes') {
    alert('Ya, Ya, Yoshi!');
    return true;
  } else if (hatchFromAnEggAnswer === 'n' || hatchFromAnEggAnswer === 'no') {
    alert('Unnnnnggg');
  } else {
    alert('Wah, Wah, Wahhhhhhhhh....');
  }
  return false
}

function colorationQuestion() {
  var areWeDifferentColorsAnswer = prompt('Do my friends and I come in different colors?').toLowerCase();
  //---------------------------------------------------------
  //COLORATION QUSTION
  //---------------------------------------------------------
  console.log('areWeDifferentColorsAnswer:', areWeDifferentColorsAnswer);
  if (areWeDifferentColorsAnswer === 'y' || areWeDifferentColorsAnswer === 'yes') {
    alert('Yoshi!!!!');
    return true;
  } else if (areWeDifferentColorsAnswer === 'n' || areWeDifferentColorsAnswer === 'no') {
    alert('Mario... is that REALLY you...??');
  } else {
    alert('Ohhhh... Mama Mia!');
  }
  return false;
}

function whereDoILiveQuestion() {
  var whereILiveAnswer = prompt('Do Yoshi\'s live on an island?').toLowerCase();
  console.log('whereILiveAnswer:', whereILiveAnswer);
  //---------------------------------------------------------
  //WHERE DO I LIVE QUSTION
  //---------------------------------------------------------
  if (whereILiveAnswer === 'y' || whereILiveAnswer === 'yes') {
    alert('Yup, Yup!');
    return true;
  } else if (whereILiveAnswer === 'n' || whereILiveAnswer === 'n') {
    alert('*Sad Yoshi Face*');
  } else {
    alert('*Angry Ground Pound*');
  }
  return false;
}

function pickyEatQuestion() {
  var pickyEaterAnswer = prompt('Am I a picky eater?').toLowerCase();
  console.log('pickyEaterAnswer:', pickyEaterAnswer);

  if (pickyEaterAnswer === 'y' || pickyEaterAnswer === 'yes'){
    alert('YOSHI!!');
    return true;
  } else if (pickyEaterAnswer === 'n' || pickyEaterAnswer === 'no'){
    alert('I eat EVERYTHING!');
  } else {
    alert('Trya your luck again!');
  }
  return false;
}

function goKartsQuestion() {
  var doILoveGoKarts = prompt('I may be a Yoshi... but do I like Go-Karts?').toLowerCase();
  console.log('doILoveGoKarts:', doILoveGoKarts);
  if (doILoveGoKarts === 'y' || doILoveGoKarts === 'yes') {
    alert('*Vroooooom* Ya, Ya, YOSHI!');
    return true;
  } else if (doILoveGoKarts === 'n' || doILoveGoKarts === 'no') {
    alert('Oh, no. I lose.');
  } else {
    alert('Booooo!');
  }
  return false;
}


var guessesRemaining = 5; //Guess Counter
var numberOfGames = 1; // AJ - placeholder variable so our while loop recognizes it
//the value is changed with user input


function gameCountQuestion(){
  while(guessesRemaining > 0 && numberOfGames !== 101){
    numberOfGames = Number(prompt('Guess how many games Ive been featured in!' + '\n' + 'Hint: It\'s an amount of spotted dogs.'));
    guessesRemaining--;
    if(numberOfGames > 101 && guessesRemaining >= 1){
      alert('Woah, Woah, Woah! Too High! Only: ' + guessesRemaining + ' tries left!')// AJ You can adjust to your liking
    }else if(numberOfGames < 101 && guessesRemaining >= 1){
      alert('Guess Higher! You only have: ' + guessesRemaining+ ' tries left!')// AJ- adjust as needed
    }
  }if(numberOfGames === 101){
    alert('YOSHI!');//AJ change to your liking
    return true;
  }else if(guessesRemaining ===0){
    alert('Ba ba ba, Da da da');//AJ - adjust to your liking
  }
  return false;
}

var snackQuestionsRemaining = 6;
var possibleAnswers = ['berries', 'baby mario', 'goombas', 'wiggler', 'chicken', 
                       'pokey', 'koopa troopa', 'red mushrooms', 'mushrooms', 
                       'tuna', 'dolphins'];//AJ- you can change these values later, just getting you started
var userChoseCorrectly = false;

function favoriteSnacks(){
  while(snackQuestionsRemaining > 0 && !userChoseCorrectly){
    var yoshiFavoriteFood = prompt('What are some of my favorite foods? There are lots of right answers').toLowerCase();
    snackQuestionsRemaining--;
    console.log(yoshiFavoriteFood);
    for(var i = 0; i < possibleAnswers.length; i++){
      if(yoshiFavoriteFood === possibleAnswers[i]){
        alert('That\'s right! I love ' + yoshiFavoriteFood + '!' + 'I also love  ' +[possibleAnswers]+ '!!!');
        userChoseCorrectly = true;
        return true;
      }
     
    }
    if(userChoseCorrectly === false && snackQuestionsRemaining > 1){
      alert('Nope, try again!');
    }
      console.log('user guessed wrong');
    }
  if(snackQuestionsRemaining === 1){
    alert('last try');
  }
  if(userChoseCorrectly === false || snackQuestionsRemaining === 0){
    alert('Sorry These ' + [possibleAnswers] + ' are my favorite foods!');
  }
  return false;
}

function scoreTally(correctAnswers){
  alert('Its been a wild ride ' +userName+ ' You got ' +correctAnswers+ ' out of ' +wrongAnswers+ '!!');
  if(correctAnswers < wrongAnswers){
    alert('Bummer! You only got ' +correctAnswers+ ' answers correct.');
  }
}

if(hatchFromEggQuestion()) {
  correctAnswers++;
};
if(colorationQuestion()) {
  correctAnswers++;
};
if (whereDoILiveQuestion()){
  correctAnswers++;
};
if (pickyEatQuestion()){
  correctAnswers++;
};
if (goKartsQuestion()){
  correctAnswers++;
};
if (gameCountQuestion()){
  correctAnswers++;
};
if (favoriteSnacks()){
  correctAnswers++;
};
scoreTally(correctAnswers);


