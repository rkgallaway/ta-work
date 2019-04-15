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
        };
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
    }
};

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
    var th = document.createElement('th');
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
    var tFoot = document.createElement('tFoot');
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = 'Hourly totals';
    trElement.append(tdElement);
    for(var i = 0; i < totalPerHour.length; i++)
    {
      tdElement = document.createElement('td');
      tdElement.textContent = totalPerHour[i];
      trElement.append(tdElement);
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = storeTotal;
    trElement.append(tdElement);
    tFoot.append(trElement);
    salesTable.append(tFoot);
}


 var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
 var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
 var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
 var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
 var alkiStore = new Store('Alki', 2, 16, 4.6);
 
 renderHeader();
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

    var newStore = new Store(newStoreName, Number(newMinimumCustomers), Number(newMaximunCustomers),  Number(newAvgCookies));

    newStore.dailyStats();


    // var salesFooter = document.getElementById('cookiefoot');
    // salesFooter.textContent = '';

    storeTotal = 0;
    footerCalculator();
    renderFooter();
}

var storeFormRef = document.getElementById('cookieform');
storeFormRef.addEventListener('submit', addNewStore);








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