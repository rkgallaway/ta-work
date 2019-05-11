'use strict';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such
var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var clearChatList = document.getElementById('clear-chat-list');
var allComments = [];

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Here's the constructor for the individual comments
var Comment = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return liEl;
};

Comment.prototype.dog = 'WOOF';


// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // FUNCTION DECLARATIONS

// // This function goes through the array of comments and calls the render() method on each one
function renderAllComments() {
  chatList.innerHTML = '';

  for (var i = 0; i < allComments.length; i++) {
    chatList.appendChild(allComments[i].render());
  }
}

// // This function is the event handler for the submission of comments
function handleCommentSubmit(event) {
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.who', event.target.who);
  console.log('log of event.target.who.value', event.target.who.value);

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

//   // Validation to prevent empty form fields
  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
  }

  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  if (commenter === 'Sam') {
    remark = '@$^#$%$^@#$%@';
  }

  if (commenter === 'Allie') {
    remark = remark.toUpperCase();
  }

  if (commenter === 'Otis') {
    remark = '&#9835; Shama-lama-ding-dong &#9835;';
  }

  if (commenter === 'Demi') {
    remark = 'WOOF';
  }

  var newComment = new Comment(commenter, remark);
  // console.log('this is the Comment instance', newComment);

  // console.log('Comment by ' + event.target.who.value + ' at ' + Date());

  // This empties the form fields after the data has been grabbed
  event.target.who.value = null;
  event.target.says.value = null;

  allComments.unshift(newComment);
  renderAllComments();
}

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Event listener for comment submission form
// chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the 'Clear all comments' button
clearChatList.addEventListener('click', function() {
  chatList.innerHTML = '';
  console.log('You just cleared the chat list!');
  allComments = [];
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Here is where we would put everything else that we want to execute on page load. This is where you would usually find function calls, but since this app is all driven ansynchronously by user interaction, the first JS that will execute is waiting inside the event listeners. */

// will hold all the store object instances

var allStores = [];
var footerHourlyTotals = [];
var grandTotal = 0;

var salesTable = document.getElementById('sales-table');


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store (name, min, max, avg){
  this.name = name;
  this.minCustomersEachHour = min;
  this.maxCustomersEachHour = max;
  this.avgCookiesPerCustomer = avg;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;
  this.calcCustomersEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(calcRandomCustomers(this.minCustomersEachHour, this.maxCustomersEachHour));
    }
  };
  this.calcCookiesEachHour = function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHourOfCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(oneHourOfCookies);
      this.totalCookiesForTheDay += oneHourOfCookies;
    }
  };
  this.render = function() {
    this.calcCookiesEachHour();

    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++) {
      // for each list item
      // --create an element
      tdEl = document.createElement('td');
      // --give it content
      // Sample: 6am: 16 cookies
      // liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      tdEl.textContent = this.cookiesEachHour[i];
      // --append it to the DOM
      trEl.appendChild(tdEl);
    }
    // total list itemz
    // --create an element
    tdEl = document.createElement('td');
    // --give it content
    // liEl.textContent = 'Total: ' + this.totalCookiesForTheDay + ' cookies';
    tdEl.textContent = this.totalCookiesForTheDay;
    // --append it to the DOM
    trEl.appendChild(tdEl);
    salesTable.appendChild(trEl);
  };
  allStores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seattle Tacoma Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

makeHeaderRow();
renderAll();
footerHourlyTotalsCalc();
makeFooterRow();

// Helper function
function calcRandomCustomers(min, max) {
  // following line from MDN docs on Math.random
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderAll(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}

function footerHourlyTotalsCalc(){
  for(var i = 0; i < hours.length; i++){
    var hourlySum = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlySum += allStores[j].cookiesEachHour[i];
    }
    grandTotal += hourlySum;
    footerHourlyTotals[i] = hourlySum;
  }
}



function makeHeaderRow() {
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Name';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // create, content, append second cell
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  // create, content, append third cell
  // append the row to the table
  salesTable.appendChild(trEl);
}


function makeFooterRow() {
  var tFoot = document.createElement('tfoot');
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = footerHourlyTotals[i];
    trEl.appendChild(tdEl);
  }
  // create, content, append second cell
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  tFoot.appendChild(trEl);
  // create, content, append third cell
  // append the row to the table
  salesTable.appendChild(tFoot);
}



// It would be nice to have a single function that renders all of the individual cat rows
// function renderallHours() {
//   for (var i = 0; i < allHours.length; i++) {    
//     allHours[i].render();
//   }
// }

// // Now we need to call our functions: the one for the header row, and the one for generating the individual cat rows


// renderallHours();

// Don't forget in the Chrome dev tools to observe the difference between the HTML shown in the Sources tab versus the Elements tab!



