'use strict';

var correctResponses = 0;
var userName=prompt('Welcome! My name is Matt, what\'s your name?');
alert('Hi ' + userName + '! I\'m Matt, Welcome to the game of me! Let\'s get weird with it. Here\'s a guessing game about me that probably says more about you');
var score = 0;
console.log('The user\'s name is ' + userName + 'alaya!');

function questionOne() {
  var answerOne=prompt('Guess this about me: Did I have a class in high school where all we did was surf?')
    .toLowerCase();
  if(answerOne === 'y' || answerOne ==='yes'){
    alert ('You\'re correct ' + userName + 'money! Take a dab. We spent 0 period three days a week surfing before school for PE credit. #blessed');
    correctResponses++;
    console.log(userName + '-money got the correct answer to #1!');
  }else{
    alert('You lose ' + userName + '! My childhood was basically an episode of the OC, which they largely filmed in my hometown of Hermosa Beach, CA' + '! This is going to be a long game for you.');
    console.log(userName + '-town is bad and should feel bad');
  }
}
questionOne();

function questionTwo(){
  var answerTwo=prompt('You\'re on a roll ' + userName + '-deezy. Yes or no; my dogs are named after my favorite US Presidents?')
    .toLowerCase();
  if(answerTwo === 'n' || answerTwo === 'no'){
    alert(userName + ' You\'re smarter than your face would have me believe ' + userName + ', impressive. I have two Aussie Shepherds named Woodford and Cider respectively after mine and my wife\'s preferred adult beverages.');
    correctResponses++;
    console.log(userName + ' is kinda brilliant right?');
  }else{
    alert(userName + '... take a moment to imagine an entire stadium booing you. You\'re very wrong. Woodford and Cider are their names: named after alcoholic beverages respectively.');
    console.log(userName + ' is so very, very, wrong about answerTwo');
  }
}
questionTwo();

function questionThree(){
  var answerThree=prompt('We going next level on this mess ' + userName + '. I am a native Hawaiian?')
    .toLowerCase();
  if(answerThree === 'y' || answerThree === 'yes'){
    alert(userName + ', it\'s like you\'re not even trying. WRONG!!! While I have six generations going back on Maui, my blood quantum does not contain Hawaiian blood. I am Filipino-Puerto Rican-Russian');
    console.log(userName + ' fails hard.');
  }else{
    alert('GET OUT OF MY HEAD ' + userName + '!!! I am not but I identify closely with my Hawaiian family. I have six generations going back on Maui, my blood quantum does not contain Hawaiian blood. I am Filipino-Puerto Rican-Russian');
    correctResponses++;
    console.log(userName + ' for the win!! but not actually');
  }
}
questionThree();

function questionFour(){
  var answerFour=prompt('Ok, Ok. Humble brag time ' + userName + '. Can you believe that Russel Wilson knows who I am?')
    .toLowerCase();
  if(answerFour === 'y' || answerFour === 'yes'){
    alert('Mic drop. Yes he does. When he was drafted by the Hawks he came into my bar. Even after I moved restaurants, whenever I saw him he remembered my name. He\'s good people');
    correctResponses++;
    console.log(userName + ' believes in my truth and I am grateful.');
  }else{
    alert('I said \'Humble Brag\', you\'d think that would clue you in ' + userName + '. When he was drafted by the Hawks he came into my bar. Even after I moved restaurants, whenever I saw him he remembered my name. He\'s good people');
    console.log(userName + ' for the win!! but not actually, but closer!');
  }
}
questionFour();

function questionFive(){
  var answerFive=prompt('Hey ' + userName + ', do you want to hear me sing?')
    .toLowerCase();
  if(answerFive === 'y' || answerFive === 'yes'){
    alert('Well ' + userName + ', I may literally have the worst singing voice in this whole wide world. Why are you trying to embarass me? Rude.');
    console.log(userName + ' knows shockingly little about me.');
  } else {
    alert(userName + '. On a serious note, you may have saved your life and everybody around you. You my friend, are a saint.');
    correctResponses++;
    console.log(userName + ' is not a fan of my singing voice.');
  }
}
questionFive();
    

function questionSix(){
  var numberOfGuesses = 4;
  while(numberOfGuesses > 0){
        
    var answerSix = Number(prompt('Sooo... ' + userName + ', despite everything that\'s happened on our journey, I feel closer to you now. On a scale of 1 to 10, guess how much I like you'));
    numberOfGuesses--;
    if (answerSix > 5){
      alert('Nope! Too high, try again!');
    }
    if(answerSix < 5){
      alert('Nope! Too low, try again!');
    }
    if(answerSix === 5){
      alert('Clearly you cheated ' + userName + '. Is this just how you get through life?');
      correctResponses++; 
      break;  
    }  
    if(numberOfGuesses === 0){
      alert('Nevermind ' + userName + ', you\'re embarrassing yourself!');
    }  
  }
}
questionSix();

function questionSeven(){
    var guesses = 0;
    var attemptsRemaining = true;
    // var favoriteFoods = ['spaghetti ', 'breakfast Burrito ', 'sushi ', 'tacos ', 'larb ', 'pineapple ', 'chili ', 'bad chinese ', 'calamari ', 'dark chocolate '];
    while(guesses < 6 && attemptsRemaining){
        var answerSeven = prompt('Hey, ' + userName + ', what kind of food are you buying me for dinner?').toLowerCase();
        for(var i = 0; i < favoriteFoods.length; i ++){    
            if (answerSeven === favoriteFoods[i]){
                alert('That\'s one on my favorites ' + userName + '! I may have been wrong about you.');
                correctResponses++;
                attemptsRemaining = false;                
            }
        }
        if (attemptsRemaining && guesses < 6){
            alert('It\s like I\'m talking to a wall. Try again ' + userName);
            guesses++;
        }
        if (guesses === 6) {
        alert('You took too long, now you\'re candys gone!!');
    }
}
}
questionSeven();

var favoriteFoods = ['spaghetti ', 'breakfast Burrito ', 'sushi ', 'tacos ', 'larb ', 'pineapple ', 'chili ', 'bad chinese ', 'calamari ', 'dark chocolate '];
    alert('Just FYI, here is a list of my favorite foods: ' + favoriteFoods);

if (correctResponses <= 3)
    alert('You got ' + correctResponses + ' out of 7. You\'re bad and you should feel bad.');
if (correctResponses >= 4 && correctResponses <=6)
    alert('You got ' + correctResponses + 'out of 7. I find you impressive.');
if (correctResponses === 7)
    alert('Perfect score. YOU ARE WOKE AF!');

console.log(userName + ' answered ' + correctResponses + ' out of 7 questions correctly.');