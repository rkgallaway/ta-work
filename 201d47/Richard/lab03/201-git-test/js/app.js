'use strict'
//Confirming that the user wants to play the game
var correctAnswerCount = 0 //counts the number of times you get an answer correct
// var intro = confirm('Quick get ready want to play guessing game? Only Answer with Y and N');
// fdjsalkfasd

var myJob = function (){
  var x = prompt('Did i work in the navy?').toUpperCase();
  if(x === 'Y' || x === "YES"){
    alert('Wrong Answer Sorry');
  } 
  else if(x === 'N'|| x === "NO"){
    alert('Good job you guessed right!');
  }
  else{ alert('Sorry but you didnt follow my instructions please only answer with\
     Y and N.');
  } 
           
  console.log('myJob', x);
}


myJob();

//What is my age question
var myAge = function () {

  var x = prompt('Is my age 22').toUpperCase();
  if(x === 'Y' || x === 'YES'){
    alert('Good job you guessed right!');
  } 
  else if(x === 'N' || x === "NO"){
    alert('Wrong Answer Sorry');
  }
  else{ alert('Sorry but you didnt follow my instructions please only answer with\
                 Y and N.');
  } 
  console.log('myAge:', x);
}  
myAge();

//Do i love tequila question
var myLoveForTequila = function(){
  var x = prompt('Do i love tequila?').toUpperCase();
  if(x === 'Y'|| x === 'YES'){
    alert("Of course who doesn't love tequila");
            
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
var myAllergy = function() {

  var x = prompt('Am I allergic to anything?').toUpperCase();  
  if(x === 'Y' || x === 'YES'){
    alert('Correct im allergic to mosquitos');
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
var myEducation = function() {

  var x = prompt('Did i go to college?').toUpperCase();
  if(x === 'Y' || x === 'YES'){
    alert('Correct but i dropped out.');
    count++;
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
var guessForQuestion7 = function() {
  var x = 6
  var myHome = ['PUERTO RICO', 'FLORIDA', 'GEORGIA', 'KOREA'];
  var yourGuessStatus = false;
  while(x > 0 && !yourGuessStatus){
    var yourGuess = prompt('Guess a place I haved lived in only name states or countrys.').toUpperCase();
    console.log(yourGuess);
    for(var i=0; i < myHome.length; i++){
      if(yourGuess === myHome[i]){
        alert('You guessed correct.');
        yourGuessStatus = true;
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
    