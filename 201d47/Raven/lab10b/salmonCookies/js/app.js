'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var referenceTable = document.getElementById('cookie-table');
var grandTotal = 0;
var hourlyTotalsArray = [];

function StoreSales(minimumCustomers, maximumCustomers, averageCookiesSold, id) {
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomer = maximumCustomers;
  this.averageCookiesSold = averageCookiesSold;
  this.id = id;
  this.cookiesSoldPerHour = [],
  this.totalCookies = 0;

  allStores.push(this);

  this.hourlyCustomer = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  this.hourlyTotals = function() {
    for ( var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.hourlyCustomer(this.minimumCustomers, this.maximumCustomer) * this.averageCookiesSold));
    }
  };
  this.dailyTotal = function(){
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  };
  this.dailyStats = function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  };
  this.render = function(){
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.id;
    trElement.append(tdElement);
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldPerHour[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookies;
    trElement.append(tdElement);
    referenceTable.append(trElement);
  };
}

function renderHeader() {
  var trHead = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Time of Sale';
  trHead.append(tdElement);
  for(var i = 0; i < hours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = (hours[i]);
    trHead.append(thElement);
  }
  var tdTotalHead = document.createElement('td');
  tdTotalHead.textContent = 'Grand totals';
  trHead.append(tdTotalHead);
  var referenceTable = document.getElementById('cookie-table');
  referenceTable.append(trHead);
}

function footerCalculator(){
  for(var i = 0; i < hours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesSoldPerHour[i];
    }
    grandTotal += hourlyTotal;
    hourlyTotalsArray[i] = hourlyTotal;
  }
}

function renderFooter() {
  var trFoot = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Hourly totals';
  trFoot.append(tdElement);
  for(var i = 0; i < hourlyTotalsArray.length; i++){
    var thElement = document.createElement('td');
    thElement.textContent = (hourlyTotalsArray[i]);
    trFoot.append(thElement);
  }
  var tdTotalFoot = document.createElement('td');
  tdTotalFoot.textContent = (grandTotal);
  trFoot.append(tdTotalFoot);
  var referenceTable = document.getElementById('footer');
  referenceTable.append(trFoot);
}

renderHeader();

var pike = new StoreSales(23, 65, 6.3, 'First and Pike');
var seaTac = new StoreSales(3, 24, 1.2, 'Seatac');
var seaCenter = new StoreSales(11, 38, 3.7, 'Seattle Center');
var capHill = new StoreSales(20, 38, 2.3, 'Capitol Hill');
var alki = new StoreSales(2, 16, 4.6, 'Alki Beach');


pike.dailyStats();
seaTac.dailyStats();
seaCenter.dailyStats();
capHill.dailyStats();
alki.dailyStats();

footerCalculator();
renderFooter();

function addNewStore(event){
  event.preventDefault();
  console.log('Let\'s add a new location!');

  var newStore = event.target.newstorename.value;
  var newMinimumCustomers = event.target.minimumcustomers.value;
  var newMaximumCustomers = event.target.maximumcustomers.value;
  var newAverageSales = event.target.averagecookiessold.value;

  var newStoreAdd = new StoreSales(newMinimumCustomers, newMaximumCustomers, newAverageSales, newStore);

  newStoreAdd.dailyStats();

  var referenceFooter = document.getElementById('footer');
  referenceFooter.textContent='';
  grandTotal = 0;
  footerCalculator();
  renderFooter();
}

var cookieFormReference = document.getElementById('cookieform');
cookieFormReference.addEventListener('submit', addNewStore);

var greenButton = document.getElementById('green');
var redButton = document.getElementById('red');
var clearButton = document.getElementById('clear');

function onGreenButtonClick() {
  event.preventDefault();
  var referencTable = document.getElementById('cookie-table');
  referencTable.setAttribute('class', 'green');
}
function onRedButtonClick() {
  event.preventDefault();
  var referenceTable = document.getElementById('cookie-table');
  referenceTable.setAttribute('class', 'red');
}
function onClearButtonClick() {
  var referencTable = document.getElementById('cookie-table');
  referencTable.removeAttribute('class');
}

greenButton.addEventListener('click', onGreenButtonClick);
redButton.addEventListener('click', onRedButtonClick);
clearButton.addEventListener('click', onClearButtonClick);
