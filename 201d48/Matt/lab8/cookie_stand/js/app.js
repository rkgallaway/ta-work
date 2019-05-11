'use strict';

// source from MDN math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var hourlyTotals = [];
var grandTotal = 0;
var newStoreEntry = document.getElementById('new-store-entry');
var submitNewStore = document.getElementById('submit-new-store');


// windows into the dom
var storeTable = document.getElementById('store-table');

// Constructor
function Store(name, min, max, avg){
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgSalePer = avg;
  this.hourlySales = [];
  this.custHour = [];
  this.cookiesDay = 0;
  this.hourlyCustCalc = function(){
    for(var i = 0; i < hours.length; i++){
      this.custHour.push(calcRandomCustomers(this.minCust, this.maxCust));
    }
  };
  this.hourlySalesCalc = function(){
    this.hourlyCustCalc();
    for(var i = 0; i < hours.length; i++){
      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgSalePer));
    }
  };
  this.cookiesDayCalc = function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesDay += this.hourlySales[i];
    }
  };
  this.render = function(){
    this.hourlySalesCalc();
    this.cookiesDayCalc();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlySales[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesDay;
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  };
  allStores.push(this);
  // for(var i = 0; i < allStores.length; i++) {
// 	// 	console.log(allStores[i]);
// 	}
}

function calcRandomCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

function tableHeader(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement ('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);




}

function renderAll(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}

function hourlyTotalsCalc(){
  for( var i = 0; i < hours.length; i++){
    var hourTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourTotal += allStores[j].hourlySales[i];
    }
    grandTotal += hourTotal;
    hourlyTotals[i] = hourTotal;

  }
}

function tableFooter(){
  var tFoot = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for(var i = 0; i < hours.length; i++){
    tdEl = document.createElement ('td');
    tdEl.textContent = hourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  tFoot.appendChild(trEl);
  storeTable.appendChild(tFoot);
}




// instantiate stores
new Store('Pike Store', 23, 65, 6.3);
new Store('Seatac Store', 3, 24, 1.2);
new Store('Seattle Center Store', 11, 38, 3.7);
new Store('Capitol Hill Store', 20, 38, 2.3);
new Store('Alki Store', 2,16,4.6);

newStoreEntry.addEventListener('click', function(){
  event.preventDefault();
  newStoreEntry.innerHTML = ' ';
  console.log('User successfully entered a new store');
});

tableHeader();

renderAll();
hourlyTotalsCalc();
tableFooter();



