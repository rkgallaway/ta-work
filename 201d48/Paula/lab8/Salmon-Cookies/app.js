'use strict';


//global variable

var salesform = document.getElementById('salesform');
//hold all the instances of the stores
var allStores = [];
var hourlyTotals = [];
var grandTotal = 0;

//store hours array
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm','8pm'];

//var to call elementById
var storeTable = document.getElementById('store-table');


//source mdn math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//////////////////////function
// hourly store total per day
function getAllSumFooter (){
  for (var i = 0; i < storeHours.length; i++){
    var columnTotal = 0;
    for (var j = 0; j < allStores.length; j++){
      columnTotal += allStores[j].hourlySales[i];
    }
    grandTotal += columnTotal;
    hourlyTotals[i] = columnTotal;
  }
}

////////constructor
function Store (min, max, avg, name) {
  this.minCust = min;
  this.maxCust = max;
  this.salesPerCust = avg;
  this.storeName = name;

  //stores the array of sold cookies totals per hour/store
  this.hourlySales = [];
  this.totalDailySales = 0;

  //populating all stores array
  allStores.push(this);
}

////////////////functions
function renderHeaderRow(){
  var trEl = document.createElement ('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  //creating the store hours
  for ( var i = 0; i < storeHours.length; i ++){
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

function renderAllStores(){
  for (var i = 0; i < allStores.length; i++){
    allStores[i].allCall();
  }
}

//footer row function
function totalPerDayFooter (){
  var tFoot= document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var i = 0; i < storeHours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  tFoot.appendChild(trEl);
  storeTable.appendChild(tFoot);
}



///////////////////////prototypes; rendering all the inner part of the table - all the cookies each hour and total
//populating the hourly sales array that holds the cookies sold each hour


Store.prototype.hourlySalesCalc = function(){
  for (var i = 0; i < storeHours.length; i++){
    this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust));
  }
};

//record of sales per day each store
Store.prototype.dailyTotalCalculator = function(){
  this.totalDailySales = 0;
  for (var i = 0; i < storeHours.length; i++){
    this.totalDailySales += this.hourlySales[i];
  }
};

//rendering all inner partof the table
Store.prototype.allCall = function(){
  this.hourlySalesCalc();
  this.dailyTotalCalculator();
  this.render();
};

// render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
Store.prototype.render = function(){
  var trEl = document.createElement ('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);


  for ( var i = 0; i < storeHours.length; i ++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

//////////////////////event handler
function handleSalesForm (event){
  event.preventDefault();

  var newMin = event.target.minimumcustomer.value;
  var newMax = event.target.maximumcustomer.value;
  var newAvg = event.target.averagetotal.value;
  var newName = event.target.storename.value;

  new Store (newMin, newMax, newAvg, newName);

  grandTotal = 0;

  storeTable.innerHTML = '';

  renderHeaderRow();
  renderAllStores();
  getAllSumFooter();
  totalPerDayFooter();
  
}

// ////////////////event validator

//   if (!event.target.says.value|| !event.target.who.value){
//     return alert('Fiels cannot be empty!');
//   };

//new instances,
new Store (23, 65, 6.3, 'First and Pike');
new Store (3, 24, 1.2, 'Seatac Airport');
new Store (11, 38, 3.7, 'Seattle Center');
new Store (20, 38, 2.3, 'Capital Hill');
new Store (2, 16, 4.6, 'Alki');




renderHeaderRow();
renderAllStores();
getAllSumFooter();
totalPerDayFooter();


////////////////event listener
salesform.addEventListener('submit', handleSalesForm);











/////////////////////////how to disect

//global and local variable

//constructor function
// min, max, avg

//render the table
// header row that holds the times

//helper function that calcs random number between a min and max


