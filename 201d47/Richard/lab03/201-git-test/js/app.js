'use strict';
var correctAnswerCount = 0;

var intro = confirm('Quick get ready want to play guessing game? Only Answer with Y and N');
function myJob(){
  var usersAnswer = prompt('Did i work in the navy?').toUpperCase();
  if(usersAnswer === 'Y' || usersAnswer === 'YES'){
    alert('Wrong Answer Sorry');
  }
  else if(usersAnswer === 'N'|| usersAnswer === 'NO'){
    alert('Good job you guessed right!');
    correctAnswerCount++;
  }
  else{ alert('Sorry but you didnt follow my instructions please only answer with\
     Y and N.');
  }
  console.log('myJob', usersAnswer);
}
myJob();
//What is my age question
var myAge = function() {
  var usersAnswer = prompt('Is my age 22').toUpperCase();
  if(usersAnswer === 'Y' || usersAnswer === 'YES'){
    alert('Good job you guessed right!');
    correctAnswerCount++;
  }
  else if(usersAnswer === 'N' || usersAnswer === 'NO'){
    alert('Wrong Answer Sorry');
  }
  else{ alert('Sorry but you didnt follow my instructions please only answer with\
            Y and N.');
  }
  console.log('myAge:', usersAnswer);
};
myAge();

//Do i love tequila question
function myLoveForTequila(){
  var x = prompt('Do i love tequila?').toUpperCase();
  if(x === 'Y'|| x === 'YES'){
    alert('Of course who doesn\'t love tequila');
    correctAnswerCount++;
  }
  else if(x === 'N'|| x === 'NO'){
    alert('Sorry to tell you but I do.');
  }
  else{ alert('Sorry but you didnt follow my instructions please only answer with\
        Y and N.');
  }
  console.log('myLoveForTequila:', x);
}
myLoveForTequila();

//Allergy question
function myAllergy() {
  var x = prompt('Am I allergic to anything?').toUpperCase();
  if(x === 'Y' || x === 'YES'){
    alert('Correct im allergic to mosquitos');
    correctAnswerCount++;
  }
  else if(x === 'N' || x === 'NO'){
    alert('Incorrect im allergic to mosquitos');
  }
  else{
    alert('Sorry but you didnt follow my instructions please only answer with\
            Y and N.');
  }
  console.log('myAllergy:', x);
}
myAllergy();

// //Did i go to college question
function myEducation() {
  var x = prompt('Did i go to college?').toUpperCase();
  if(x === 'Y' || x === 'YES'){
    alert('Correct but i dropped out.');
    correctAnswerCount++;
  }
  else if(x === 'N' || x === 'NO'){
    alert('Incorrect I did but i dropped out.');
  }
  else alert('Sorry but you didnt follow my instructions please only answer with\
        Y and N.');
  console.log('Did i go to college?', x);

}
myEducation();

//Number guessing question six
function guessesForQuestion6() {
  var x = 4;
  while(x > 0 && usersNumber !== 7){
    var usersNumber = Number(prompt('Guess a number between 1-10'));
    console.log('usersNumber:', usersNumber);
    x--;
    if(usersNumber === 7){
      alert('You guessed correct.');
      correctAnswerCount++;
    }
    else if(usersNumber > 7){
      alert('Too High, you have ' + x + ' guesses remaining.');
    }
    else if(usersNumber < 7){
      alert('Too low, you have ' + x + ' guesses remaining.');
    }
  }
}
guessesForQuestion6();

//seventh question
function guessForQuestion7(){
  var x = 6;
  var myHome = ['PUERTO RICO', 'FLORIDA', 'GEORGIA', 'KOREA'];
  var yourGuessStatus = false;
  while(x > 0 && !yourGuessStatus){
    var yourGuess = prompt('Guess a place I haved lived in only name states or countrys.').toUpperCase();
    console.log(yourGuess);
    for(var i=0; i < myHome.length; i++){
      if(yourGuess === myHome[i]){
        alert('You guessed correct.');
        yourGuessStatus = true;
        correctAnswerCount++;
      }
    }
    x--;
    if(x > 0 && !yourGuessStatus ){
      alert('Please try again you have ' + x + ' tries left');
    }
    if(x === 0){
      alert('Your out of guesses.');
    }
  }
}
guessForQuestion7();
alert('Congrats you got ' + correctAnswerCount + ' answers correct out of 7.');
// can you assign functions to items in an array

