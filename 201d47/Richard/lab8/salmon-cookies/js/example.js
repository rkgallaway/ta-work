'use strict';

var storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

function getRandomNumber(minimum, maximum) {
  // Vinicio - the use of ceil and floor may not be as neccesary for our current code
  // minimum = Math.ceil(minimum);
  // maximum = Math.floor(maximum);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; 
}

// Vinicio - here, I'm using camelcase
var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: 6.3,
  hourlyConsupmtionArray: [],
  getRandomCookiesPerHour: function() {
    return getRandomNumber(this.minimumCustomers, this.maximumCustomers);
  },
  getAverageConsumption: function() {
    return Math.round(this.getRandomCookiesPerHour() * this.averageCookies);
  },
  render: function() {
    // 1 - Get a Reference to the DOM
    var ulElement = document.getElementById('first-pike');

    var sum = 0;
    for(var i = 0; i < storeHours.length; i++) {
      // 2 - Create the new element
      var liElement = document.createElement('li');

      // 2.5 - Add content
      var consumption = this.getAverageConsumption();

      sum += consumption;
      this.hourlyConsupmtionArray.push(consumption);

      liElement.textContent = `${storeHours[i]} : ${consumption} Cookies`;

      // 3 - Add the element to the DOM
      ulElement.append(liElement);
    }
    
    var totalLi = document.createElement('li');
    totalLi.textContent = `Total for the day in this store is ${sum} cookies`;
    ulElement.append(totalLi);
  }
};

firstAndPike.render();

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

//?fixed function 
function CookieStore(minCustomer, maxCustomer, avgCookieSale, id){
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.id = id;
  this.consumptionArray = [];
  this.randomCookiesPerHour = function(){
      return getRandomNumber(this.minCustomer, this.maxCustomer);
  };
  this.cookieSold = function(){
      return Math.round(this.randomCookiesPerHour() * this.avgCookieSale); 
  };
  this.render = function(){
    var trElement = document.getElementById('num');
    var sum = 0;
    for(var i =0; i < hours.length; i++){
      var tdElement = document.createElement('td');
      var consumption = this.cookieSold();
      sum += consumption;
      this.consumptionArray.push(consumption);
      tdElement.textContent = this.consumptionArray[i];
      trElement.append(tdElement);
    }





    //bad code
    this.render = function(){
      var table = document.getElementById('hours-row');
      var tr = document.createElement('tr');
      table.append(tr);
      var sum = 0; 
      for(var i = 0; i < hours.length; i++){
          var td = document.createElement('td');
          //math
          var consumption = this.cookieSold(); 
          sum += consumption;
          this.consumptionArray.push(consumption);
          td.textContent = this.consumptionArray[i];
          tr.append(td);
      };
      var cookieSoldTable = document.getElementById('num');
      cookieSoldTable.append(tr);
      
      var totaltd = document.createElement('td');
      var totaltr = document.createElement('tr');
      totaltd.textContent = sum;
      totaltr.append(totaltd);
      //create a loop for locations so you can add them to the table
      for(var i = 0; i < 5; i++){
          var tr = document.createElement('tr');
          th.textContent = locations[i];
          tr.append(th);
      };
      var locationsrow = document.getElementById('locations');
      locationsrow.append(tr);
  };



