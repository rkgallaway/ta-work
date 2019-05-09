'use strict';



var allStores = [];

//source mdn math.random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }


//store hours firstAndPike
var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
'6pm','7pm','8pm'];

//var to call elementById
var storeTable = document.getElementById('store-table');

// pike obj literal
function Store (min,max,avg,name) {
  this.minCust = min;
  this.maxCust = max;
  this.salesPerCust = avg;
  this.storeName = name;
  this.hourlySales = [];
  this.totalDailySales = 0;
  this.hourlySalesCalc = function(){
for (var i = 0; i < storeHours.length; i++){
  this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust));
        } 
    }

this.dailyTotalCalculator = function(){
    for (var i = 0; i < this.hourlySales.length; i++){
    this.totalDailySales += this.hourlySales[i];
    }
    };
this.allCall = function(){
this.hourlySalesCalc();
this.dailyTotalCalculator();
this.render();
};

    // //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
    this.render = function(){
        var trEl = document.createElement ('tr');
        var tdEl = document.createElement('td');
        tdEl.textContent = this.storeName;
        trEl.appendChild(tdEl);
        for ( var i = 0; i < storeHours.length; i ++){
          tdEl = document.createElement('td');
          tdEl.textContent = this.hourlySales[i];
          trEl.appendChild(tdEl);
        }
        tdEl = document.createElement('td');
        tdEl.textContent = this.totalDailySales;
        trEl.appendChild(tdEl);
        storeTable.appendChild(trEl);
      
      }
      
    allStores.push(this);
  }
     
var firstAndPike = new Store (23, 65, 6.3, 'First and Pike');
var seaTacAir = new Store (3, 24, 1.2, 'SeaTac Airport');
var seaCen = new Store (11, 38, 3.7, 'Seattle Center');
var capitolHill = new Store (20, 38, 2.3, 'Capitol Hill');
var alkiOne = new Store (2, 16, 4.6, 'Alki');


function tableHeaderRow (){
  var trEl = document.createElement ('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);
  for ( var i = 0; i < storeHours.length; i ++){
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);

}

function renderAllStores(){
    for (var i = 0; i < allStores.length; i++){
      allStores[i].allCall();
    }
  }


tableHeaderRow();
renderAllStores();
// footer();








// ///////////////////////////////**** */Seatac Airport***////////////////////////



// //source mdn math.random
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }


// //store hours SeaTac Airport
// var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
// '6pm','7pm','8pm'];

// //var to call elementById
// var seaTac = document.getElementById('seaTac');


// // pike obj literal
// var seaTacAir = {
//     minCust: 3,
//     maxCust: 24,
//     salesPerCust: 1.2,
//     hourlySales: [],
//     totalDailySales: 0,
//     hourlySalesCalc: function(){
//         for (var i = 0; i < storeHours.length; i++){
//         this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
//         } 
//     },
//     dailyTotalCalculator: function(){
//       for (var i = 0; i < this.hourlySales.length; i++){
//       this.totalDailySales += this.hourlySales[i];
//       }
//     },
//     allCall: function(){
//       this.hourlySalesCalc();
//       this.dailyTotalCalculator();
//       this.render();
//     },


//     //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
// render: function(){
//         for (var i = 0; i < storeHours.length; i++){
//         // create an element
//         var liEl = document.createElement('li');
//         console.log('liEl is', liEl);
//         // give the element content
//         liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
//         console.log('liEl with content', liEl);
//         // append the element to the dom
//         seaTac.appendChild(liEl);
//         }
//         var liEl = document.createElement('li');
//         liEl.textContent = 'Total: ' + this.totalDailySales;
//         seaTac.appendChild(liEl);
  
//       }
//   }

// seaTacAir.allCall();
// // totalDailySales[hourlySales];
// //total cookies

// ///////////////////////////////**** */Seattle Center***////////////////////////



// //source mdn math.random
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }


// //store hours Seattle Center
// var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
// '6pm','7pm','8pm'];

// //var to call elementById
// var seaCen = document.getElementById('seaCen');


// // pike obj literal
// var seaCenter = {
//   minCust: 11,
//   maxCust: 38,
//   salesPerCust: 3.7,
//   hourlySales: [],
//   totalDailySales: 0,
//   hourlySalesCalc: function(){
//       for (var i = 0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
//       } 
//   },
//   dailyTotalCalculator: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//     this.totalDailySales += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalCalculator();
//     this.render();
//   },


//   //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
// render: function(){
//       for (var i = 0; i < storeHours.length; i++){
//       // create an element
//       var liEl = document.createElement('li');
//       console.log('liEl is', liEl);
//       // give the element content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
//       console.log('liEl with content', liEl);
//       // append the element to the dom
//       seaCen.appendChild(liEl);
//       }
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total: ' + this.totalDailySales;
//       seaCen.appendChild(liEl);

//     }
// }

// seaCenter.allCall();
// // totalDailySales[hourlySales];
// //total cookies

// ///////////////////////////////**** */Capitol Hill***////////////////////////



// //source mdn math.random
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }


// //store hours Seattle Center
// var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
// '6pm','7pm','8pm'];

// //var to call elementById
// var capHill = document.getElementById('capHill');


// // pike obj literal
// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   salesPerCust: 2.3,
//   hourlySales: [],
//   totalDailySales: 0,
//   hourlySalesCalc: function(){
//       for (var i = 0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
//       } 
//   },
//   dailyTotalCalculator: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//     this.totalDailySales += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalCalculator();
//     this.render();
//   },

//   //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
// render: function(){
//       for (var i = 0; i < storeHours.length; i++){
//       // create an element
//       var liEl = document.createElement('li');
//       console.log('liEl is', liEl);
//       // give the element content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
//       console.log('liEl with content', liEl);
//       // append the element to the dom
//       capHill.appendChild(liEl);
//       }
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total: ' + this.totalDailySales;
//       capHill.appendChild(liEl);

//     }
// }

// capitolHill.allCall();
// // totalDailySales[hourlySales];
// //total cookies

// ///////////////////////////////**** */Alki***////////////////////////



// //source mdn math.random
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }


// //store hours Seattle Center
// var storeHours = ['6am', '7am','8am','9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '5pm',
// '6pm','7pm','8pm'];

// //var to call elementById
// var alkiOne = document.getElementById('alkiOne');


// // pike obj literal
// var alkiTwo = {
//   minCust: 2,
//   maxCust: 16,
//   salesPerCust: 4.6,
//   hourlySales: [],
//   totalDailySales:0,
//   hourlySalesCalc: function(){
//       for (var i = 0; i < storeHours.length; i++){
//       this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.salesPerCust))
//       } 
//   },
//   dailyTotalCalculator: function(){
//     for (var i = 0; i < this.hourlySales.length; i++){
//     this.totalDailySales += this.hourlySales[i];
//     }
//   },
//   allCall: function(){
//     this.hourlySalesCalc();
//     this.dailyTotalCalculator();
//     this.render();
//   },


//   //render - A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
// render: function(){
//       for (var i = 0; i < storeHours.length; i++){
//       // create an element
//       var liEl = document.createElement('li');
//       console.log('liEl is', liEl);
//       // give the element content
//       liEl.textContent = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';        
//       console.log('liEl with content', liEl);
//       // append the element to the dom
//       alkiOne.appendChild(liEl);
//       }
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total: ' + this.totalDailySales;
//       alkiOne.appendChild(liEl);

//     }
// }

// alkiTwo.allCall();
// // totalDailySales[hourlySales];
// //total cookies










