'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm']

var firstAndPike = {
  store: '1st and Pike',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  AvgCookiePerCustomer: 6.3,
  cookiesPerHour: [],
  totalCookies: 0
}

firstAndPike.custCount = function getHourlyCustomerCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
for (var i = 0; i < hours.length; i++) {
  (firstAndPike.cookiesPerHour.push(Math.ceil(firstAndPike.custCount(23, 65) * firstAndPike.AvgCookiePerCustomer)))
}
console.log(firstAndPike)

firstAndPike.sumOfCookies = function () {
  for (var i = 0; i < firstAndPike.cookiesPerHour.length; i++) {
    firstAndPike.totalCookies += firstAndPike.cookiesPerHour[i];
  }
  return firstAndPike.cookiesPerHour;
}


firstAndPike.render = function () {
  //access the element where we will attch li
  var firstAndPikeUl = document.getElementById('1st-and-pike');
  //for each element in the  array, we need to...
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    console.log(this.cookiesPerHour[i], 'cookies per hour');
    // 1. create a <li> comment
    var liEl = document.createElement('li');
    console.log(liEl, 'LiEl');
    // 2. give that <li> element content
    liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    console.log(liEl, 'LiEl');
    //3. append the <li> to the  <ul>
    firstAndPikeUl.appendChild(liEl);
  }

  liEl.textContent = `Total Cookies Sold ${firstAndPike.totalCookies}`;
  firstAndPikeUl.appendChild(liEl);
}

firstAndPike.sumOfCookies();
firstAndPike.render();

var seaTac = {
  location: 'SeaTac',
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  AvgCookiePerCustomer: 1.2,
  cookiesPerHour: [],
  totalCookies: 0

}
seaTac.custCount = function getHourlyCustomerCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < hours.length; i++) {
  (seaTac.cookiesPerHour.push(Math.ceil(seaTac.custCount(3, 24) * seaTac.AvgCookiePerCustomer)))
}

seaTac.sumOfCookies = function () {
  for (var i = 0; i < seaTac.cookiesPerHour.length; i++) {
    seaTac.totalCookies += seaTac.cookiesPerHour[i];
  }
  return seaTac.cookiesPerHour;
}


seaTac.render = function () {
  var seaTacUl = document.getElementById('seatac');
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    seaTacUl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies Sold ${seaTac.totalCookies}`;
  seaTacUl.appendChild(liEl);

}
seaTac.sumOfCookies();
seaTac.render();

var seaCenter = {
  location: 'Seattle Center',
  minHourlyCustomer: 11,
  maxHourlyCustomer: 38,
  AvgCookiePerCustomer: 3.7,
  cookiesPerHour: [],
  totalCookies: 0

}
seaCenter.custCount = function getHourlyCustomerCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < hours.length; i++) {
  (seaCenter.cookiesPerHour.push(Math.ceil(seaCenter.custCount(11, 38) * seaCenter.AvgCookiePerCustomer)))
}
seaCenter.sumOfCookies = function () {
  for (var i = 0; i < seaCenter.cookiesPerHour.length; i++) {
    seaCenter.totalCookies += seaCenter.cookiesPerHour[i];
  }
  return seaCenter.cookiesPerHour;
}

seaCenter.render = function () {
  var seaCenterUl = document.getElementById('seacenter');
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    seaCenterUl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies Sold ${seaCenter.totalCookies}`;
  seaCenterUl.appendChild(liEl);

}
seaCenter.sumOfCookies();
seaCenter.render();

var capHill = {
  location: 'Capitol Hill"',
  minHourlyCustomer: 20,
  maxHourlyCustomer: 38,
  AvgCookiePerCustomer: 2.3,
  cookiesPerHour: [],
  totalCookies: 0
}
capHill.custCount = function getHourlyCustomerCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < hours.length; i++) {
  (capHill.cookiesPerHour.push(Math.ceil(capHill.custCount(20, 38) * capHill.AvgCookiePerCustomer)))
}
capHill.sumOfCookies = function () {
  for (var i = 0; i < capHill.cookiesPerHour.length; i++) {
    capHill.totalCookies += capHill.cookiesPerHour[i];
  }
  return capHill.cookiesPerHour;
}
capHill.render = function () {
  var capHillUl = document.getElementById('caphill');
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    capHillUl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies Sold ${capHill.totalCookies}`;
  capHillUl.appendChild(liEl);
}
capHill.sumOfCookies();
capHill.render();

var alki = {
  location: 'Alki',
  minHourlyCustomer: 2,
  maxHourlyCustomer: 16,
  AvgCookiePerCustomer: 4.6,
  cookiesPerHour: [],
  totalCookies: 0
}
alki.custCount = function getHourlyCustomerCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < hours.length; i++) {
  (alki.cookiesPerHour.push(Math.ceil(alki.custCount(2, 16) * alki.AvgCookiePerCustomer)))
}
alki.sumOfCookies = function () {
  for (var i = 0; i < alki.cookiesPerHour.length; i++) {
    alki.totalCookies += alki.cookiesPerHour[i];
  }
  return alki.cookiesPerHour;
}
alki.render = function () {
  var alkiUl = document.getElementById('alki');
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    alkiUl.appendChild(liEl);
  }
  liEl.textContent = `Total Cookies Sold ${alki.totalCookies}`;
  alkiUl.appendChild(liEl);
}
alki.sumOfCookies();
alki.render();
