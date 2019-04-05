'use strict' 

// Gabriel - This is being saved for later - 
// var favoriteMunchies = ['Reese's Peanut Butter Cups', 'Horchata', 'Tater Tots', 'Rocky Road Ice Cream'];

for(var i = 0; i < 5; i++) {
    console.log(i + 1);
// Gabriel - the loop below will start for (1st part - var i = 0; 
// Gabriel - 2nd part - i < 5 i++)
// Gabriel - 3rd part - {console.log(i + 1)}; - This whole segment of code will keep looping until it reaches and integer of 5
  }
while(gabeIsTheCoolest !== 'yes') {
  gabeIsTheCoolest = promt('do you think i am the coolest? Do you like infinite loops? Answer wisely!')
  .toLowerCase();
}
alert('Aww shucks! Thanks for the compliment lol!'); 
// Gabriel - This rest of the code above will keep the loop 
// going until the user answers 'yes' correctly. 
// It will also use the - .toLowerCase - to auto adjust -  
// ____________________________________________________________________________
// Lab Prep
// ____________________________________________________________________________

var guessesRemaining = 4;
var userGuessedCorrectly = false;

while(guessesRemaining > 0 && !userGuessedCorrectly === false) {
  alert('i am letting you guess this many times?');
// Gabriel - im going to take 1 from the guessesRemaining to imply that they guessed
guessesRemaining--; // guessesRemaining = guessesRemaining - 1;

// Vinicio - I'm going to set userGuesssedCorrectly to true if they guess the right value
userGuessedCorrectly = true;
}
// Gabriel - What can we assume when we run the loop

if(userGuessedCorrectly) {
  alert('congrats');
}
else {
  alert('boo!')
}
// ____________________________________________________________________________
var answers = [1,2,3,4];
while() {
  // Gabriel - To be able to determine if the answer 
  for(var i =0; i < answers.length; i++) {
    if (); {

    }
  }
}
// Gabriel - 
// Gabriel - 
