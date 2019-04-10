'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var tableReference = document.getElementById('cookie-stand');

function getRandomNumber(minimum,maximum) {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
   return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
} 

// var firstAndPike = {
//     id: 'first-and-pike',
//     minimumCustomer: 23,
//     maximumCustomer: 65,
//     averageCookies: 6.3,
//     hourlyConsumptionArray: [],
    
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour() * this.averageCookies); 
//     },
//     render: function() {
//         var ulElement = document.getElementById(this.id);

//         var sum = 0;
//         for(var i = 0; i < hours.length; i++) {
//             var liElement = document.createElement('li');
//             var consumption = this.getAverageConsumption();
//             sum += consumption;
//             this.hourlyConsumptionArray.push(consumption);
//             liElement.textContent = `${hours[i]} : ${consumption} Cookies`;
//             ulElement.append(liElement);
//             }
//     liElement.textContent = `Total for the day in this store is ${sum} cookies`;
//     ulElement.append(liElement);
//     }
// };

// firstAndPike.render();

// var seatac = {
//     id: 'sea-tac',
//     minimumCustomer: 3,
//     maximumCustomer: 24,
//     averageCookies: 1.2,
//     hourlyConsumptionArray: [],
    
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour() * this.averageCookies); 
//     },
//     render: function() {
//         var ulElement = document.getElementById(this.id);

//         var sum = 0;
//         for(var i = 0; i < hours.length; i++) {
//             var liElement = document.createElement('li');
//             var consumption = this.getAverageConsumption();
//             sum += consumption;
//             this.hourlyConsumptionArray.push(consumption);
//             liElement.textContent = `${hours[i]} : ${consumption} Cookies`;
//             ulElement.append(liElement);
//             }
//     liElement.textContent = `Total for the day in this store is ${sum} cookies`;
//     ulElement.append(liElement);
//     }
// };

// seatac.render();

// var seattleCenter = {
//     id: 'seattle-center',
//     minimumCustomer: 11,
//     maximumCustomer: 38,
//     averageCookies: 3.7,
//     hourlyConsumptionArray: [],
    
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour() * this.averageCookies); 
//     },
//     render: function() {
//         var ulElement = document.getElementById(this.id);

//         var sum = 0;
//         for(var i = 0; i < hours.length; i++) {
//             var liElement = document.createElement('li');
//             var consumption = this.getAverageConsumption();
//             sum += consumption;
//             this.hourlyConsumptionArray.push(consumption);
//             liElement.textContent = `${hours[i]} : ${consumption} Cookies`;
//             ulElement.append(liElement);
//             }
//     liElement.textContent = `Total for the day in this store is ${sum} cookies`;
//     ulElement.append(liElement);
//     }
// };

// seattleCenter.render();

// var capitolHill = {
//     id: 'capitol-hill',
//     minimumCustomer: 20,
//     maximumCustomer: 38,
//     averageCookies: 2.3,
//     hourlyConsumptionArray: [],
    
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour() * this.averageCookies); 
//     },
//     render: function() {
//         var ulElement = document.getElementById(this.id);

//         var sum = 0;
//         for(var i = 0; i < hours.length; i++) {
//             var liElement = document.createElement('li');
//             var consumption = this.getAverageConsumption();
//             sum += consumption;
//             this.hourlyConsumptionArray.push(consumption);
//             liElement.textContent = `${hours[i]} : ${consumption} Cookies`;
//             ulElement.append(liElement);
//             }
//     liElement.textContent = `Total for the day in this store is ${sum} cookies`;
//     ulElement.append(liElement);
//     }
// };

// capitolHill.render();

// var alki = {
//     id: 'alki',
//     minimumCustomer: 2,
//     maximumCustomer: 16,
//     averageCookies: 4.6,
//     hourlyConsumptionArray: [],
    
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour() * this.averageCookies); 
//     },
//     render: function() {
//         var ulElement = document.getElementById(this.id);

//         var sum = 0;
//         for(var i = 0; i < hours.length; i++) {
//             var liElement = document.createElement('li');
//             var consumption = this.getAverageConsumption();
//             sum += consumption;
//             this.hourlyConsumptionArray.push(consumption);
//             liElement.textContent = `${hours[i]} : ${consumption} Cookies`;
//             ulElement.append(liElement);
//             }
//     liElement.textContent = `Total for the day in this store is ${sum} cookies`;
//     ulElement.append(liElement);
//     }
// };

// alki.render();

