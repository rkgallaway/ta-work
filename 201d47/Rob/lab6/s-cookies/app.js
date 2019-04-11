'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var store_loc = ['1st and Pike', 'Capitol Hill', 'Seattle Center', 'Capitol Hill', 'Alki'];

var store_min_cust = [23, 20];




function all_cookies(loc, min_cust, max_cust, avg_cookie_sales, cookies_per_hr){
  this.loc = loc;
  this.min_cust = min;
  this.max_cust = max;
  this.avg_cookie_sales = avg_cookie_sales;
  this.cookies_per_hr = [];
};

all_cookies.prototype.random_cookie_gen = function(){
  //do this 14 times
  var random = getRandomIntInclusive(this.min_cust, this.max_cust);
  // push random into cookies_per_hr
  return random;
}
function getRandomIntInclusive(min_cust, max_cust) {
  min_cust = Math.ceil(min_cust);
  max_cust = Math.floor(max_cust);
  return Math.floor(Math.random() * (max_cust - min_cust + 1)) + min_cust; //The maximum is inclusive and the minimum is inclusive 
}

var pike = {
  loc: '1st and Pike',
  min_cust: 23,
  max_cust: 65,
  avg_cookie_sales: 6.3,
  cookies_per_hr: []
};
pike.random_cookie_gen = function (){
  //Calculate random # of customers between the min and max numbers
  //multiply that by the avg cookie sales
  //push the number into pikes cookies_per_hr array.
  pike.cookies_per_hr.push(70)

};

pike.random_cookie_gen ();
console.log(pike);

var cap_hill = {
  loc: 'Capitol Hill',
  min_cust: 20,
  max_cust: 38,
  avg_cookie_sales: 2.3,
  cookies_per_hr: []
};

cap_hill.random_cookie_gen ();


var store_table = document.getElementById('store-table');
console.log(store_table)


function add_store_row (store){
  var cap_hill_store_row = document.createElement('tr');
  //content
  var store_td = document.createElement('td');

  store_td.textContent = store.loc;
  console.log(store.avg_cookie_sales);
  cap_hill_store_row.appendChild(store_td);
  // 
  //content
  store_td = document.createElement('td');

  store_td.textContent = store.min_cust;
  console.log(store.avg_cookie_sales);
  cap_hill_store_row.appendChild(store_td);

  //content
  store_td = document.createElement('td');

  store_td.textContent = store.max_cust;
  console.log(store.avg_cookie_sales);
  cap_hill_store_row.appendChild(store_td);

  //content
  store_td = document.createElement('td');

  store_td.textContent = store.avg_cookie_sales;
  console.log(store.avg_cookie_sales);
  cap_hill_store_row.appendChild(store_td);

  store_td = document.createElement('td');

  store_td.textContent = store.cookies_per_hr;
  console.log(store.cookies_per_hr);
  cap_hill_store_row.appendChild(store_td);

  store_table.appendChild(cap_hill_store_row);
}
add_store_row(cap_hill)
//done with cap hill row
// var pike_store_row = document.createElement('tr');
// store_td = document.createElement('td');



// store_td.textContent = pike.loc;
// console.log(pike.loc);
// pike_store_row.appendChild(store_td);

// store_table.appendChild(pike_store_row);
add_store_row(pike);
//parent element
//new element
//content
//appendchild

//numsTable
//new tr
//content
//parent === tr
//new el === td
//content === a number (5)
//append the td to the tr
//append the tr to the table (table.appendChild(tr))

//var table_elements = document.getElementById('store-table');
//var tr_element = document.createElement('tr');

//for(var i= 0; i < 5; i++){
// content
//  var td_element = document.createElement('td');
//td_element.textContent = 1;
//  tr_element.appendChild(td_element);
//}

//table_element.appendChild(tr_element);