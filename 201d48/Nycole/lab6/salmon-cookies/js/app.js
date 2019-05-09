    'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allPlaces = [];
var locationTable = document.getElementById('Cookies');
var cookiesTwo = 0;
var hourlyTot = [0];

var formL = document.getElementById('new-location');

function LocationS(location, minimumC, maximumC, averageSales){
  this.location = location;
  this.minimumC = minimumC;
  this.maximumC = maximumC;
  this.averageSales = averageSales;
  this.salesTwo = 0;
  this.salmons = [];

  allPlaces.push(this);
}

function yetAnother(){
  allPlaces[allPlaces.length - 1].cookiesSold();
  for(var i = 0; i < allPlaces.length; i++){
    allPlaces[i].render();
  }
}


function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}


new Locations('Pike Place', 23, 65, 6.3);
new Locations('Alki', 2, 16, 4.6);
new Locations('SeaTac', 3, 24, 1.2);
new Locations('CapHill', 20, 38, 2.3);
new Locations('SeaCenter', 11, 38, 3.7);



Locations.prototype.cookiesSold = function(){
  for(var i = 0; i < time.length; i++){
    this.salmons.push(Math.ceil(getRandomInt(this.minimumC, this.maximumC) * this.averageSales));
    cookiesTwo = cookiesTwo + this.salmons[i];
    hourlyTot[i] = hourlyTot[i] + this.salmons[i];
    this.salesTwo = this.salesTwo + this.salmons[i];

  }
};

Locations.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var i = 0; i < time.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.salmons[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.salesTwo;
  trEl.appendChild(tdEl);
  locationTable.appendChild(trEl);
};

headerRow();
for(var i = 0; i < allPlaces.length; i++){
  allPlaces[i].cookiesSold();
  allPlaces[i].render();
}
rowFoot();

function headerRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = '';
  trEl.appendChild(thEl);
  for(var i = 0; i < time.length; i++){

    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);

  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  locationTable.appendChild(trEl);
}

function rowFoot(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = 'Total Sales';
  trEl.appendChild(tdEl);
  for(var i = 0; i < time.length; i++){

    tdEl = document.createElement('th');
    tdEl.textContent = hourlyTot[i];
    trEl.appendChild(tdEl);

  }
  tdEl = document.createElement('th');
  tdEl.textContent = cookiesTwo;
  trEl.appendChild(tdEl);

  locationTable.appendChild(trEl);
}

render();



function inputL(event){
  event.preventDefault();
  console.log('string event triggered');
  var location = event.target.location.value;
  var minimumC = parseInt(event.target.minCusto.value);
  var maximumC = parseInt(event.target.maxCusto.value);
  var averageSales = parseInt(event.target.avgCooky.value);
  new Locations(location, minimumC, maximumC, averageSales);
  renderTable();
}

formL.addEventListener('submit', inputL);

function renderTable(){
  locationTable.innerHTML = '';
  headerRow();
 yetAnother();
  rowFoot();
}

