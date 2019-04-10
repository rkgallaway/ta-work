'use strict';

var salesTable = document.getElementById('sales')
var locations = ['1st and Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
var oppHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(name,minimumCustomers, maximumCustomers, CookiesPerCustomer) {
    this.storeName = name;
    this.salesDay = {
        minCustomers: minimumCustomers,
        maxCustomers: maximumCustomers,
        cookiesPerCustomer: CookiesPerCustomer,
        totalDayCookies: 0,
    }
    this.cookiesSoldPerHour = [];
    this.customerCount = function(){
    return Math.floor(Math.random() * (this.salesDay.maxCustomers - this.salesDAy.minCustomers + 1)) + this.salesDay.minCustomers;
    };
    this.cookiesSold = function(){
        for(var i = 0; i < oppHours.length; i++) {
            var cookieNumber = this.customerCount();
            this.cookiesSoldPerHour.push(cookieNumber);
            this.salesDay.totalDayCookies += cookieNumber
    };
    }
}
function renderHeader() {
    var tr = document.createElement(tr);
    for(var i = 0; i < oppHours.length; i++) {
        var th = document.createElement('th');
        th.textContent = headings[i];
        tr.append(th);
    }
}

function makeTable() {
    var tableBodyLocation = document.getElementById("body");
    var tableTag = document.createElement("table");
    var tableBody = document.createElement("tableBody");
    tableHead.textContent = this.locations;
    for(var i = 0; i < locations.length; i++) {
        var trAdd = document.createElement("tr");
        var tableHead = document.createElement("tr");
        tableHead.textContent = location[i].name;
        trAdd.append(tableHead);
        tableBody.append(trAdd);
    }
    

}
 var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
firstAndPikeStore.cookiesSold();
// var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
//setacStore.cookiesSold();
// var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
//seattleCenterStore.cookiesSold();
// var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
//capitolHillStore.cookiesSold();
// var alkiStore = new Store('Alki', 2, 16, 4.6);
//alkiStore.cookiesSold();

// var firstAndPikeStore = {
//     id: 'firstAndPikeLoc',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgCookiesPerCustomer: 6.3,
//     numberOfCookiesPerHour: [],
//     totalCookies: 0,
     
//     customerCount: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
// };
// // Jon- Ends the properties and methods of the object
// for(var i = 0; i < oppHours.length; i++) {
//     firstAndPikeStore.numberOfCookiesPerHour.push(Math.ceil(firstAndPikeStore.customerCount(23,65) * firstAndPikeStore.avgCookiesPerCustomer));
// }
// // Gives the number of cookies in a given hour based on customerCount method
// firstAndPikeStore.render = function() {
//     var referenceUl = document.getElementById(this.id);
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         var newElement = document.createElement('li'); 
//         newElement.textContent = `${oppHours[i]}: ${this.numberOfCookiesPerHour[i]}`; 
//         referenceUl.append(newElement);
//     }    
//     newElement.textContent = `Total cookies for the day is ${firstAndPikeStore.totalCookies}.`;
//     referenceUl.append(newElement);
// }
// // Renders new li of the hour and nubmer of cookies and renders total 
// firstAndPikeStore.dailyTotal = function() {
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         this.totalCookies += this.numberOfCookiesPerHour[i];
//     }
// } 
// // Give total number of cookies for the day

// var setacStore = {
//     id: 'SetacLoc',
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgCookiesPerCustomer: 1.2,
//     numberOfCookiesPerHour: [],
//     totalCookies: 0,
     
//     customerCount: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
// };
// for(var i = 0; i < oppHours.length; i++) {
//     setacStore.numberOfCookiesPerHour.push(Math.ceil(setacStore.customerCount(3,24) * setacStore.avgCookiesPerCustomer));
// }

// setacStore.render = function() {
//     var referenceUl = document.getElementById(this.id);
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         var newElement = document.createElement('li'); 
//         newElement.textContent = `${oppHours[i]}: ${this.numberOfCookiesPerHour[i]}`; 
//         referenceUl.append(newElement);
//     }    
//     newElement.textContent = `Total cookies for the day is ${setacStore.totalCookies}.`;
//     referenceUl.append(newElement);
// }
// setacStore.dailyTotal = function() {
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         this.totalCookies += this.numberOfCookiesPerHour[i];
//     }
// }

// var seattleCenterStore = {
//     id: 'seattleCenterLoc',
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookiesPerCustomer: 3.7,
//     numberOfCookiesPerHour: [],
//     totalCookies: 0,
     
//     customerCount: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
// };
// for(var i = 0; i < oppHours.length; i++) {
//     seattleCenterStore.numberOfCookiesPerHour.push(Math.ceil(seattleCenterStore.customerCount(11,38) * seattleCenterStore.avgCookiesPerCustomer));
// }

// seattleCenterStore.render = function() {
//     var referenceUl = document.getElementById(this.id);
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         var newElement = document.createElement('li'); 
//         newElement.textContent = `${oppHours[i]}: ${this.numberOfCookiesPerHour[i]}`; 
//         referenceUl.append(newElement);
//     }    
//     newElement.textContent = `Total cookies for the day is ${seattleCenterStore.totalCookies}.`;
//     referenceUl.append(newElement);
// }
// seattleCenterStore.dailyTotal = function() {
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         this.totalCookies += this.numberOfCookiesPerHour[i];
//     }
// }

// var capitolHillStore = {
//     id: 'capitolHillLoc',
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgCookiesPerCustomer: 2.3,
//     numberOfCookiesPerHour: [],
//     totalCookies: 0,
     
//     customerCount: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
// };
// for(var i = 0; i < oppHours.length; i++) {
//     capitolHillStore.numberOfCookiesPerHour.push(Math.ceil(capitolHillStore.customerCount(20,38) * capitolHillStore.avgCookiesPerCustomer));
// }

// capitolHillStore.render = function() {
//     var referenceUl = document.getElementById(this.id);
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         var newElement = document.createElement('li'); 
//         newElement.textContent = `${oppHours[i]}: ${this.numberOfCookiesPerHour[i]}`; 
//         referenceUl.append(newElement);
//     }    
//     newElement.textContent = `Total cookies for the day is ${capitolHillStore.totalCookies}.`;
//     referenceUl.append(newElement);
// }
// capitolHillStore.dailyTotal = function() {
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         this.totalCookies += this.numberOfCookiesPerHour[i];
//     }
// }

// var alkiStore = {
//     id: 'alkiLoc',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCookiesPerCustomer: 4.6,
//     numberOfCookiesPerHour: [],
//     totalCookies: 0,
     
//     customerCount: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
// };
// for(var i = 0; i < oppHours.length; i++) {
//     alkiStore.numberOfCookiesPerHour.push(Math.ceil(alkiStore.customerCount(2,16) * alkiStore.avgCookiesPerCustomer));
// }

// alkiStore.render = function() {
//     var referenceUl = document.getElementById(this.id);
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         var newElement = document.createElement('li'); 
//         newElement.textContent = `${oppHours[i]}: ${this.numberOfCookiesPerHour[i]}`; 
//         referenceUl.append(newElement);
//     }    
//     newElement.textContent = `Total cookies for the day is ${alkiStore.totalCookies}.`;
//     referenceUl.append(newElement);
// }
// alkiStore.dailyTotal = function() {
//     for(var i = 0; i < this.numberOfCookiesPerHour.length; i++) {
//         this.totalCookies += this.numberOfCookiesPerHour[i];
//     }
// }
// firstAndPikeStore.dailyTotal();
// firstAndPikeStore.render();
// setacStore.dailyTotal();
// setacStore.render();
// seattleCenterStore.dailyTotal();
// seattleCenterStore.render();
// capitolHillStore.dailyTotal();
// capitolHillStore.render();
// alkiStore.dailyTotal();
// alkiStore.render();