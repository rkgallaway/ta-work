'use strict';

function Store(minumumCustomers, maximumCustomers, averageCookies, locationName) {
  // below are the properties of the contructor function using contexual this.
    this.minumumCustomers = minumumCustomers;
    this.maximumCustomers = maximumCustomers;
    this.averageCookies = averageCookies;
    this.locationName = locationName;
    this.cookiesPerHour = [];
    this.customersPerHour = function () {
        return Math.floor(Math.random() * (this.maximumCustomers - this.minumumCustomers + 1)) + this.minumumCustomers;
    };
    this.cookiesBought = function () {
        // options 1 use an array
        // var hoursCount == 14
        //option 2 hourArray.length 
        for (var i = 0; i < 14; i++) {
            this.cookiesPerHour.push(Math.floor(this.customersPerHour() * this.averageCookies));
        }
//parameters vs arguments.  argument is used when you call the function, is the information stored inside the parameters. 
    }
    this.render = function () {
        var storeRow = document.createElement('tr')

        var storeData = document.createElement('td')
        storeData.textContent = this.locationName;
        storeRow.append(storeData);

        this.cookiesBought(); //smells - improve on name
        var totalPerStore = 0;
        for (var i = 0; i < this.cookiesPerHour.length; i++) {
            totalPerStore += this.cookiesPerHour[i];

            var currentHourData = document.createElement('td')
            currentHourData.textContent = this.cookiesPerHour[i];
            storeRow.append(currentHourData);
        }

        var storeTotals = document.createElement('td');
        storeTotals.textContent = totalPerStore;
        storeRow.append(storeTotals);
        return storeRow;
    }
}


function renderHeader() {
    var hours = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
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

function renderBody(locationArray) {
    var referenceTableLocations = document.getElementById('storeLocation');
    for (var i = 0; i < locationArray.length; i++) {
        var currentStore = locationArray[i];
        var storeRow = currentStore.render();
        referenceTableLocations.append(storeRow);
    }
}

function renderFooter(locationArray) {
    var referenceTable = document.getElementById("totalCookies");
    var footerRow = document.createElement('tr');
    var footerData = document.createElement('td');
    footerData.textContent = "Totals:";
    footerRow.append(footerData);
    var totalsPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < locationArray.length; i++) {
        var currentStore = locationArray[i];
        for (var j = 0; j < currentStore.cookiesPerHour.length; j++) {
            totalsPerHour[j] += currentStore.cookiesPerHour[j];
        }
    }

    var grandTotal = 0;
    for (var i = 0; i < totalsPerHour.length; i++) {
        var totalData = document.createElement('td');
        totalData.textContent = totalsPerHour[i];
        footerRow.append(totalData);
        grandTotal += totalsPerHour[i];
    }

    var grandTotalData = document.createElement('td');
    grandTotalData.textContent = grandTotal;
    footerRow.append(grandTotalData);
    referenceTable.append(footerRow);
}

var locations = [new Store(23, 65, 6.3, "First and Pike"), new Store(3, 24, 1.2, "SeaTac Airport"), new Store(11, 38, 3.7, 'Seattle Center'), new Store(20, 38, 2.3, 'Capitol Hill'), new Store(2, 16, 4.6, "Alki")];

renderHeader();
renderBody(locations);
renderFooter(locations);
//adding in spacing based on what lines are working together
function addNewStore(event) {
    event.preventDefault();
    var storeName = document.getElementById('storeName').value;
    var minimumCustomers = document.getElementById('minimumCustomers').value;
    // break points instead of console.log
    

    var maximumCustomers = document.getElementById('maximumCustomers').value;
    var averageCookies = document.getElementById('averageCookies').value;

    var newStore = new Store(Number(minimumCustomers), Number(maximumCustomers),
        Number(averageCookies), storeName);

    var tableBody = document.getElementById('storeLocation');
    tableBody.append(newStore.render());
    locations.push(newStore);

    var footer = document.getElementById('totalCookies');
    footer.innerHTML = '';
    renderFooter(locations);
}

var storeReference = document.getElementById('storeInformation');
// event type, and callback-----(                     )
storeReference.addEventListener('submit', addNewStore);
//------------------------------------------------------------------------
var redAndBlackButton = document.getElementById('redAndBlack');
var greenAndBlackButton = document.getElementById('greenAndBlack');
var blueAndBlackButton = document.getElementById('blueAndBlack');

function onRedAndBlackClick(event) {
   var referenceTable = document.getElementById('Stores'); 
   referenceTable.setAttribute('style', 'background-color: black; color: red;');
}

function onBlueAndBlackClick(event) {
    var referenceTable = document.getElementById('Stores');
    referenceTable.setAttribute('style', 'background-color: black; color: blue;');
}

function onGreenAndBlackClick(event) {
    var referenceTable = document.getElementById('Stores');
    referenceTable.setAttribute('style', 'background-color: black; color: green;');

}

redAndBlackButton.addEventListener('click', onRedAndBlackClick);
blueAndBlackButton.addEventListener('click', onBlueAndBlackClick);

greenAndBlackButton.addEventListener('click', onGreenAndBlackClick);





