// This is the array of all hours

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


//These are linked to the sales.html tab to retrieve the appended data
var firstAndPikeList = document.getElementById('first');
var seaTacAirportList = document.getElementById('second');
var seattleCenterList = document.getElementById('third');
var capitolHillList = document.getElementById('fourth');
var alkiList = document.getElementById('fifth');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

function firstAndPike = {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageSales = averageSales;
  this.hourlySales = [];
  this.hourlySalesCalc = function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  };
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      firstAndPikeList.appendChild(liEl);
    }
    var totalOne = 0;

    for (i = 0; i < this.hourlySales.length; i++) {
      totalOne += this.hourlySales[i];
    }

    var totalEl = document.createElement('li');
    console.log('totalEl is', totalEl);
    totalEl.textContent = 'Total: ' + totalOne + ' cookies';
    firstAndPikeList.appendChild(totalEl);

  }
};

firstAndPike.hourlySalesCalc();
console.log(firstAndPike.hourlySales);

firstAndPike.render();



var seaTacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  averageSales: 1.2,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      // console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      // console.log('liEl with content', liEl);
      // append the element to the dom
      seaTacAirportList.appendChild(liEl);
    }
    var totalOne = 0;

    for (i = 0; i < this.hourlySales.length; i++) {
      totalOne += this.hourlySales[i];
    }

    var totalEl = document.createElement('li');
    console.log('totalEl is', totalEl);
    totalEl.textContent = 'Total: ' + totalOne + ' cookies';
    seaTacAirportList.appendChild(totalEl);
  }
};

seaTacAirport.hourlySalesCalc();
console.log(seaTacAirport.hourlySales);
seaTacAirport.render();



var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  averageSales: 3.7,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      seattleCenterList.appendChild(liEl);
    }
    var totalOne = 0;

    for (i = 0; i < this.hourlySales.length; i++) {
      totalOne += this.hourlySales[i];
    }

    var totalEl = document.createElement('li');
    console.log('totalEl is', totalEl);
    totalEl.textContent = 'Total: ' + totalOne + ' cookies';
    seattleCenterList.appendChild(totalEl);
  }
};

seattleCenter.hourlySalesCalc();
console.log(seattleCenter.hourlySales);
seattleCenter.render();



var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  averageSales: 2.3,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      capitolHillList.appendChild(liEl);
    }
    var totalOne = 0;

    for (i = 0; i < this.hourlySales.length; i++) {
      totalOne += this.hourlySales[i];
    }

    var totalEl = document.createElement('li');
    console.log('totalEl is', totalEl);
    totalEl.textContent = 'Total: ' + totalOne + ' cookies';
    capitolHillList.appendChild(totalEl);
  }
};

capitolHill.hourlySalesCalc();
console.log(capitolHill.hourlySales);
capitolHill.render();


var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  averageSales: 4.6,
  hourlySales: [],
  hourlySalesCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.ceil(getRandomInt(this.minCust, this.maxCust) * this.averageSales));
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {

      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      alkiList.appendChild(liEl);
    }
    var totalOne = 0;

    for (i = 0; i < this.hourlySales.length; i++) {
      totalOne += this.hourlySales[i];
    }

    var totalEl = document.createElement('li');
    console.log('totalEl is', totalEl);
    totalEl.textContent = 'Total: ' + totalOne + ' cookies';
    alkiList.appendChild(totalEl);
  }
};

alki.hourlySalesCalc();
console.log(alki.hourlySales);
alki.render();
