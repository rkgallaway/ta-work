'use strict';

// Global variables
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');
var products = document.getElementById('products');
var productTable = document.getElementById('productTable');
document.getElementById('productsPicked').innerHTML = '0 of 25 products picked';

var productArray = [];
var productImageArray = [product1, product2, product3];
var totalProductsPicked = 0;
var pickedProductsChart;
var chartDrawn = true;

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
  if (totalProductsPicked > 24) {
    document.getElementById('productsPicked').innerHTML = '25 of 25 products picked';
    products.removeEventListener('click', handleProductClick);
    renderResults();
  } else {
    console.log(totalProductsPicked);
    document.getElementById('productsPicked').innerHTML = `${totalProductsPicked} of 25 products picked`;
    showImages();
  }
}

// When I reach 25 votes I need a function to show the vote
function renderResults(){
  var ulEL = document.createElement('ul');
  productTable.appendChild(ulEL);

  for (var i = 0; i < productArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${productArray[i].timesPicked} - vote(s) for ${productArray[i].name}`;
    ulEL.appendChild(liEl);
  }
}

//Event Listener
products.addEventListener('click', handleProductClick);

// Show first 3 images
showImages();

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// Charts rendered using Chart JS v.2.8.0
// http://www.chartjs.org/
// ++++++++++++++++++++++++++++++++++++++++++++

var data = {
  labels: name,
  datasets: [{
    data: ProductImages.timesPicked,
  }]
};
drawChart();
function drawChart() {
  var ctx = document.getElementById('productChart').getContext('2d');
  pickedProductsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      }
    },
    savles: {
      yAxes: [{
        ticks: {
          max:10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}
