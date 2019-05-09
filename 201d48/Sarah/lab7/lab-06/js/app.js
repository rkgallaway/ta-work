// This is the array of all data put through the constructor
var allData = [];

// This is linking the tabular data and headers to sales.html
var locationTable = document.getElementById('location-data');

// This is an array holding all hours the stores are open
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// This calculates a random number and is called inside the constructor
function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Constructor
function allLocations(location, minCust, maxCust, averageSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageSales = averageSales;
  this.hourlySales = [];
  
  this.hourlySalesCalc = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  }
  this.render = function () {
    // this is appending the hourly sales in each row
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for "Name"
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    //
    for (var i = 0; i < this.hourlySales.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlySales[i];
      trEl.appendChild(tdEl);
    };

    //this is appending the total data for each location
    //total data --> create / content / append
    var totalLocationHourlySales = 0;

    for (i = 0; i < this.hourlySales.length; i++) {
      totalLocationHourlySales += this.hourlySales[i];
    }

    var totalEl = document.createElement('td');
    console.log('totalEl is', totalEl);
    totalEl.textContent = totalLocationHourlySales;
    trEl.appendChild(totalEl);
    // append the tr to the table
    locationTable.appendChild(trEl);

  };
  allData.push(this);

  this.hourlySalesCalc();
};


console.log(allData);


function makeHeaderRow() {
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  thEl = document.createElement('th');
  thEl.textContent = '----';
  trEl.appendChild(thEl);
  // create, content, append first cell
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //create, content, append
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  // append the row to the table
  locationTable.appendChild(trEl);
}
function makeFooterRow() {
  var trEl = document.createElement('tr');
  // create, content, append
  tfEl = document.createElement('tfoot');
  tfEl.textContent = 'Totals';
  trEl.appendChild(tfEl);

  var rowTotal = 0; 
  
  for (var i = 0; i < hours.length; i++) {
    var columnTotal = 0;
    for (var d = 0; d < allData.length; d++) {
      columnTotal += allData[d].hourlySales[i];    
    }
    rowTotal += columnTotal;

    tfEl = document.createElement('td');
    tfEl.textContent = columnTotal;
    trEl.appendChild(tfEl);
  }
  
  tfEl = document.createElement('td');
  tfEl.textContent = rowTotal;
  trEl.appendChild(tfEl);

  //append the row to the table
  locationTable.appendChild(trEl);
}


// New instances for the constructor
var pike = new allLocations('First and Pike', 23, 65, 6.3);
var seaTac = new allLocations('SeaTac Airport', 3, 24, 3.2);
var seattleCenter = new allLocations('Seattle Center', 11, 38, 3.7);
var capitolHill = new allLocations('Capitol Hill', 20, 38, 2.3);
var alki = new allLocations('Alki', 2, 16, 4.6);


// Calculating totals for each hour at all locations
makeHeaderRow();

for (var i = 0; i < allData.length; i++) {
  allData[i].render();
}

makeFooterRow();
