'use strict';
//--------------------------------------------------------------------------------------
// TABLES
//--------------------------------------------------------------------------------------
function Dog(name, age, wasStray) { // Vinicio - this will be a store for you
  console.log('I AM A CONSTRUCTOR, ALSO, KALI IS CUTE');
  // Vinicio - when we use this inside a constructor function, we are talking about the new
  // object we are creating (un-initialized object)

  // Vinicio - Properties
  this.name = name;
  this.age = age;
  this.wasStray = wasStray;
  this.magicalNumbers = [1,2,3];

  // Vinicio - Methods
  this.run = function() {
    console.log(`${name} runs like the wind`);
  };
  this.bark =  function() {
    console.log('WOOF');
  };
}

Dog.prototype.sayHi = function() {
    this.bark();
    console.log(`Hello, I'm ${this.name}, and I am ${this.age} old`);
    this.run();
}

Dog.prototype.render = function() {
  // Vinicio - this is going to render one row of the table

  // 1 - Create the row
  var tr = document.createElement('tr');
  //--------------------------------------------------------------------------------------
  // 2 - Create the entire row - In you code, this has to be a LOOP
  //--------------------------------------------------------------------------------------
  var tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.append(tdName); // Vinicio - I'm appending this to the row, not to the dom
  //--------------------------------------------------------------------------------------
  var tdAge = document.createElement('td');
  tdAge.textContent = this.age;
  tr.append(tdAge); // Vinicio - I'm appending this to the row, not to the dom
  //--------------------------------------------------------------------------------------
  var tdStray = document.createElement('td');
  tdStray.textContent = this.wasStray;
  tr.append(tdStray); // Vinicio - I'm appending this to the row, not to the dom
  //--------------------------------------------------------------------------------------

  // VINICIO - BEFORE APPENDING A SINGLE DOG I WANT TO ADD HIS/HER TOTAL

  var referenceTable = document.getElementById('dog-table');
  referenceTable.append(tr);
}

function renderHeader() {
  var headings = ['Name', 'Age', 'Was Stray'];

  var tr = document.createElement('tr'); // vinicio - always a start

  for(var i = 0; i < headings.length; i++) { 
    // Vinicio - this loop will be very similar to the one you need for your cookies
    var th = document.createElement('th');
    th.textContent = headings[i];
    tr.append(th); 
  }

  var referenceTable = document.getElementById('dog-table'); // vinicio - always the end
  referenceTable.append(tr);
}

var kali = new Dog('kali', 2, true);
var gary = new Dog('gary', 3, false);
var odin = new Dog('odin', 1, false);
var charlotte = new Dog('charlotte', 1, false);

var allDogs = [kali, gary, odin, charlotte];// Vinicio - Hint hint wink wink ;)


renderHeader();
for(var i = 0; i < allDogs.length; i++) {
  allDogs[i].render();
}

// VINICIO - AFTER YOU RENDER ALL THE DOGS, YOU CAN RENDER THE FINAL ROW

// Option 1 : Make a function
// Option 2 : Use a loop

for(var c = 0;c < 3 ;c++) { // Vinicio - fix the for loop condition
  var columnSum = 0;

  for(var i = 0; i < allDogs.length; i++) { // Vinicio - loop over all the dogs
    // console.log(allDogs[i].name);
    // console.log(allDogs[i].magicalNumbers[c]);
    columnSum += allDogs[i].magicalNumbers[c];
  }
  console.log(`The sum for column ${c} is ${columnSum}`);
}


/**
 * Things I know I need to do in order to add a new dog
 * 
 * Somehow connect to the DOM to be able to extract the information of the dog [X]
 *      How?
 *      Do I have some code that does somethin similar?
 * 
 * Somehow connect the form to be able to execute some code when the user clicks the button [X]
 * 
 * Once i have a dog in the system add it to the table of dogs
 *    (HINT n_O): Once I have a new _store_ re-calculate the total values for the table
 */

function addNewDog(event) {
  // Vinicio - event contains information about what the user did
  event.preventDefault(); // Vinicio - this will prevent the browser from reloading

  // Vinicio - for now, we only care about the target
  var newName = event.target.dogname.value;
  var newAge = event.target.dogage.value;
  var newWasStray = event.target.dogwasstray.checked;

  // Vinicio - this is why we wanted a constructor :)
  var newDog = new Dog(newName, newAge, newWasStray);

  newDog.render();
  allDogs.push(newDog); // HINT : you need this for your cookies

  // Easter egg for today's lab n_O : How to clear an element's content
  // var referenceTable = document.getElementById('dog-table'); 
  // referenceTable.textContent = "";
}

 var dogFormReference = document.getElementById('dog-form');
 // Vinicio - event is just a function
 dogFormReference.addEventListener('submit', addNewDog);


 // ------------------------------------------------------------------------------------
 // STYLE CHANGER
 // ------------------------------------------------------------------------------------
var redGreenButton = document.getElementById('aqua');
var grayButton = document.getElementById('gray');
var clearButton = document.getElementById('clear');

function onRedGreenButtonClick() {
  var referenceTable = document.getElementById('dog-table');
  referenceTable.setAttribute('class', 'aqua');
  referenceTable.setAttribute('kali', 'cute');
}

function onGrayButtonClick() {
  var referenceTable = document.getElementById('dog-table');
  referenceTable.setAttribute('class', 'gray');
}

function onClearButtonClick() {
  var referenceTable = document.getElementById('dog-table');
  referenceTable.removeAttribute('class');
}

redGreenButton.addEventListener('click', onRedGreenButtonClick);
grayButton.addEventListener('click', onGrayButtonClick);
clearButton.addEventListener('click', onClearButtonClick);
 // ------------------------------------------------------------------------------------
 referenceTable = document.getElementById('footer');
  referenceTable.textContent = '';
  grandTotal = 0;

  newStore.dailySalesData();
  calculateFooterTotals();
  allStores.push(newStore);
  