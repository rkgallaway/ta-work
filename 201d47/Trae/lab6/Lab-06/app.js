'use strict';

var firstAndPike = {
    minimunCustomers: 23,
    maximumCustomers: 65,
    averageCookies: 6.3,
    customersPerHour: function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimunCustomers + 1)) + this.minimunCustomers;
    },
    cookiesForFirstAndPike: [],
    cookiesBought: function () {
        for (var i = 0; i < 14; i++) {
            this.cookiesForFirstAndPike.push(this.customersPerHour() * this.averageCookies);
        }

    }
};
var cookiesBoughtForFirstAndPike = document.getElementById('cookiesBoughtFirstAndPike');
firstAndPike.cookiesBought();
var counter = 0;
for (var i = 0; i < firstAndPike.cookiesForFirstAndPike.length; i++) {


    var listElement = document.createElement('li');

    listElement.textContent = `${firstAndPike.cookiesForFirstAndPike[i]} Cookies.`;
    cookiesBoughtForFirstAndPike.append(listElement);
    counter += firstAndPike.cookiesForFirstAndPike[i];

}
var totalCookies = document.createElement('li');
totalCookies.textContent = `${counter} Total Cookies`;
cookiesBoughtForFirstAndPike.append(totalCookies);



console.log(firstAndPike.cookiesForFirstAndPike)
// 2nd store -----------------------------------------------------------------------------------------------
var seatacAirport = {
    minimunCustomers: 3,
    maximumCustomers: 24,
    averageCookies: 1.2,
    customersPerHour: function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimunCustomers + 1)) + this.minimunCustomers;
    },
    cookiesForSeatacAirport: [],
    cookiesBought: function () {
        for (var i = 0; i < 14; i++) {
            this.cookiesForSeatacAirport.push(this.customersPerHour() * this.averageCookies);
        }
    }

}
seatacAirport.cookiesBought();

var cookiesBoughtForSeaTacAirport = document.getElementById('cookiesBoughtSeaTacAirport');
var counter = 0;
for (var i = 0; i < seatacAirport.cookiesForSeatacAirport.length; i++) {


    var listElement = document.createElement('li');

    listElement.textContent = `${seatacAirport.cookiesForSeatacAirport[i]} Cookies.`;
    cookiesBoughtForSeaTacAirport.append(listElement);
    counter += seatacAirport.cookiesForSeatacAirport[i];

}
var totalCookies = document.createElement('li');
totalCookies.textContent = `${counter} Total Cookies`;
cookiesBoughtForSeaTacAirport.append(totalCookies);

console.log(seatacAirport.cookiesForSeatacAirport);
// third store--------------------------------------------------------------------------------------------------------------
var seattleCenter = {
    minimunCustomers: 11,
    maximumCustomers: 38,
    averageCookies: 3.7,
    customersPerHour: function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimunCustomers + 1)) + this.minimunCustomers;
    },
    cookiesForSeattleCenter: [],
    cookiesBought: function () {
        for (var i = 0; i < 14; i++) {
            this.cookiesForSeattleCenter.push(this.customersPerHour() * this.averageCookies);
        }
    }
}
seattleCenter.cookiesBought();

var cookiesBoughtSeattleCenter = document.getElementById('cookiesBoughtSeattleCenter');
var counter = 0;
for (var i = 0; i < seattleCenter.cookiesForSeattleCenter.length; i++) {


    var listElement = document.createElement('li');

    listElement.textContent = `${seattleCenter.cookiesForSeattleCenter[i]} Cookies.`;
    cookiesBoughtSeattleCenter.append(listElement);
    counter += seattleCenter.cookiesForSeattleCenter[i];

}
var totalCookies = document.createElement('li');
totalCookies.textContent = `${counter} Total Cookies`;
cookiesBoughtSeattleCenter.append(totalCookies);

console.log(seattleCenter.cookiesForSeattleCenter);
//fourth store--------------------------------------------------------------------------------------------------------------------
var capitolHill = {
    minimunCustomers: 20,
    maximumCustomers: 38,
    averageCookies: 2.3,
    customersPerHour: function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimunCustomers + 1)) + this.minimunCustomers;
    },
    cookiesForCapitolHill: [],
    cookiesBought: function () {
        for (var i = 0; i < 14; i++) {
            this.cookiesForCapitolHill.push(this.customersPerHour() * this.averageCookies);
        }
    }
}
capitolHill.cookiesBought();
var cookiesBoughtCapitolHill = document.getElementById('cookiesBoughtCapitolHill');
var counter = 0;
for (var i = 0; i < capitolHill.cookiesForCapitolHill.length; i++) {


    var listElement = document.createElement('li');

    listElement.textContent = `${capitolHill.cookiesForCapitolHill[i]} Cookies.`;
    cookiesBoughtCapitolHill.append(listElement);
    counter += capitolHill.cookiesForCapitolHill[i];

}
var totalCookies = document.createElement('li');
totalCookies.textContent = `${counter} Total Cookies`;
cookiesBoughtCapitolHill.append(totalCookies);
//fifth store----------------------------------------------------------------------------------
var alki = {
    minimunCustomers: 2,
    maximumCustomers: 16,
    averageCookies: 4.6,
    customersPerHour: function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minimunCustomers + 1)) + this.minimunCustomers;
    },
    cookiesForAlki: [],
    cookiesBought: function () {
        for (var i = 0; i < 14; i++) {
            this.cookiesForAlki.push(this.customersPerHour() * this.averageCookies);
        }
    }
}
alki.cookiesBought();
console.log(alki.cookiesForAlki);

var cookiesBoughtAlki = document.getElementById('cookiesBoughtAlki');
var counter = 0;
for (var i = 0; i < alki.cookiesForAlki.length; i++) {


    var listElement = document.createElement('li');

    listElement.textContent = `${alki.cookiesForAlki[i]} Cookies.`;
    cookiesBoughtAlki.append(listElement);
    counter += alki.cookiesForAlki[i];
}
var totalCookies = document.createElement('li');
totalCookies.textContent = `${counter} Total Cookies`;
cookiesBoughtAlki.append(totalCookies);