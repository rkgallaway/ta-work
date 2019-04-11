'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
var referenceTable = document.getElementById('cookie-stand');
var allStores = [];
var hourlyTotalsArray = [];
var grandTotal = 0;


function renderHeader() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Stores';
  trElement.append(thElement);
  for(var i = 0; i < hours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.append(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Running Totals'
  trElement.append(thElement);
  referenceTable.append(trElement);
}

function renderFooter (){
  getTotals();
  var tfootElement = document.createElement('tfoot');
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Running Totals';
  trElement.append(tdElement);
  for (var i = 0; i < hourlyTotalsArray.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotalsArray[i];
    trElement.append(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  trElement.append(tdElement);
  tfootElement.appendChild(trElement);
  referenceTable.appendChild(tfootElement);

}

function getTotals(){
  for(var i = 0; i < hours.length; i++){
    var hourTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourTotal += allStores[j].cookiesPerHour[i];
    }
    grandTotal += hourTotal;
    hourlyTotalsArray[i] = hourTotal;
  }
}

function tableGenerator(){
  for (var i = 0; i < allStores.length; i++){
    allStores[i].dailyStats();
  }
}

//DRY function for table --for class lab 8
function newElement(type, content, parent){
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

function StoreConstructor(id, minGuest, maxGuest, avgPerGuest){
  this.id = id;
  this.minGuest = minGuest;
  this.maxGuest = maxGuest;
  this.avgPerGuest = avgPerGuest;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);
  this.sumOfCookies = function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  };
  this.render = function(){
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.id;
    trElement.append(tdElement);
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesPerHour[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookies;
    trElement.append(tdElement);
    referenceTable.append(trElement);
  };
  this.custCount = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  this.dailyStoreTotals = function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custCount(this.minGuest, this.maxGuest) * this.avgPerGuest));
    }
  };
  this.dailyStats = function(){
    this.dailyStoreTotals();
    this.sumOfCookies();
    this.render();
  };

}

new StoreConstructor('First and Pike', 23, 65, 6.3);
new StoreConstructor('SeaTac Aiport', 3, 24, 1.2);
new StoreConstructor('Seattle Center', 11, 38, 3.7);
new StoreConstructor('Capitol Hill', 20, 38, 2.3);
new StoreConstructor('Alki Beach', 2, 16, 4.6);

renderHeader();
tableGenerator();
renderFooter();





