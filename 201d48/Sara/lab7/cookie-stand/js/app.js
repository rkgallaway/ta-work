'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

function calcRandomCustomers(min, max) {
    // following line from MDN docs on Math.random
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var storeTable = document.getElementById('storeTable');

// CONSTRUCTOR //
function Store (name, min, max, avg) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgCookieSales = avg;
  this.hourlySales = [];
  this.totalCookiesForTheDay = 0;
  this.hourlySalesCalc = function() {
    for (var i = 0; i < hours.length; i++){
    	this.hourlySales.push(Math.ceil(calcRandomCustomers(this.minCustomers, this.maxCustomers) * this.avgCookieSales));
  	}
	};
	this.totalCookiesForTheDayCalc = function(){
		for(var i = 0; i < hours.length; i++){
			this.totalCookiesForTheDay += this.hourlySales[i];
		}
	};
	this.render = function () {
    // make a tr
    var trEl = document.createElement('tr'); //this is the equivalent of typing <tr>
		
		// create, content, append for "Name"
		var tdEl = document.createElement('td'); //equivalent of typing <td>
    tdEl.textContent = this.name; //equivalent of: <td> "Text Content" </td>
		trEl.appendChild(tdEl);

		for (var i = 0; i < hours.length; i++)
		{ 
			var tdEl = document.createElement('td'); //equivalent of typing <td>
			tdEl.textContent = this.hourlySales[i]; //equivalent of: <td> "Text Content" </td>
			trEl.appendChild(tdEl);
		}
	

		// //create the next element
		// tdEl = document.createElement('td');
		// tdEl.textContent = "5AM";
		// trEl.appendChild(tdEl);

		// //create the next element
		// tdEl = document.createElement('td');
		// tdEl.textContent = ;
		// trEl.appendChild(tdEl);
    
    // append the tr to the table
    storeTable.appendChild(trEl);
  };

	this.allCall = function() {
		this.hourlySalesCalc();
		this.totalCookiesForTheDayCalc();
		this.render();
		
	}
	allStores.push(this);
};

var pikeStore = new Store('First and Pike', 23, 65, 6.3);
var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitalHillStore = new Store('Capital Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

for (var i = 0; i < allStores.length; i++)
{
	allStores[i].allCall();
}