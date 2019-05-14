'use strict';

// Global variables
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');
var products = document.getElementById('products');
var productArray = [];
var productImageArray = [product1, product2, product3];

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
  while(uniqueRandomNumber.length < 3){
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
  showImages();
}

//Event Listener
products.addEventListener('click', handleProductClick);

// Show first 3 images
showImages();

// generate 3 unique random numbers

