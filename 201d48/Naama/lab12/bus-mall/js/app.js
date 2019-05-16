'use strict';

// Global variables

var productOne = document.getElementById('product-one');
var productTwo = document.getElementById('product-two');
var productThree = document.getElementById('product-three');

var productPictures = document.getElementById('product-pictures');
var productList = document.getElementById('product-list');

// an array for the product pictures instances
var productPicsArray = [];

// an array for the previously viewed validation - pushed into with the productSelection function below
var previouslyViewed = [];

// The total number of times the user clicked on images - should be up to 25
var totalClicks = 0;

// Arrays to hold data for the chart
var productName = [];
var picClickTotal = [];

var dataChart;
var chartDrawn = false;


// Constructor
function ProductPictures(imageName){
  this.name = imageName;
  this.filepath = `img/${imageName}.jpg`;
  this.timesPicWasShown = 0;
  this.timesPicWasClicked = 0;
  productPicsArray.push(this);
}

// Instances
new ProductPictures('bag');
new ProductPictures('banana');
new ProductPictures('boots');
new ProductPictures('breakfast');
new ProductPictures('bubblegum');
new ProductPictures('chair');
new ProductPictures('cthulhu');
new ProductPictures('dog-duck');
new ProductPictures('dragon');
new ProductPictures('pen');
new ProductPictures('pet-sweep');
new ProductPictures('scissors');
new ProductPictures('shark');
new ProductPictures('sweep');
new ProductPictures('tauntaun');
new ProductPictures('unicorn');
new ProductPictures('water-can');
new ProductPictures('wine-glass');
new ProductPictures('sweep');



// Add the data into the chart arrays 

function updateChartArrays() {
  for (var i = 0; i < productPicsArray.length; i++){
    productName[i] = productPicsArray[i].name;
    picClickTotal[i] = productPicsArray[i].timesPicWasClicked;
  }
}

// Show a random picture function
function showARandomPicture(){
  // generate a random number
  return Math.floor(Math.random() * productPicsArray.length);
}

// previously viewed validation - check if the image was previously viewed if so, choose another img
function productSelection(){

  // TODO - consider shifting first 3 array elements out of array if length is greater than 6 (google)
  var imageOne = showARandomPicture();
  var imageTwo = showARandomPicture();
  var imageThree = showARandomPicture ();
  while (previouslyViewed.includes(imageOne)){
    imageOne = showARandomPicture();
  }
  previouslyViewed.unshift(imageOne);

  while (previouslyViewed.includes(imageTwo)){
    imageTwo = showARandomPicture();
  }
  previouslyViewed.unshift(imageTwo);

  while (previouslyViewed.includes(imageThree)){
    imageThree = showARandomPicture();
  }
  previouslyViewed.unshift(imageThree);
	
  // if the array length is longer than 6 we need to pop the last one. 
  while (previouslyViewed.length >= 7) {
    previouslyViewed.pop();
  }
}

// render 3 random product images
function renderProducts(){
  // function call - determines the first 3 pictures
  productSelection();

  // assign src
  productOne.src = productPicsArray[previouslyViewed[0]].filepath;
  productTwo.src = productPicsArray[previouslyViewed[1]].filepath;
  productThree.src = productPicsArray[previouslyViewed[2]].filepath;
	
  // assign title
  productOne.title = productPicsArray[previouslyViewed[0]].name;
  productTwo.title = productPicsArray[previouslyViewed[1]].name;
  productThree.title = productPicsArray[previouslyViewed[2]].name;

  // assign alt
  productOne.alt = productPicsArray[previouslyViewed[0]].name;
  productTwo.alt = productPicsArray[previouslyViewed[1]].name;
  productThree.alt = productPicsArray[previouslyViewed[2]].name;
	
  // increment time shown
  productPicsArray[previouslyViewed[0]].timesPicWasShown++;
  productPicsArray[previouslyViewed[1]].timesPicWasShown++;
  productPicsArray[previouslyViewed[2]].timesPicWasShown++;
}

// CHART
// Charts rendered using Chart JS v.2.8.0
// http://www.chartjs.org/

var data = {
  labels: productName,
  datasets: [{
    label: 'Total Votes',
    data: picClickTotal,
    backgroundColor: [
      '#1E403C',
      '#397368',
      '#7CA69E',
      '#9FBFB9',
      '#C1D9D4',
      '#9FBFB9',
      '#7CA69E',
      '#397368',
      '#1E403C',
      '#397368',
      '#7CA69E',
      '#9FBFB9',
      '#C1D9D4',
      '#9FBFB9',
      '#7CA69E',
      '#397368',
      '#1E403C',
      '#397368',
      '#7CA69E'
    ],
    hoverBackgroundColor: '#FFD0C7',
    borderColor: '#595959',
    borderWidth: 1
  }]
};

function drawChart(){
  var ctx = document.getElementById('data-chart').getContext('2d');
  dataChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}

// Event handler
function handlePicClick(event){
  totalClicks++;
	
  for (var i = 0; i < productPicsArray.length; i++){
    if (event.target.alt === productPicsArray[i].name){
      productPicsArray[i].timesPicWasClicked++;
    }
  }
	
  if (totalClicks === 25){
    productPictures.removeEventListener('click', handlePicClick);
    // renderList();

    // update and draw chart
    updateChartArrays();
    drawChart();
  }
	
  renderProducts();
}

// function renderList(){
//   for (var i = 0; i < productPicsArray.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = `${productPicsArray[i].name} has ${productPicsArray[i].timesPicWasClicked} selections and was viewed a total of ${productPicsArray[i].timesPicWasShown} times`;
//     productList.appendChild(liEl); 
//   }
// }

// Event listener
productPictures.addEventListener('click', handlePicClick);

// Render the first 3 pictures function call
renderProducts();
