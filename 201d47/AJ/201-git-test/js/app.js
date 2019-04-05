'use strict'; // I want to use the new set of rules

function startQuiz(){
  var quizRules = alert('Time to prove your Mace Windu knowledge! My coding skills are basic so answers must be spelled correctly to get credit! Good luck!');
  var getUserName = prompt('To start, what\'s your name? This is the one question you can\'t get wrong.');
  alert('WRONG! Just kidding, ' + getUserName + ' is a cool name. Let\'s get started');

  /*Each user response is converted to lower case. The user receives an alert
     after each answer based on their response.*/
  var lightSaberColor = prompt('What color is Mace Windu\'s light saber?').toLowerCase();
  if(lightSaberColor === 'purple'){
    alert('Well done padwan');
  } else{
    alert('WRONG. Come on, this one was easy');
  }
  console.log(lightSaberColor);

  var nameGiver = prompt('What famous Jedi gave Mace Windu his name?').toLowerCase();
  if(nameGiver === 'yoda'){
    alert('Clever, you are!');
  } else{
    alert('Study more, you must');
  }
  console.log(nameGiver);

  var winduHistory = prompt('Did Mace Windu kill Jengo Fett at the Battle of Geonosis? Answer yes or no').toLowerCase();
  if(winduHistory === 'yes'){
    alert('Correct! Jengo should have known better than to cross a Grand Master. Good job, ' + getUserName);
  }
  else if(winduHistory === 'no'){
    alert('Incorrect. Are you even trying ' + getUserName);
  }
  else{
    alert('I said answer YES or NO. Follow directions next time!');
  }
  console.log(winduHistory);

  var birthPlace = prompt('On what planet was Mace Windu born?').toLowerCase();
  if(birthPlace === 'horuun kal'){
    alert('Wow! You really know your Windu facts!');
  } else{
    alert('Not even close. Don\'t feel bad though, ' + getUserName + '. That was a tough one.');
  }
  console.log(birthPlace);

  var isWinduGreat = prompt('This one is easy. Is Mace Windu the greatest Jedi of all time? Respond with a simple yes or no.').toLowerCase();
  if(isWinduGreat === 'yes'){
    alert('The force is strong with you. You win! This was the only question that mattered. Bye ' + getUserName);
  }
  else if(isWinduGreat === 'no'){
    alert('You must be sith. Get away from my blog right now.');
  }
  else{
    alert('I said answer YES or NO. Follow directions next time!');
  }
  console.log(isWinduGreat);
}

