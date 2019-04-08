'use strict';

alert('Hi! Welcome to my page. I have a few questions for you to see how well you know me!');
var correctAnswers = 0;
var userName = prompt('First, what is your name?');
alert('Great to see you, ' + userName + '! Let\'s get started!');

function questionOne() {
  var anySiblings = prompt('Do I have any siblings? ').toLowerCase();

  if(anySiblings === 'y' || anySiblings === 'yes') {
    alert('You guessed it, ' + userName + '! I\'m the youngest of SEVEN kids!');
    correctAnswers++;
  } else if(anySiblings === 'n' || anySiblings === 'no') {
    alert('You got it all wrong, ' + userName +'!');
  } else {
    alert(userName+ '! This was a yes or no question. How did you mess that up?');
  }
  console.log('Does the user think that I have any siblings: ' , anySiblings);
}

function questionTwo() {
  var anyPets = prompt('Do i have any pets?').toLowerCase();

  if(anyPets === 'y' || anyPets === 'yes') {
    alert('Correct, ' + userName + '! I have a 14 year old pitbull named Bruce.');
    correctAnswers++;
  } else if(anyPets === 'n' || anyPets === 'no') {
    alert('Wrong, ' + userName + '! I have a 14 year old dog named Bruce.');
  } else {
    alert('What?? Yes or no only, please, ' + userName + '!');
  }
  console.log('Does the user think I have any pets: ' , anyPets);
}

function questionThree() {
  var washingtonNative = prompt('Do you think I am native to Washington State?').toLowerCase();
  if(washingtonNative === 'y' || washingtonNative === 'yes') {
    alert('Yep, ' + userName + '! King County, born and raised.');
    correctAnswers++;
  } else if(washingtonNative === 'n' || washingtonNative === 'no') {
    alert('Wrong, ' + userName + '! I was born in my parents bedroom right here in Redmond, WA!');
  } else {
    alert('Hmm, ' + userName + '. I think the answer you were looking for was, yes.');
  }
  console.log('Does the User think that I am originally from Washington State: ' , washingtonNative );
}

function questionFour() {
  var beenOnACruise = prompt('Have I ever been on a cruise?').toLowerCase();
  if(beenOnACruise === 'y' || beenOnACruise === 'yes') {
    alert('Nope, ' + userName + '. I have higher hopes for my vacations than being stuck on the Ocean with strangers!');
  } else if(beenOnACruise === 'n' || beenOnACruise === 'no') {
    alert('Correct! Stuck on a ship waiting for a virus outbreak is not the vacation for me.');
    correctAnswers++;
  } else {
    alert(userName + '?????');
  }
  console.log('Does the user think I have been on a cruise: ' , beenOnACruise);
}

function questionFive() {
  var playLotto = prompt('Do you think that I play the lottery?').toLowerCase();
  if(playLotto === 'y' || playLotto === 'yes') {
    alert('You bet! You can\'t win if you don\'t play,' + userName + '.');
    correctAnswers++;
  } else if(playLotto === 'n' || playLotto === 'no') {
    alert('Wrong answer! I like to test my luck now and again,' + userName + '.');
  } else {
    alert('Ehhhh, no,' + userName + '.');
  }

  console.log('Does the user think that I play the lotto: ' , playLotto);
}
function questionSix() {
  var numberOfTattoos = Number(prompt('Hey, ' + userName + 'I will give you five chances at guessing how many tattoos I have!'));
  var guessesRemaining = 5;
  console.log('Checking prompt on first use input for how many tats they think I have:' , numberOfTattoos);

  // I am writing my 'if' statement and while loop this way because it's the only format that I tried that finally worked. Although I feel as though the first if and the 2nd if should be able to be combined, I couldn't get my code to loop proberly and break the loop properly when I only had the first or third 'if' statements as opposed to both.
  if(numberOfTattoos === 6) {
    alert('Correct! I have spent more money than I care to discuss on my ink.');
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
      // Here on line 93, when I didn't specify that the prompt should be a number, the script was reading the variable as a string even when it was just a numeric input. Perhaps could of used parseInt?
      numberOfTattoos = Number(prompt('Guess again! You have ' + guessesRemaining + ' more tries.'));
      if(guessesRemaining > 0 && numberOfTattoos === 6) {
        alert('Correct, ' + userName + '! I have spent more money than I care to discuss on my six tattoos!');
      }
    }
  }
}
function questionSeven() {
  alert('We\'ve already talked about my dog but I have actually had a variety of pets in my life.');

  var petsIHad = ['ferret', 'crow', 'pigeon', 'fish', 'lizard', 'gerbil'];
  var numberOfGuesses = 5;

  // I was having trouble being able to break out of this while loop. I tried inputting the word, break, on line107. It did not work. I tried adding '&& guessWhichpet !== petsIhad.length' onto line 98, but since I had not yet run the code  to check through my array, the condition to run the loop was never true. So I ended up changing the number of guesses to 0 on line 107, which closes the loop with a correct answer.
  while(numberOfGuesses > 0) {
    var guessWhichPet = prompt('Name an animal, besides a dog, that you think I may have had for a pet. One word only and please make don\'t make it plural! My code won\'t accept your answer if there\'s an \'s\' at the end! I will give you 5 guesses!').toLowerCase();
    console.log('initial type of pet prompt response' , guessWhichPet);
    numberOfGuesses--;
    for(var i = 0; i < petsIHad.length; i++) {
    //   console.log('checking pets i had' , petsIHad[i]);
      if(guessWhichPet === petsIHad[i]) {
        alert('Great work, ' + userName + '! I did care for a ' + guessWhichPet + ' before!');
        correctAnswers++;
        console.log('checking pets i had' , petsIHad[i]);
        numberOfGuesses = 0;
      }
    }
    if(guessWhichPet !== petsIHad[i] && numberOfGuesses > 0) {
      alert(guessWhichPet + '? No, ' + userName + ' I have never had one of those.');
      guessWhichPet = alert('You still have ' + numberOfGuesses + ' guesses left! Keep trying.');
    }
    if(numberOfGuesses === 0){
      alert('All done, ' + userName + '! Here are some of the animals I have had as pets: ');
    }
  }
  // To tell the users all of the possible correct answers.
  alert(petsIHad);
  console.log('checking array' , petsIHad);
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
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
