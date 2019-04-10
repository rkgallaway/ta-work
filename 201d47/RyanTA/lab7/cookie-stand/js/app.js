'use strict';
var storeTable = document.getElementById('salmon-cookies');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

function Store(storeLocation, minHourlyCustomer, maxHourlyCustomer, avgCookiePerCustomer) {
  this.storeLocation = storeLocation;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);
}

new Store('First and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3)
new Store('Alki', 2, 16, 4.6);

Store.prototype.custCount = function () {
  for (var i = 0; i < hours.length; i++) {
    var storeCustCount = Math.ceil(Math.random()*this.maxHourlyCustomer) + this.minHourlyCustomer;
    this.customersPerHour.push(storeCustCount);
  }
}

Store.prototype.cookieCount = function(){
  for (var i = 0; i < hours.length; i++){
    var storeCookieCount = Math.ceil(this.customersPerHour[i] * this.avgCookiePerCustomer);
    this.cookiesPerHour.push(storeCookieCount);
    // console.log(storeCookieCount);
  }
}

Store.prototype.sumOfCookies = function () {
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
    // console.log(this.totalCookies);
  }
  return this.cookiesPerHour;
}
function callAllStores(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].custCount();
    allStores[i].cookieCount();
    allStores[i].sumOfCookies();
  }
}
callAllStores();



Store.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeLocation;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookies;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}

function tableHeader (){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl. textcontent = '';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = 'Daily Local Total';
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
}

function callRender () {
  for(var i = 0; i < allStores.length; i++){
    console.log(allStores[i])
    allStores[i].render();
  }
}

tableHeader();
callRender();
