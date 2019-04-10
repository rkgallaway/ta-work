'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];


// Ryan - Each store object with methods render li elements to the DOM
var firstAndPike = {
  id: 'first-and-pike',
  minGuest: 23,
  maxGuest: 65,
  avgPerGuest: 6.3,
  cookiesPerHour: [],
  totalCookies: 0,
  sumOfCookies: function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function (){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `Total Cookies Sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  },
  custCount: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  dailyStoreTotals: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custCount(this.minGuest, this.maxGuest) * this.avgPerGuest));
    }
  },
  dailyStats: function(){
    this.dailyStoreTotals();
    this.sumOfCookies();
    this.render();
  }

}


var seaTac = {
  id: 'sea-tac',
  minGuest: 3,
  maxGuest: 24,
  avgPerGuest: 1.2,
  cookiesPerHour: [],
  totalCookies: 0,
  sumOfCookies: function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function (){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `Total Cookies Sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  },
  custCount: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  dailyStoreTotals: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custCount(this.minGuest, this.maxGuest) * this.avgPerGuest))
    }
  },
  dailyStats: function(){
    this.dailyStoreTotals();
    this.sumOfCookies();
    this.render();
  }
}

var seaCenter = {
  id: 'sea-center',
  minGuest: 11,
  maxGuest: 38,
  avgPerGuest: 3.7,
  cookiesPerHour: [],
  totalCookies: 0,
  sumOfCookies: function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function (){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `Total Cookies Sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  },
  custCount: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  dailyStoreTotals: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custCount(this.minGuest, this.maxGuest) * this.avgPerGuest))
    }
  },
  dailyStats: function(){
    this.dailyStoreTotals();
    this.sumOfCookies();
    this.render();
  }
}

var capitolHill = {
  id: 'capitol-hill',
  minGuest: 20,
  maxGuest: 38,
  avgPerGuest: 2.3,
  cookiesPerHour: [],
  totalCookies: 0,
  sumOfCookies: function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function (){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `Total Cookies Sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  },
  custCount: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  dailyStoreTotals: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custCount(this.minGuest, this.maxGuest) * this.avgPerGuest))
    }
  },
  dailyStats: function(){
    this.dailyStoreTotals();
    this.sumOfCookies();
    this.render();
  }
}

var alki = {
  id: 'alki',
  minGuest: 20,
  maxGuest: 38,
  avgPerGuest: 4.6,
  cookiesPerHour: [],
  totalCookies: 0,
  sumOfCookies: function(){
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function (){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `Total Cookies Sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  },
  custCount: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  dailyStoreTotals: function(){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custCount(this.minGuest, this.maxGuest) * this.avgPerGuest))
    }
  },
  dailyStats: function(){
    this.dailyStoreTotals();
    this.sumOfCookies();
    this.render();
  }
}

firstAndPike.dailyStats();
seaTac.dailyStats();
seaCenter.dailyStats();
capitolHill.dailyStats();
alki.dailyStats();

