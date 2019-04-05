'use strict';

alert('Hi! Welcome to my page. I have a few questions for you to see how well you know me!');

var userName = prompt('First, What is your name?');
var correctAnswers = 0;

var anySiblings = prompt('Do I have any siblings? ').toLowerCase();

if(anySiblings === 'y' || anySiblings === 'yes') {
  alert('You guessed it! I\'m the youngest of SEVEN kids!');
  correctAnswers++;
} else if(anySiblings === 'n' || anySiblings === 'no') {
  alert('You got it all wrong!');
} else {
  alert('This was a yes or no question. How did you mess that up?');
}

console.log('Does the user think that I have any siblings: ' , anySiblings);

var anyPets = prompt('Do i have any pets?').toLowerCase();

if(anyPets === 'y' || anyPets === 'yes') {
  alert('Correct! I have a gorgeous geriatric pitbull named Bruce.');
  correctAnswers++;
} else if(anyPets === 'n' || anyPets === 'no') {
  alert('Wrong! I have a 14 year old dog named Bruce.');
} else {
  alert('What?? Yes or no only, please!');
}

console.log('Does the user think I have any pets: ' , anyPets);

var washingtonNative = prompt('Do you think I am native to Washington State?').toLowerCase();

if(washingtonNative === 'y' || washingtonNative === 'yes') {
  alert('Yep! King County, born and raised.');
  correctAnswers++;
} else if(washingtonNative === 'n' || washingtonNative === 'no') {
  alert('Wrong! I was born in my parents bedroom right here in Redmond, WA!');
} else {
  alert('Hmm. I think the answer you were looking for was, yes.');
}

console.log('Does the User think that I am originally from Washington State: ' , washingtonNative );

var beenOnACruise = prompt('Have I ever been on a cruise?').toLowerCase();

if(beenOnACruise === 'y' || beenOnACruise === 'yes') {
  alert('Nope. I have higher hopes for my vacations than being stuck on the Ocean with strangers!');
} else if(beenOnACruise === 'n' || beenOnACruise === 'no') {
  alert('Correct! Stuck on a ship waiting for a virus outbreak is not the vacation for me.');
  correctAnswers++;
} else {
  alert('?????');
}

console.log('Does the user think I have been on a cruise: ' , beenOnACruise);

var playLotto = prompt('Do you think that I play the lottery?').toLowerCase();

if(playLotto === 'y' || playLotto === 'yes') {
  alert('You bet! You can\'t win if you don\'t play.');
  correctAnswers++;
} else if(playLotto === 'n' || playLotto === 'no') {
  alert('Wrong answer! I like to test my luck now and again.');
} else {
  alert('Ehhhh, no.');
}

console.log('Does the user think that I play the lotto: ' , playLotto);

var numberOfTattoos = Number(prompt('I will give you five chances at guessing how many tattoos I have!'));

console.log('Checking prompt on first use input for how many tats they think I have:' , numberOfTattoos);

var guessesRemaining = 5;

// I am writing my 'if' statement and while loop this way because it's the only format that I tried that finally worked. Although I feel as though the first if and the 2nd if should be able to be combined, I couldn't get my code to loop proberly and break the loop properly when I only had the first or third 'if' statements as opposed to both.
if(numberOfTattoos === 6) {
  alert('Correct! I spent more money than I care to discuss on my six tattoos!');
  correctAnswers++;
} else {
  while(guessesRemaining > 1 && numberOfTattoos !== 6) {
    guessesRemaining--;
    if(numberOfTattoos > 6) {
      alert('No, ' + userName +', That guess is too high! But I\'ll get there someday.');
    }
    if(numberOfTattoos < 6) {
      alert('Close, but you are guessing too low.');
    }
    numberOfTattoos = Number(prompt('Guess again! You have ' + guessesRemaining + ' more tries.'));
    if(guessesRemaining > 0 && numberOfTattoos === 6) {
      alert('Correct! I have spent more money than I care to discuss on my six tattoos!');
    }
  }
}

alert('You already know that I have a dog. I love animals and I have had a variety of pets in my life!');

var petsIHad = ['ferret', 'crow', 'pigeon', 'bird', 'lizard', 'gerbil'];
var numberOfGuesses = 5;

// I was having trouble being able to break out of this while loop. I tried inputting the word, break, on line107. It did not work. I tried adding '&& guessWhichpet !== petsIhad.length' onto line 98, but since I had not yet run the code  to check through my array, the condition to run the loop was never true. So I ended up changing the number of guesses to 0 on line 107, which closes the loop with a correct answer.
while(numberOfGuesses > 0) {
  var guessWhichPet = prompt('Name an animal, besides a dog, that you think I may have had for a pet in my life. One word only and please make don\'t make it plural! My code won\'t accept your answer if there\'s an \'s\' at the end! I will give you 5 guesses!').toLowerCase();
  console.log('initial type of pet prompt response' , guessWhichPet);
  numberOfGuesses--;
  for(var i = 0; i < petsIHad.length; i++) {
    //   console.log('checking pets i had' , petsIHad[i]);
    if(guessWhichPet === petsIHad[i]) {
      alert('Great work, ' + userName + '! I did have the pleasure of caring for a ' + guessWhichPet + ' before!');
      correctAnswers++;
      console.log('checking pets i had' , petsIHad[i]);
      numberOfGuesses = 0;
    }
  }
  if(guessWhichPet !== petsIHad[i] && numberOfGuesses > 0) {
    alert(guessWhichPet + '? No, I have never had one of those.');
    guessWhichPet = alert('You still have ' + numberOfGuesses + ' guesses left! Keep trying.');
  }
  if(numberOfGuesses === 0){
    alert('All done! Here are some of the animals I have had as pets: ');
  }
}

// To tell the users all of the possible correct answers
for(var j=0; j < petsIHad.length; j++) {
  alert(petsIHad[j]);
}

console.log('checking correct answers math:' , correctAnswers);

if(correctAnswers < 4){
  alert('Hey, ' + userName + ', you only got ' + correctAnswers + ' out of 7 right! You need to start paying more attention to me.');
}

if(correctAnswers > 4 && correctAnswers < 7){
  alert('Not too shabby, ' + userName + '! you managed to get' + correctAnswers + ' out of 7 questions correct!');
}

if(correctAnswers === 7){
  alert('WOW, ' + userName + '! You scored 100%! BFF\'s!');
}