// var SeatacAirport = {
//     id: 'Seatac',
//     minimumCustomer: 23,
//     maximumCustomer: 65,
//     avgerageCookies: 6.3,
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomers, this.maximumCustomers);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour * this.averageCookies);
//     },
//     render: function() {
//         //1 - Get reference to the DOM
//         var ulElement = document.getElementById('first-pike');

//         var sum = 0;
//         for(var i = 0; i < storeHours.length; i++) {
//         //2 - Create the new element + add content
//         var liElement = document.createElement('li');

//         //2.5 - Add content
//         // Calculate average cookies per hour
//         var consumption = this.getAverageConsumption();

//         sum += consumption;
//         this.hourlyConsumptionArray.push(consumption);

//         liElement.textContent = '${storeHours [i]}' : '${consumption}' Cookies';
//         //3 Add the element to the DOM
//         ulElement.append(liElement);
//     }
//     var totalLi.textContent = 'Total for the day in this store is ${sum} cookies';
//     ulElement.append(totalLi);
//     }
// };

// var firstAndPike = {
//     id: 'first-and-pike',
//     minimumCustomer: 23,
//     maximumCustomer: 65,
//     avgerageCookies: 6.3,
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomers, this.maximumCustomers);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour * this.averageCookies);
//     },
//     render: function() {
//         //1 - Get reference to the DOM
//         var ulElement = document.getElementById('first-pike');

//         var sum = 0;
//         for(var i = 0; i < storeHours.length; i++) {
//         //2 - Create the new element + add content
//         var liElement = document.createElement('li');

//         //2.5 - Add content
//         // Calculate average cookies per hour
//         var consumption = this.getAverageConsumption();

//         sum += consumption;
//         this.hourlyConsumptionArray.push(consumption);

//         liElement.textContent = '${storeHours [i]}' : '${consumption}' Cookies';
//         //3 Add the element to the DOM
//         ulElement.append(liElement);
//     }
//     var totalLi.textContent = 'Total for the day in this store is ${sum} cookies';
//     ulElement.append(totalLi);
//     }
// };

// var firstAndPike = {
//     id: 'first-and-pike',
//     minimumCustomer: 23,
//     maximumCustomer: 65,
//     avgerageCookies: 6.3,
//     getRandomCustomersPerHour: function(){
//         return getRandomNumber(this.minimumCustomers, this.maximumCustomers);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour * this.averageCookies);
//     },
//     render: function() {
//         //1 - Get reference to the DOM
//         var ulElement = document.getElementById('first-pike');

//         var sum = 0;
//         for(var i = 0; i < storeHours.length; i++) {
//         //2 - Create the new element + add content
//         var liElement = document.createElement('li');

//         //2.5 - Add content
//         // Calculate average cookies per hour
//         var consumption = this.getAverageConsumption();

//         sum += consumption;
//         this.hourlyConsumptionArray.push(consumption);

//         liElement.textContent = '${storeHours [i]}' : '${consumption}' Cookies';
//         //3 Add the element to the DOM
//         ulElement.append(liElement);
//     }
//     var totalLi.textContent = 'Total for the day in this store is ${sum} cookies';
//     ulElement.append(totalLi);
//     }
// };

// var firstAndPike = {
//     id: 'first-and-pike',
//     minimumCustomer: 23,
//     maximumCustomer: 65,
//     avgerageCookies: 6.3,
//     getRandomCustomersPerHour: function(){
        // return getRandomNumber(this.minimumCustomers, this.maximumCustomers);
//     },
//     getAverageConsumption: function () {
//         return Math.round(this.getRandomCustomersPerHour * this.averageCookies);
//     },
//     render: function() {
//         //1 - Get reference to the DOM
//         var ulElement = document.getElementById('first-pike');

//         var sum = 0;
//         for(var i = 0; i < storeHours.length; i++) {
//         //2 - Create the new element + add content
//         var liElement = document.createElement('li');

//         //2.5 - Add content
//         // Calculate average cookies per hour
//         var consumption = this.getAverageConsumption();

//         sum += consumption;
//         this.hourlyConsumptionArray.push(consumption);

//         liElement.textContent = '${storeHours [i]}' : '${consumption}' Cookies';
//         //3 Add the element to the DOM
//         ulElement.append(liElement);
//     }
//     var totalLi.textContent = 'Total for the day in this store is ${sum} cookies';
//     ulElement.append(totalLi);
//     }
// };

// for(var i = 0; i < hours.length; i++){
//     firstAndPike.cookiesPerHour.push(Math.ceil(firstAndPike.customerCount(firstAndPike.minCustomer, firstAndPike.maxCustomer) * firstAndPike.avgCookieSale));
// },
// render: function (){
    
