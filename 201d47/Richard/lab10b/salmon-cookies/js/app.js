 'use strict';

 var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
 var refTable = document.getElementById('cookies-stand');
 
 function getRandomNumber(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

var finalTotal = 0;
var locations = [];
var hourlyTotalArray = [];

function CookieStore(minCustomer, maxCustomer, avgCookieSale, id){
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.id = id;
    this.consumptionArray = [];
    locations.push(this);

    this.randomCookiesPerHour = function(){
        return getRandomNumber(this.minCustomer, this.maxCustomer);
    };

    this.cookieSold = function(){
        return Math.round(this.randomCookiesPerHour() * this.avgCookieSale); 
    };

    this.render = function(){
        var sum = 0;
        var trElement = document.createElement('tr');
        var tdElement = document.createElement('td');
        tdElement.textContent = this.id;
        trElement.append(tdElement);
        for(var i =0; i < hours.length; i++){
            var consumption = this.cookieSold();
            sum += consumption;
            this.consumptionArray.push(consumption);
            tdElement = document.createElement('td');
            tdElement.textContent = this.consumptionArray[i];
            trElement.append(tdElement); 
        }
        var totalTd = document.createElement('td');
        totalTd.textContent = sum;
        trElement.append(totalTd);
        refTable.append(trElement);
        
    };
 
};

function headerRender(){
    var trHours = document.createElement('tr');
    var thHours = document.createElement('th');
    thHours.textContent = 'Stores';
    trHours.append(thHours);
    for(var i =0; i < hours.length; i++){
        thHours = document.createElement('th');
        thHours.textContent = hours[i];
        trHours.append(thHours);
    }
    thHours = document.createElement('th');
    thHours.textContent = 'Total of the day.';
    trHours.append(thHours);
    refTable.append(trHours);
}

headerRender();
 
var firstandpike = new CookieStore(23, 65, 6.3, '1st and Pike');
var seatac = new CookieStore(3, 24, 1.2, 'SeaTac Airport');
var seattleCenter = new CookieStore(11, 38, 3.7, 'Seattle Center');
var capitolHill = new CookieStore(20, 38, 2.3, 'Capitol Hill');
var alki = new CookieStore(2, 16, 4.6, 'Alki');
    


for(var i = 0; i < locations.length; i++){
    locations[i].render();
}

function totalRow(){
    var tfTotal = document.createElement('tfoot');
    var trTotal = document.createElement('tr');
    var tdTotal = document.createElement('td');
    tdTotal.textContent = 'Total';
    trTotal.append(tdTotal);
    
    for(var i = 0; i < hours.length ; i++) {
        var hourlyTotal = 0;
        for(var r = 0; r < locations.length; r++){
            hourlyTotal += locations[r].consumptionArray[i];
        }
        finalTotal += hourlyTotal;
        hourlyTotalArray[i] = hourlyTotal;
        tdTotal = document.createElement('td');
        tdTotal.textContent = hourlyTotal;
        trTotal.append(tdTotal);
    }
    tdTotal = document.createElement('td');
    tdTotal.textContent = finalTotal;
    trTotal.append(tdTotal);
    tfTotal.append(trTotal);
    refTable.append(tfTotal);
}


function addNewStore(event){
    event.preventDefault();

    var newName = event.target.name.value;
    var newMinCustomer = event.target.mincustomer.value;
    var newMaxCustomer = event.target.maxcustomer.value;
    var newAvgCookieSale = event.target.avgcookiesales.value;

    var newStore = new CookieStore(newMinCustomer, newMaxCustomer, newAvgCookieSale,newName);
    
    var newTable = document.getElementById('cookies-stand');
    newTable.textContent = '';
    headerRender();
    for(var i = 0; i < locations.length; i++){
        locations[i].render();
    }
    
    totalRow();

    
}
var cookieFormRef = document.getElementById('new-store');
cookieFormRef.addEventListener('submit', addNewStore);
totalRow();