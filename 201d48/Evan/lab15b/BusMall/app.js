'use strict';

// Global variables
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');
var products = document.getElementById('products');
document.getElementById('productsPicked').innerHTML = '0 of 25 products picked';

var productArray = [];
var productImageArray = [product1, product2, product3];
var totalProductsPicked = 0;

var votes = [];
var title = [];

// Constructor
function ProductImages (name) {
  this.name = name;
  this.filepath = `img/${name}`;
  this.timesPicked = 0;
  this.timesShown = 0;
  productArray.push(this);
}

// Instances
new ProductImages('bag.jpg');
new ProductImages('banana.jpg');
new ProductImages('bathroom.jpg');
new ProductImages('boots.jpg');
new ProductImages('breakfast.jpg');
new ProductImages('bubblegum.jpg');
new ProductImages('chair.jpg');
new ProductImages('cthulhu.jpg');
new ProductImages('dog-duck.jpg');
new ProductImages('dragon.jpg');
new ProductImages('pen.jpg');
new ProductImages('pet-sweep.jpg');
new ProductImages('scissors.jpg');
new ProductImages('shark.jpg');
new ProductImages('sweep.png');
new ProductImages('tauntaun.jpg');
new ProductImages('unicorn.jpg');
new ProductImages('usb.gif');
new ProductImages('water-can.jpg');
new ProductImages('wine-glass.jpg');

// Show 3 random products
function showImages() {
  var uniqueRandomNumber = [];
  while(uniqueRandomNumber.length < 6){
    var r = Math.floor(Math.random() * productArray.length);
    if(uniqueRandomNumber.indexOf(r) === -1) uniqueRandomNumber.push(r);
  }
  for (var i = 0; i < 3; i++) {
    productImageArray[i].src = productArray[uniqueRandomNumber[i]].filepath;
    productImageArray[i].title = productArray[uniqueRandomNumber[i]].name;
    productImageArray[i].alt = productArray[uniqueRandomNumber[i]].name;
    productArray[uniqueRandomNumber[i]].timesShown++;
  }
}
// Need a function

// Event handler
function handleProductClick(event){
  // Get index of clicked element
  var arrayElement = 0;
  while (arrayElement < productArray.length) {
    if (event.target.title === productArray[arrayElement].name){
      productArray[arrayElement].timesPicked++;
      break;
    } else {
      arrayElement++;
    }
  }
  // Tracking total products picked
  totalProductsPicked++;
  updateChartArrays();

  if (totalProductsPicked > 24) {
    document.getElementById('productsPicked').innerHTML = '25 of 25 products picked';
    products.removeEventListener('click', handleProductClick);
    drawChart();
  } else {
    console.log(totalProductsPicked);
    document.getElementById('productsPicked').innerHTML = `${totalProductsPicked} of 25 products picked`;
    showImages();
  }
}

// When I reach 25 votes I need a function to show the vote



//Event Listener
products.addEventListener('click', handleProductClick);

// Show first 3 images
showImages();

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// Charts rendered using Chart JS v.2.8.0
// http://www.chartjs.org/
// ++++++++++++++++++++++++++++++++++++++++++++

function drawChart () {
  var ctx = document.getElementById('productChart').getContext('2d');
  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(250,174,50,1)');
  gradient.addColorStop(1, 'rgba(250,174,50,0)');
  var pickedProductsChart = new Chart(ctx, {

    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: title,
      datasets: [{
        fillColor : gradient, // Put the gradient here as a fill color
        strokeColor : '#ff6c23',
        pointColor : '#fff',
        pointStrokeColor : '#ff6c23',
        pointHighlightFill: '#fff',
        pointHighlightStroke: '#ff6c23',
        label: 'Products Picked',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: votes
      }]
    },

    // Configuration options go here
    options: {}
  });
}

function updateChartArrays() {
  for (var i = 0; i < productArray.length; i++) {
    title[i] = productArray[i].name;
    votes[i] = productArray[i].timesPicked;
  }
}
// drawChart();
// updateChartArrays();

// ++++++++++++++++++++++++++++++++++++++++++++
// Test Code
// ++++++++++++++++++++++++++++++++++++++++++++
// function test() {
// if(threeRandomnumbers.indexof(randomNumber) === -1 && lastThreeNumbers.indexof(randomNumber)=== -1){
//   threeRandomnumbers.push(randomNumber)

//   var threeRandomnumbers = [];
//   var lastThreeNumbers = [];
//   if ( i<0){
//     lastThreeNumbers = randomNumberArray
//   }
// }
// //Make Color Gradient
// function makeColors(){
//   for(var i = 0; i < productArray.length; i++){
//     var endOfColor = i * .05 .toFixed 2;
//     var color = `rgba(255, 0, 0, ${endofColor}`;

//   }
// }

// }
