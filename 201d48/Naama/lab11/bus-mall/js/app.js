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

// renders 3 random images
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
    renderList();
  }
	
  renderProducts();
}

function renderList(){
  for (var i = 0; i < productPicsArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${productPicsArray[i].name} has ${productPicsArray[i].timesPicWasClicked} selections and was viewed a total of ${productPicsArray[i].timesPicWasShown} times`;
    productList.appendChild(liEl); 
  }
}

// Event listener
productPictures.addEventListener('click', handlePicClick);

// Render the first 3 pictures function call
renderProducts();
