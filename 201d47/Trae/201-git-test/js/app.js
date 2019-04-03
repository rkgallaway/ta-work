'use strict'; 

var ageGuess = prompt('Do you think I am younger than 30?');
var cleanAgeGuess = ageGuess.toLowerCase();
if(cleanAgeGuess === 'yes' || cleanAgeGuess === 'y') {
    alert('Correct');
} else {
    alert('Incorrect');
} console.log('Do you think I am younger than 30?' + cleanAgeGuess);

var videoGameQuestion = prompt('Do I like to play video games?');
var cleanVideoGameGuess = videoGameQuestion.toLowerCase();

if(cleanVideoGameGuess === 'yes' || cleanVideoGameGuess === 'y') {
    alert('Correct');
} else {
    alert('Incorrect');
} console.log('Do I like to play video games?' + cleanVideoGameGuess);

var petQuestion = prompt('Do you think I have pets?');
var cleanPetAnswer = petQuestion.toLowerCase();

if(cleanPetAnswer === 'no' || cleanPetAnswer === 'n') {
     alert('Correct');
} else {
    alert('Incorrect');
} console.log('Do you think I have pets?' + cleanPetAnswer);

var sportsGuess = prompt('Do you think I play sports?');
var cleanSportsAnswer = sportsGuess.toLowerCase();

if(cleanSportsAnswer === 'yes' || cleanSportsAnswer === 'y') {
    alert('Correct');
} else {
    alert('Incorrect');
} console.log('Do you think I play sports?' + cleanSportsAnswer);

var musicGuess = prompt('Do i like rock music?');
var cleanMusicAnswer = musicGuess.toLowerCase();

if(cleanMusicAnswer === 'yes' || cleanMusicAnswer === 'y') {
    alert('Correct');
} else {
    alert('Incorrect');
}
    console.log('Do i like rock music?' + cleanMusicAnswer);
