'use strict';

var salesTable = document.getElementById('cookie-table');

var allStores=[];
var oppHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var storeTotal = 0;
var totalPerHour = [];

function Store(name, minimumCustomers, maximumCustomers, cookiesPerCustomer) {
  this.storeName = name;
  this.minimumCustomers = minimumCustomers;
  this.maximunCustomers = maximumCustomers;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.totalDayCookies = 0;
  this.cookiesSoldPerHour = [];
  allStores.push(this);

  this.customerCount = function(){
    return Math.floor(Math.random() * (this.maximunCustomers - this.minimumCustomers + 1)) + this.minimumCustomers;
  };

  this.cookiesSold = function(){
    for(var i = 0; i < oppHours.length; i++) {
      var cookieNumber = Math.ceil(this.customerCount() * cookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookieNumber);
      this.totalDayCookies += cookieNumber;
    }
  };
  this.dailyTotals = function() {
    for(var i = 0; i < oppHours.length; i++) {
      this.totalDayCookies += this.cookiesSoldPerHour[i];
    }
  };
  this.dailyStats = function() {
    this.cookiesSold();
    this.dailyTotals();
    this.render();
  };
  this.render = function() {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.storeName;
    trElement.append(tdElement);
    for(var i = 0; i < oppHours.length; i++) {
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldPerHour[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalDayCookies;
    trElement.append(tdElement);
    salesTable.append(trElement);
  };
}

function renderHeader() {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Store';
  tr.append(th);
  for(var i = 0; i < oppHours.length; i++) {
    th = document.createElement('th');
    th.textContent = oppHours[i];
    tr.append(th);
  }
  th = document.createElement('th');
  th.textContent = 'Totals';
  tr.append(th);
  salesTable.append(tr);
}

function footerCalculator(){
  for(var i = 0; i < oppHours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesSoldPerHour[i];
    }
    storeTotal += hourlyTotal;
    totalPerHour[i] = hourlyTotal;
  }
}

function renderFooter() {
  var tFoot = document.createElement('tfoot');
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Hourly totals';
  trElement.append(tdElement);
  for(var i = 0; i < totalPerHour.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = totalPerHour[i];
    trElement.append(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = storeTotal;
  trElement.append(tdElement);
  tFoot.append(trElement);
  var salesFooter = document.getElementById('cookiefoot');

  salesFooter.append(tFoot);
}

renderHeader();

var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

firstAndPikeStore.dailyStats();
seatacStore.dailyStats();
seattleCenterStore.dailyStats();
capitolHillStore.dailyStats();
alkiStore.dailyStats();

footerCalculator();
renderFooter();



function addNewStore(event) {
  event.preventDefault();
  var newStoreName = event.target.storename.value;
  var newMaximunCustomers = event.target.maxcustomers.value;
  var newMinimumCustomers = event.target.mincustomers.value;
  var newAvgCookies = event.target.avgcookies.value;

  var newStore = new Store(newStoreName, newMinimumCustomers, newMaximunCustomers, newAvgCookies);

  newStore.dailyStats();

  var salesFooter = document.getElementById('cookiefoot');
  salesFooter.textContent = '';
  storeTotal = 0;
  footerCalculator();

  renderFooter();
}

var storeFormRef = document.getElementById('cookieform');
storeFormRef.addEventListener('submit', addNewStore);








