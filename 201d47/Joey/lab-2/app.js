
'use strict';

function question1(){
  var username =prompt('do you like chocolate?');
  if (username === 'yes'){
    alert('hi');
  } else {
    alert('thats too bad');
    console.log(question1);
  }
}
function question2(){
  var oreos = prompt ('did you like oreos?');
  if (oreos === 'yes'){
    alert ('you know oreos are chocolate yes?');
    console.log(question2);
  }
}
function question3(){
  var then =prompt('if you like oreos you like chocolate then?');
  if (then === 'yes'){
    alert ('then you must like chocolate');
    console.log(question3);
  }
}
function question4(){
  var shame =prompt('please do not deny chocolate.');
  if (shame === 'no'){
    alert ('how dare you deny chocolate! have at thee!');
  } var challenge =prompt('you cannot deny my challenge have at thee');
  if (challenge === 'no')
    alert('get back here and fight!');
  console.log(question4);
}
function question5(){
  var aftermath =prompt('that was a good match, will you try to enjoy chocolates now?');
  for( var index = 0; index < 5; index++) {
    if (aftermath === 'no') {
      alert('argh do we have to fight again?');
      break;}
    if (aftermath === 'yes'){
      alert('yay lets be friends now.');

      break;
    }
  //  alert ()
  } console.log(question5);
}
function question6(){
  var finale =prompt('so I guess this is the end?');
  if (finale === 'no') {
    alert ('what more do you want?');}
  if (finale === 'yes'){
    alert('see ya next time');
    console.log(question6);
  }
}
function question7(){
  for(var index=0; index <4; index++) {
    var finale =prompt('so I guess this is the end?');
    if (finale === 'no') {
      alert ('what more do you want?');
      break;}
    if (finale === 'yes'){
      alert('see ya next time');
      break;}
    console.log(question7);
  }
}

question1();

question2();

question3();

question4();

question5();

question6();

question7();
