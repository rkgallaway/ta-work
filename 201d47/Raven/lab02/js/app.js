// 'use strict';

// var anySiblings = prompt('Do I have any siblings?').toLowerCase();

// if(anySiblings === 'y' || anySiblings === 'yes') {
//   alert('You guessed it! I\'m the youngest of SEVEN kids!');
// } else if(anySiblings === 'n' || anySiblings === 'no') {
//   alert('You got it all wrong!');
// } else {
//   alert('This was a yes or no question. How did you mess that up?');
// }

// console.log('Does the user think that I have any siblings?: ' + anySiblings);

// var anyPets = prompt('Do i have any pets?').toLowerCase();

// if(anyPets === 'y' || anyPets === 'yes') {
//   alert('Correct! I have a gorgeous geriatric pitbull named Bruce.');
// } else if(anyPets === 'n' || anyPets === 'no') {
//   alert('Wrong! I have a 14 year old dog named Bruce.');
// } else {
//   alert('What?? Yes or no only, please!');
// }

// console.log('Does the user think I have any pets? ' + anyPets);

// var washingtonNative = prompt('Do you think I am native to Washington State?').toLowerCase();

// if(washingtonNative === 'y' || washingtonNative === 'yes') {
//   alert('Yep! King County, born and raised.');
// } else if(washingtonNative === 'n' || washingtonNative === 'no') {
//   alert('Wrong! I was born in my parents bedroom right here in Redmond, WA!');
// } else {
//   alert('Hmm. I think the answer you were looking for was, yes.');
// }

// console.log('Does the User think that I am originally from Washington State? ' + washingtonNative );

// var beenOnACruise = prompt('Have I ever been on a cruise?').toLowerCase();

// if(beenOnACruise === 'y' || beenOnACruise === 'yes') {
//   alert('Nope. I have higher hopes for my vacations than being stuck on the Ocean with strangers!');
// } else if(beenOnACruise === 'n' || beenOnACruise === 'no') {
//   alert('Correct! Stuck on a ship waiting for a virus outbreak is not the vacation for me.');
// } else {
//   alert('?????');
// }

// console.log('Does the user think I have been on a cruise?: '+ beenOnACruise);

// var playLotto = prompt('Do you think that I play the lottery?').toLowerCase();

// if(playLotto === 'y' || playLotto === 'yes') {
//   alert('You bet! You can\'t win if you don\'t play.');
// } else if(playLotto === 'n' || playLotto === 'no') {
//   alert('Wrong answer! I like to test my luck now and again.');
// } else {
//   alert('Ehhhh, no.');
// }

// console.log('Does the user think that I play the lotto?' + playLotto);

var petsIHad = ['ferret', 'crow', 'pigeon', 'bird', 'lizard', 'gerbil'];
var counterQuestionSeven = 5;
var attemptsRemaining = true;

while(counterQuestionSeven > 0 && attemptsRemaining){
  var guessWhichPet = prompt('Name an animal, besides a dog, that you think I may have had for a pet in my life. One word only and please make don\'t make it plural! My code won\'t accept your answer if there\'s an \'s\' at the end! I will give you ' + counterQuestionSeven + ' guesses!').toLowerCase();
  for(var i = 0; i < petsIHad.length; i++) {
    if(guessWhichPet === petsIHad[i]) {
      alert('Great work, ryan ! I did have the pleasure of caring for a ' + guessWhichPet + ' before!');
      console.log('user got question 7 correct by answering:', guessWhichPet);
      attemptsRemaining = false;
    }
  }
  counterQuestionSeven--;
  if(counterQuestionSeven > 0 && attemptsRemaining){
    alert(guessWhichPet + '? No, I have never had one of those.');
    console.log('user got question 7 wrong, leaving ' + counterQuestionSeven + ' attempts remaining. their answer was:', guessWhichPet);
  }
  if(counterQuestionSeven === 0){
    alert('You are out of tries');
  }
}


// while(numberOfGuesses > 0 && !correctGuess) {
//   var guessWhichPet = prompt('Name an animal, besides a dog, that you think I may have had for a pet in my life. One word only and please make don\'t make it plural! My code won\'t accept your answer if there\'s an \'s\' at the end! I will give you 5 guesses!').toLowerCase();
//   console.log('initial type of pet prompt response' , guessWhichPet);
//   numberOfGuesses--;
//   for(var i = 0; i < petsIHad.length; i++) {
//     console.log('iteration' , petsIHad[i], petsIHad.length);
//     if(guessWhichPet === petsIHad[i]) {
//       alert('Great work, ryan ! I did have the pleasure of caring for a ' + guessWhichPet + ' before!');
//       console.log('correct guess' , petsIHad[i]);
//       correctGuess = true;
//     } else
//     if(i === petsIHad[petsIHad.length - 1] && numberOfGuesses > 0) {
//       alert(guessWhichPet + '? No, I have never had one of those.');
//       guessWhichPet = prompt('You still have ' + numberOfGuesses + ' left! Keep trying.');
//       numberOfGuesses--;
//       console.log('petsIHad', i);

//     }
//     if(numberOfGuesses === 0){
//       alert('You are out of tries');
//     }
//   }
// }



//begin  Ryan's Question 7

//establish array use for loop?!
// var favoriteColors = ['peacock', 'turquoise', 'persimmon'];
// var attemptsRemaining = true;
// var counterQuestionSeven = 6;

// while(counterQuestionSeven > 0 && attemptsRemaining){
//   var answerSeven = prompt('Ok, So we\'ve established that I like my Fiesta ware. Can you guess one of my favorite colors? You have ' + counterQuestionSeven + ' attempts').toLowerCase();
//   console.log(counterQuestionSeven);
//   console.log(answerSeven);
//   for (var i = 0; i < favoriteColors.length; i++){
//     if(answerSeven === favoriteColors[i]){
//       alert('Correct! That\'s on of my faves! Impressive! My favorite three colors are Peacock, Persimmon, and Turquoise');
//       console.log('user got question 7 correct');
//       attemptsRemaining = false;
//     }
//   }
//   counterQuestionSeven--;
//   if (counterQuestionSeven > 0 && attemptsRemaining){
//     alert('Unfortunately no that is not one of my favorite colors, ' + counterQuestionSeven + ' more trys');
//     console.log('user got question 7 wrong');
//   }

//   if (counterQuestionSeven === 0){
//     alert('unfortunately you are out of guesses. My favorite three colors are Peacock, Persimmon, and Turquoise.  Thanks for trying ' + username +'!');
//   }
// }



