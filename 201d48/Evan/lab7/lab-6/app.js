'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

function SalmonCookies(minCustomers, maxCustomers, avgSales, storeName) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSales = avgSales;
  this.storeName = storeName;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(getRandomInt(this.minCustomers, this.maxCustomers));
    }
  };
  this.calcCookiesPerHour = function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      var hourWorthOfCookies = Math.ceil(this.customersPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(hourWorthOfCookies);
      this.totalCookies += hourWorthOfCookies;
    }
  };
  this.render = function() {
    this.calcCookiesPerHour();
    var pikeUl = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookies} cookies`;
    pikeUl.appendChild(liEl);
  };
  allStores.push(this);
}

var pikePlace = new SalmonCookies (23, 65, 6.3,'Pike Place');
var seaTac = new SalmonCookies (3, 24, 1.2,'SeaTac Airport');
var seattleCenter = new SalmonCookies (11, 38, 3.7,'Seattle Center');
var capitolHill = new SalmonCookies (20, 38, 2.3,'Capitol Hill');
var alki = new SalmonCookies (2, 16, 4.6,'Alki');

pikePlace.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


