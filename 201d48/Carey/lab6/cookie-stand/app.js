'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlace = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  },
  render() {
    this.calcCookiesEachHour();
    // access the element in the DOM where we will put things
    var pikeUl = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++) {
      // for each list item
      // --create an element
      var liEl = document.createElement('li');
      // --give it content
      // Sample: 6am: 16 cookies
      // liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      // --append it to the DOM
      pikeUl.appendChild(liEl);
    }
    // total list item
    // --create an element
    liEl = document.createElement('li');
    // --give it content
    // liEl.textContent = 'Total: ' + this.totalCookiesForTheDay + ' cookies';
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
    // --append it to the DOM
    pikeUl.appendChild(liEl);
  }
};
// Helper function
function calcRandomCustomers(min, max) {
  // following line from MDN docs on Math.random
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var airport = {
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var seatacUl = document.getElementById('seatac');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      seatacUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
    seatacUl.appendChild(liEl);
  }
};
function calcRandomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var seattleCenter = {
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var seattleCenterUl = document.getElementById('seattlecenter');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      seattleCenterUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
    seattleCenterUl.appendChild(liEl);
  }
};
function calcRandomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var capitalHill = {
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var capitalHillUl = document.getElementById('capitalhill');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      capitalHillUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
    capitalHillUl.appendChild(liEl);
  }
};
function calcRandomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var alki = {
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,
  calcCustomersEachHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var alkiUl = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      alkiUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
    alkiUl.appendChild(liEl);
  }
};
function calcRandomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:
<table>             PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>              create tr
  <th>Name</th>   create a th, give it content, append it to tr
  <th>Color</th>  create a th, give it content, append it to tr
  <th>Tail</th>   create a th, give it content, append it to tr
  </tr>             append tr to the table
  <tr>
    <td>Buddy</td>
    <td>Orange and White</td>
    <td>VERY long</td>
  </tr>
</table>
Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.
Thus, we'll want to create and append HTML elements in the same order.
We have already put an empty <table> element in the HTML, with id="cats" */

// We need an array to hold our cats
var allHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// We need to access the table that is in the DOM
var locations = document.getElementById('locations');

// We need a constructor to make our cat objects
function Location(name, cookies) {
  this.name = name;
  this.cookies = cookies;
  this.render = function () {
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for "Name"
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    // create, content, append for "Color"
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookies;
    trEl.appendChild(tdEl);
    // create. content, append for "Tail Size"
    // append the tr to the table
    locations.appendChild(trEl);
  };
  allHours.push(this);
}

// We need to create our Cat instances
new Location('1st and Pike', '');
new Location('SeaTac Airport', '');
new Location('Seattle Center', '');
new Location('Capitol Hill', '');
new Location('Alki', '');

// console.table(allCats);

// We need a separate function to make the table header

function makeHeaderRow() {
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);
  // create, content, append second cell
  thEl = document.createElement('th');
  thEl.textContent = 'Cookies';
  trEl.appendChild(thEl);
  // create, content, append third cell
  // append the row to the table
  Location.appendChild(trEl);
}



// It would be nice to have a single function that renders all of the individual cat rows
function renderallHours() {
  for (var i = 0; i < allHours.length; i++) {    
    allHours[i].render();
  }
}

// Now we need to call our functions: the one for the header row, and the one for generating the individual cat rows

makeHeaderRow();
renderallHours();

// Don't forget in the Chrome dev tools to observe the difference between the HTML shown in the Sources tab versus the Elements tab!



