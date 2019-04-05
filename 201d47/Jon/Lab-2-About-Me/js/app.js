'use strict';

//-----------------------------------------------------------------------------
// Opening Alerts
//-----------------------------------------------------------------------------
var doYouKnowJon = confirm("Do you know Jon Rice?");

if(doYouKnowJon) {
    alert('We will see about that....');
}
    else {
    alert('Bye. You are missing out');
    }
if(doYouKnowJon) {
    alert('Please answer the following questions Yes or No');
}
console.log()
//-----------------------------------------------------------------------------
// Question 1 Growing Up
//-----------------------------------------------------------------------------
var grewUpAnswer = prompt('Did Jon grow up in Ohio?')
grewUpAnswer = grewUpAnswer.toLowerCase();
if(grewUpAnswer === 'yes') {
    alert('Correct! Good thing we are starting with the basics');
}   else if(grewUpAnswer === 'no') {
    alert ('Inncorrect? I thought you said you knew Jon...');
}   else {
    alert('Please enter EITHER Yes or No')
}
console.log('Knew where Jon grew up:', grewUpAnswer)
//-----------------------------------------------------------------------------
// Question 2 Profession
//-----------------------------------------------------------------------------
var professionAnswer = prompt('Did Jon want to be a Ortopedic Surgon?')
professionAnswer = professionAnswer.toLowerCase();
if(professionAnswer === 'yes') {
    alert('Correct! Huh there might be hope for you yet');
}   else if(professionAnswer === 'no') {
    alert ('Inncorrect? I thought you said you knew Jon...');
}   else {
    alert('Please enter EITHER Yes or No')
}
console.log('Knew what Jon wanted to be:', professionAnswer)
//-----------------------------------------------------------------------------
// Question 3 Siblings
//-----------------------------------------------------------------------------
var siblingsNumberAnswer = prompt('Does Jon have more than one sibling?')
siblingsNumberAnswer= siblingsNumberAnswer.toLowerCase();
if(siblingsNumberAnswer === 'yes') {
    alert('Inncorrect? It is obvious he only has a younger sister');
}   else if(siblingsNumberAnswer === 'no') {
    alert ('Correct! Childs play really..');
}   else {
    alert('Please enter EITHER Yes or No')
}
console.log('Knew how many siblings Jon has:', siblingsNumberAnswer)
//-----------------------------------------------------------------------------
// Question 4 Yoyoing
//-----------------------------------------------------------------------------
var yoyoingAnswer = prompt('Has Jon been Yoyoing for over 15 years?')
yoyoingAnswer = yoyoingAnswer.toLowerCase();
if(yoyoingAnswer === 'yes') {
    alert('Correct! Wow...yup.....that happened');
}   else if(yoyoingAnswer === 'no') {
    alert ('Inncorrect? Where have you been?');
}   else {
    alert('Please enter EITHER Yes or No')
}
console.log('Knew how long Jon has been Yoyoing:', yoyoingAnswer)
//-----------------------------------------------------------------------------
// Question 5 Marathons
//-----------------------------------------------------------------------------
var marathonsAnswer = prompt('Has Jon run a marathon within 3 hours?')
marathonsAnswer= marathonsAnswer.toLowerCase();
if(marathonsAnswer === 'yes') {
    alert('Inncorrect? He is not THAT crazy!');
}   else if(marathonsAnswer === 'no') {
    alert ('Correct! So many miles so little time.');
}   else {
    alert('Please enter EITHER Yes or No')
}
console.log('Knew how fast Jon has run a marathon:', marathonsAnswer)
