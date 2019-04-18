'use strict';

var peopleArray = [];

function CodePeople(name, role, course){
  this.name = name;
  this. role = role;
  this.course = course;
  this.isAwesome = true;
  peopleArray.push(this);
}

new CodePeople('Ryan', 'ta', 201);
new CodePeople('AJ', 'student', 201);
new CodePeople('Vinicio', 'instructor', 201);


// Ryan - why doesn't ths work?
localStorage.setItem('peoples', peopleArray);

// Ryan - using JSON.stringify, convert to correct JSON format and can save
var stringifiedPeople = JSON.stringify(peopleArray);
localStorage.setItem('people', stringifiedPeople);


// Ryan - why isn't this usable JavaScript?
localStorage.getItem('people');

// Ryan - using JSON.parse, convert data back to usable javaScript
var peopleParsed = JSON.parse(localStorage.getItem('people'));
console.log(peopleParsed);

