'use strict';
//* Variables for initial yes or no questions*//

//* Variables for correct answers to initial questions *//


//*Questions & Answers w/if, else enabling yes or no answers*//
function q1(){
  var favorite_passtime;
  var favorite_passtime_correct_answer = 'y';
  favorite_passtime = prompt('Do you think that rob obsessivly plays video games? Y or N');
  console.log(favorite_passtime + ' y or n');
  if(favorite_passtime === favorite_passtime_correct_answer){
    alert('How could he not come on now');}
  else{
    alert('Well your wrong because gaming is life!');
  }
}
function q2(){
  var favorite_videogame;
  var favorite_videogame_correct_answer = 't';
  favorite_videogame = prompt('Kingdom Hearts is Robs favorite videogame? T or F');
  console.log(favorite_videogame + ' t or f');
  if(favorite_videogame === favorite_videogame_correct_answer){
    alert('Its just so beutiful!');}
  else{
    alert('Find me a better one then eh!!!');
  }
}
function q3(){
  var favorite_genre_of_music;
  var favorite_genre_of_music_correct_answer = 'f';
  favorite_genre_of_music = prompt('Robs favorite genre of music is country! T or F');
  console.log(favorite_genre_of_music + ' t or f');
  if(favorite_genre_of_music === favorite_genre_of_music_correct_answer){
    alert('Never was my thing to be honest. All about that ROCK YEAH!!!');}
  else{
    alert('Yeah.. noooo nooo mister superman not here');
  }
}
function q4(){
  var preference_between_cats_and_dogs;
  var preference_between_cats_and_dogs_correct_answer = 'n';
  preference_between_cats_and_dogs = prompt('If Rob had a choice to save a cat or a dog, He would definitely save the cat! T or F');
  console.log(preference_between_cats_and_dogs + ' t or f');
  if(preference_between_cats_and_dogs === preference_between_cats_and_dogs_correct_answer){
    alert('Cat: hey human remember how i use your furniture as a scratching post? Me: Come here dog!');}
  else{
    alert('and betray mans best friend ha!! Never.');
  }
}
function q5(){
  var best_final_fantasy;
  var best_final_fantasy_correct_answer = 'n';
  best_final_fantasy = prompt('Is Final Fantasy 9 the best final fantasy of all time? Y or N');
  console.log(best_final_fantasy + ' y or n');
  if(best_final_fantasy === best_final_fantasy_correct_answer){
    alert('Final fantasy 7 all day!!!');}
  else{
    alert('Negative!!! Final Fantasy 9 was by far the absolute worst!');
  }
}

//* More questions utilizing flow control*//
function q6(){
  var fav_game_console = prompt('Whats your favorite gaming console? xbox, playstation, nintendo, or pc');
  console.log('what is the users fav game console');
  switch(fav_game_console){
  case 'xbox' :
    alert('Theres a smart man');
    break;
  case 'playstation' :
    alert('Well playstation has given us so many great titles havent they!');
    break;
  case 'nintendo' :
    alert('No matter what everyone loves nintendo');
    break;
  case 'pc' :
    alert('Master Race! Nothing else need be said.');
    break;
  default :
    alert('Try all lowercase in the spelling');
    break;
  }

  while(fav_game_console === '' || fav_game_console === null){
    fav_game_console = prompt('I know you can read');}
  console.log('user refuses to answer the question');
}

function q7(){
  var my_fav = prompt('What do you think is my favorite gaming console?');

  console.log('asking what' + my_fav + 'is');
  switch(my_fav){
  case 'xbox' :
    alert('All my friends are on xbox. Home of some good classics');
    break;
  case 'playstation' :
    alert('I love playstation but it has strayed from my favorite for many reasons.');
    break;
  case 'nintendo' :
    alert('Love it but nintendo keeps it too pg13 for me');
    break;
  case 'pc' :
    alert('Not my favorite but thats because steam sales break my pockets and then i dont even play half the games');
    break;
  default :
    alert('Try all lowercase in the spelling');
    break;
  }

  while(my_fav === '' || my_fav === null){
    my_fav = prompt('This is not that hard come on');}
  alert('See that was not so hard was it?');
  console.log('user did not input answer for' + my_fav);
}

function Allquestions(){
  q1();

  q2();

  q3();

  q4();

  q5();

  q6();

  q7();
};