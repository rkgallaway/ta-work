'use strict';

/////////////////GLOBAL VARIABLES//////////////////
var productPic = document.getElementById('products');
var productPic2 = document.getElementById('products2');
var productPic3 = document.getElementById('products3');
var imageContainer = document.getElementById('image-container');
var productList = document.getElementById('product-list');

var totalClicksAcrossAllUsers = 0;
var percentageClicked = 0;
var productArray = [];
var imageIndexArray = [];
var votesRemaining = 25;

var dataChart;
var chartDrawn = false;
var votes = [];
var productNames = [];

var busStorage = [];



if(localStorage.products){
 var parsedProducts = JSON.parse(localStorage.getItem('products'));
  productArray = parsedProducts;
 
} else{
  new DisplayProduct('banana');
  new DisplayProduct('bathroom');
  new DisplayProduct('boots');
  new DisplayProduct('breakfast');
  new DisplayProduct('bubblegum');
  new DisplayProduct('chair');
  new DisplayProduct('cthulhu');
  new DisplayProduct('dog-duck');
  new DisplayProduct('dragon');
  new DisplayProduct('pen');
  new DisplayProduct('pet-sweep');
  new DisplayProduct('scissors');
  new DisplayProduct('shark');
  new DisplayProduct('sweep');
  new DisplayProduct('tauntaun');
  new DisplayProduct('unicorn');
  new DisplayProduct('usb');
  new DisplayProduct('water-can');
  new DisplayProduct('wine-glass');
  new DisplayProduct('bag');
  
}
////////CONSTRUCTOR///////////////////

function DisplayProduct(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.timesShown = 0;
  this.votes = 0;
  productArray.push(this);
}


/////////////INSTANCES////////////////


//////////////////SHOW A RANDOM IMAGE//////////////
function randomIndex(){
  return Math.floor(Math.random() * productArray.length);
}

function showARandomProduct(){
  var imgIndex = randomIndex();
  while(imageIndexArray.includes(imgIndex)){
    imgIndex = randomIndex();
  }
  productPic.src= productArray[imgIndex].filepath;
  productPic.alt=productArray[imgIndex].name;
  productPic.title=productArray[imgIndex].name;
  productArray[imgIndex].timesShown++;
  imageIndexArray.push(imgIndex);
  // remove 0 index from array

  while(imageIndexArray.length > 6){
    imageIndexArray.shift();
  }



  console.log(imageIndexArray);
}

function showARandomProduct2(){
  var imgIndex = randomIndex();
  while(imageIndexArray.includes(imgIndex)){
    imgIndex = randomIndex();
  }
  productPic2.src= productArray[imgIndex].filepath;
  productPic2.alt=productArray[imgIndex].name;
  productPic2.title=productArray[imgIndex].name;
  productArray[imgIndex].timesShown++;

  imageIndexArray.push(imgIndex);
  while(imageIndexArray.length > 6){
    imageIndexArray.shift();
  }
  console.log(imageIndexArray);
}
function showARandomProduct3(){
  var imgIndex = randomIndex();
  while(imageIndexArray.includes(imgIndex)){
    imgIndex = randomIndex();
  }

  productPic3.src= productArray[imgIndex].filepath;
  productPic3.alt=productArray[imgIndex].name;
  productPic3.title=productArray[imgIndex].name;
  productArray[imgIndex].timesShown++;
  imageIndexArray.push(imgIndex);

  while(imageIndexArray.length > 6){
    imageIndexArray.shift();
  }
  console.log(imageIndexArray);
}

function renderResults(){

  for(var i = 0; i < productArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${productArray[i].name} got ${productArray[i].votes} votes and was viewed ${productArray[i].timesShown} times`;
    productList.appendChild(liEl);
  }
}

function tallyChartData() {
  for (var i = 0; i < productArray.length; i++) {
    productNames[i] = productArray[i].name;
    votes[i] = productArray[i].votes;
  }
}

// Event handler
function handleProductClick(event){
  if(event.target.id === 'image-container'){
    alert('click the image genius');
  }
  console.log(event.target.alt);
  votesRemaining--;


  var ProductImgName = event.target.alt;
  console.log('my event target alt', event.target.alt);

  for(var i = 0; i < productArray.length; i++){
    if(productArray[i].name === ProductImgName){
      productArray[i].votes++;
    }
  }

  if(votesRemaining === 0){
    tallyChartData();
    saveToLocalStorage();
    drawChart();

    imageContainer.removeEventListener('click', handleProductClick);
  }
  threePicDisplay();
}
function saveToLocalStorage(){
  var stringifyProducts = JSON.stringify(productArray);
  localStorage.setItem('products', stringifyProducts);
}


function threePicDisplay(){




  showARandomProduct();
  showARandomProduct2();
  showARandomProduct3();
}
/////////////////////////CHART STUFF////////////////


var data = {
  labels: productNames, 
  datasets: [{
    label: 'Vote Distribution',
    data: votes, 
    backgroundColor: [
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',
      'goldenrod',


    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ]
  }]
};

function drawChart() {
  var ctx = document.getElementById('product-chart').getContext('2d');
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
  ///////////////////////////THING///////////////////////////////
  chartDrawn = true;
}



document.getElementById('product-list').addEventListener('click', function() {
  document.getElementById('product-list').hidden = true;

});

threePicDisplay();
console.log(busStorage);

console.log(productNames, votes);

imageContainer.addEventListener('click', handleProductClick);