// }
// //acp
// //find total cookies per hour
// //render to dom
// //add four other stores data

// function Dog(name, age, wasStray) {
//     console.log('I AM A CONSTRUCTOR, ALSO, KALI IS CUTE');
//     // Vinicio - when we use this inside a constructor function, we are talking about the new
//     // object we are creating (un-initialized object)
  
//     // Vinicio - Properties
//     this.name = name;
//     this.age = age;
//     this.wasStray = wasStray;
  
//     // Vinicio - Methods
//     this.run = function() {
//       console.log(`${name} runs like the wind`);
//     };
//     this.bark =  function() {
//       console.log('WOOF');
//     };
//   }
  
//   Dog.prototype.sayHi = function() {
//       this.bark();
//       console.log(`Hello, I'm ${this.name}, and I am ${this.age} old`);
//       this.run();
  
  
//   var referenceTable = document.getElementById('dog-table');
//   referenceTable.append(tr);
//   }
  

//   function renderHeader() {
//       var headings = ['name', 'age', 'wasStray'];

//       for(var i = 0; i < headings.length; i++) {
//           car th = document.createElement('th');
//           th.textContent = heading[i];
//           tr.append(th);

//           //before appending anything, I want to add

//       }
//       var tr = document.createElement('tr'); //always a start

//       var referenceTable = document.getElementByID('dog-table'); //always the end
//       referenceTable.append(tr);
//   }

//   var kali = new Dog('kali', 2, true);
//   var gary = new Dog('gary', 3, false);
//   var odin = new Dog('odin', 1, false);
//   var charlotte = new Dog('charlotte', 1, false);

//   var allDogs = [kali,gary, odin, charlotte]; //hint

//   for(var i = 0; i = 0; i < allDogs.length; i++) {
//       allDogs[i].render(); //all dogs will add themselves to the DOM
//   }

//   //after rendering all dogs, then you can render the last row

//   Dog.prototype.render = function () {
//       //render 1 row of table
//       var tr = document.createElement('tr'); //step 1
//       //step 2 create entire row - in your code this has to be a loop (as many elements as in array)
//       var tdName = document.createElement('td');
//       tdName.textContext = this.name;
//       tr.append(tdName); // im appending this to the row not the dom
//       //--------------------------------

//   }
function SalesByLocation(id, minimumCustomer, maximumCustomer, averageCookies) {
    this.id = id;
    this.minimumCustomer = minimumCustomer;
    this.maximumCustomer = maximumCustomer;
    this.averageCookies = averageCookies;
    this.hourlyConsumptionArray = [];

    this.getRandomCustomersPerHour = function () {
        return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
    };
    this.getAverageConsumption = function () { 
        return Math.round(this.getRandomCustomersPerHour() * this.averageCookies);
    };

    this.render = function() {
        var sum = 0;
        var trElement = document.createElement('tr');
        var tdElement = document.createElement('td');
        tdElement.textContent = this.id;
        trElement.append(tdElement);

        for(var i = 0; i < hours.length; i++) {
            tdElement = document.createElement('td');
            var consumption = this.getAverageConsumption();
            sum += consumption;
            this.hourlyConsumptionArray.push(consumption);
            tdElement.textContent = consumption;
            trElement.append(tdElement);
        }
        tdElement = document.createElement('td');
        tdElement.textContent = sum;
        trElement.append(tdElement);
        tableReference.append(trElement);
    } 
};

var allSalesByLocation = [firstAndPike, seatac, seattleCenter, capitolHill, alki];
var firstAndPike = new SalesByLocation('first-and-pike', 23, 65, 6.3);
var seatac = new SalesByLocation('seatac', 3, 24, 1.2);
var seattleCenter = new SalesByLocation('seattle-center', 11, 38, 3.7);
var capitolHill = new SalesByLocation('capitol-hill', 20, 38, 2.3);
var alki = new SalesByLocation('alki', 2, 16, 4.6);

function tableHeader () {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = 'Location';
    trElement.append(thElement);
    for (var i = 0; i < hours.length; i++) {
        thElement = document.createElement('th');
        thElement.textContent = hours[i];
        trElement.append(thElement);
    };
    thElement = document.createElement('th');
    thElement.textContent = 'Totals';
    trElement.append(thElement);
    tableReference.append(trElement);
};

tableHeader();
firstAndPike.render();
seatac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

// SalesByLocation.render();

// var referenceTable = document.getElementById(table)
// for (var i = 0; i = 0; i < SalesByLocation.length; i++) {
// SalesByLocation[i].render();

// SalesByLocation.prototype.render = function() {
//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
//     td.textContext = this.
// }