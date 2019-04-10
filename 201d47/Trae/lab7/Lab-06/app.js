'use strict';

//each element should be separate strings, add location string
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomIntNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//locationName, passed as parameter and set
function Store(minumumCustomers, maximumCustomers, averageCookies, locationName) {
    this.minumumCustomers = minumumCustomers;
    this.maximumCustomers = maximumCustomers;
    this.averageCookies = averageCookies;
    this.locationName = locationName;
    this.cookiesPerHour = [];
    this.customersPerHour = function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minumumCustomers + 1)) + this.minumumCustomers;
    };
    this.cookiesBought = function () {
        //Ryan - array iteration is hard wired, should be dynamic
        for (var i = 0; i < 15; i++) {
            this.cookiesPerHour.push(Math.floor(this.customersPerHour() * this.averageCookies));
        }

    }

}


function renderHeader() {
    var hours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    // Ryan - unused variable. naming convention for id should be kabob case / lower case also / should only need one id in html table tag, but this works... not as clean maybe?
    var referenceTable = document.getElementById('Stores');
    var referenceTableHours = document.getElementById('storeHours');
    var headerOpen = document.createElement("tr");
    referenceTableHours.append(headerOpen);

    for (var i = 0; i < hours.length; i++) {
        var th = document.createElement('th');
        th.textContent = hours[i];
        referenceTableHours.append(th);

    }

    var headerClose = document.createElement("tr");
    referenceTableHours.append(headerClose);

}
renderHeader();



function renderBody(locationArray) {
    var referenceTableLocations = document.getElementById('storeLocation')
    // Ryan - hard
    var totalCookiesPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 0];
    for (var i = 0; i < locationArray.length; i++) {
        var tr = document.createElement('tr');
        var currentStore = locationArray[i];
        var td = document.createElement('td');
        td.textContent = currentStore.locationName;
        tr.append(td);
        currentStore.cookiesBought();
        for (var j = 0; j < currentStore.cookiesPerHour.length; j++) {
            //6AM
            totalCookiesPerHour[j] += currentStore.cookiesPerHour[j];
            var td = document.createElement('td');
            td.textContent = currentStore.cookiesPerHour[j];
            tr.append(td);
        }
        referenceTableLocations.append(tr);
    }
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = "Totals";
    tr.append(td);
    for(var i = 0; i < totalCookiesPerHour.length; i++) {
        var td = document.createElement('td');
        td.textContent = totalCookiesPerHour[i];
        tr.append(td);
    }
    referenceTableLocations.append(tr);
    //create new row

    //append string Totals

    //iterate over totalCookiesPerHour
        //create td
        //td data = that hours total cookies [i]
        //apped td to the row

    //append the row to the tbody


}

var locations = [new Store(23, 65, 6.3, "First and Pike"), new Store(3, 24, 1.2, "SeaTac Airport"), new Store(11, 38, 3.7, 'Seattle Center'), new Store(20, 38, 2.3, 'Capitol Hill'), new Store(2, 16, 4.6, "Alki")];

renderBody(locations);



var tr = document.createElement('tr');


var tdfirstAndPike = document.createElement('td');
tdfirstAndPike.textContent = this.firstAndPike;
tr.append(tdfirstAndPike);

//heading array should be array hours from top

// Ryan - syntax,
