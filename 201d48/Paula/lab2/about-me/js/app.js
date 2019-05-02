'use strict';

var userName = prompt ('Hi! Welcome! I\'m Paula! What is your name?');
alert('Hi ' + userName + ' I\'m glad you are here! Let\'s play a guessing game so that you can learn more about me.');
console.log ('The user\'s name is ' + userName );


var questionOne = prompt ('Did I grew up in the Philippines? Sure is a warm country!').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes' ){
  alert ('You nailed it! ' + userName + ' I kinda miss the weather especially during winter season!');
  console.log ('Users answer is' + questionOne);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('Users answer is ' + questionOne);
}


////////////////////////////////////////////////////////////////////////////
// q2

var questionTwo = prompt ('Do I like cats?').toLowerCase();

if(questionTwo === 'n' || questionTwo === 'no'){
  alert ('You nailed it! ' + userName + ' Actually if I will get one, she will be a Serval!!!!');
  console.log ('Users answer is ' + questionTwo);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('User answer is' + questionTwo);
}



/////////////////////////////////////////////////////////////////////////
//q3

var questionThree = prompt ('Do I have a Princess or a Prince?').toLowerCase();

if(questionThree === 'p' || questionThree=== 'princess' ){
  alert ('You nailed it! ' + userName + ' She is a handful!');
  console.log ('Users answer is ' + questionThree);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('Users answer is' + questionThree);
}

/////////////////////////////////////////////////////////////////////////
//q4

var questionFour = prompt ('Do I love teal color?').toLowerCase();
if(questionFour === 'y' || questionFour=== 'yes' ){
  alert ('Way to go! ' + userName + ' I am addicted to teal!');
  console.log ('Users answer is '+ questionFour);

}else {
  alert('Sorry ' + userName + ' That is a NO noes!');
  console.log('Users answer is' + questionFour);
}

/////////////////////////////////////////////////////////////////////////
//q5

var questionFive = prompt ('Do I love to giggle??? Be careful with your answer!!!! I am watching you!').toLowerCase();
if(questionFive === 'y' || questionFive === 'yes' ){
  alert ('Bet you are too!!!! ' + userName + 'That\'s why I tend to be gassy!!! LOL');
  console.log ('Users answer is' + questionFive);

}else {
  alert('Sorry ' + userName + ' I giggle with everything!');
  console.log('Users answer is' + questionFive);
}

///////////////////////////////////////////////////////////////////////////
//q6 for while 
// var attempt = 0;


// while ('Guesses Left'){

//     var guessOne = prompt ('How many years do we have to keep our medical records?');
//      attempt++;

//     if ('If the guess is too high'){
//         'Wrong guess!'
//     } else if {
//         ('Guess is too Low!')
//     } else {
//         ('You got it!')
//     }
// }

