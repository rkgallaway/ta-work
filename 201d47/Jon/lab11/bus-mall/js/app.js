'use strict';


var productImage1 = document.getElementById('product-image-1');
var productImage2 = document.getElementById('product-image-2');
var productImage3 = document.getElementById('product-image-3');

var currentImage1 = 0;
var currentImage2 = 1;
var currentImage3 = 2;

var clickCounter = 0;
var allProductArray = [];

function getRandomProductNumber() {
    var randomNumber = Math.floor(Math.random() * allProductArray.length);
    return randomNumber;
}

function renderRandomProduct1() {
    var productImageReference = document.getElementById('product-image-1');
    var randomIndex = getRandomProductNumber();
    var randomProduct = allProductArray[randomIndex];

    productImageReference.src = randomProduct.imagePath;
    productImageReference.descripition = randomProduct.descripition;
}

function renderRandomProduct2() {
    var productImageReference = document.getElementById('product-image-2');
    var randomIndex = getRandomProductNumber();
    var randomProduct = allProductArray[randomIndex];

    productImageReference.src = randomProduct.imagePath;
    productImageReference.descripition = randomProduct.descripition;
}
function renderRandomProduct3() {
    var productImageReference = document.getElementById('product-image-3');
    var randomIndex = getRandomProductNumber();
    var randomProduct = allProductArray[randomIndex];

    productImageReference.src = randomProduct.imagePath;
    productImageReference.descripition = randomProduct.descripition;
}


function Product(imagePath, description) {
    this.imagePath = imagePath;
    this.descripition = description;

    this.choosenProduct = 0;
    this.timesShown = 0;

    allProductArray.push(this);
}

  
var productHandler = function(event) {
    if(event.target.id ==='product-image-1' || event.target.id === 'product-image-2' || 
    event.target.id === 'product-image-3') {
        do {
            var randomImage1 = getRandomProductNumber();
        } while (randomImage1 === currentImage1 || randomImage1 === currentImage2 || 
            randomImage1 === currentImage3 ||randomImage1 === randomImage2 || 
            randomImage1 === randomImage3);

        do {
            var randomImage2 = getRandomProductNumber();
        } while (randomImage2 === currentImage1 || randomImage2 === currentImage2 || 
            randomImage2 === currentImage3 || randomImage2 === randomImage1 || 
            randomImage2 === randomImage3);

        do {
            var randomImage3 = getRandomProductNumber();
        } while (randomImage3 === currentImage1 || randomImage3 === currentImage2 || 
            randomImage3 === currentImage3 || randomImage3 === randomImage1 || 
            randomImage3 === randomImage2);
    }

    function renderRandomProduct1() {
        var productImageReference = document.getElementById('product-image-1');
        var randomProduct = allProductArray[randomImage1];
    
        productImageReference.src = randomProduct.imagePath;
        productImageReference.descripition = randomProduct.descripition;
    }

    function renderRandomProduct2() {
        var productImageReference = document.getElementById('product-image-2');
        var randomProduct = allProductArray[randomImage2];
    
        productImageReference.src = randomProduct.imagePath;
        productImageReference.descripition = randomProduct.descripition;
    }
    
    function renderRandomProduct3() {
        var productImageReference = document.getElementById('product-image-3');
        var randomProduct = allProductArray[randomImage3];
    
        productImageReference.src = randomProduct.imagePath;
        productImageReference.descripition = randomProduct.descripition;
    }

    if (event.target.id === 'product-image-1') {
        allProductArray[currentImage1].choosenProduct++;
      } else if (event.target.id === 'product-image-2') {
        allProductArray[currentImage2].choosenProduct++;
      } else if (event.target.id === 'product-image-3') {
        allProductArray[currentImage3].choosenProduct++;
      }

      allProductArray[currentImage1].timesShown++;
      allProductArray[currentImage2].timesShown++;
      allProductArray[currentImage3].timesShown++;

    console.log(allProductArray);

    currentImage1 = randomImage1;
    currentImage2 = randomImage2;
    currentImage3 = randomImage3;
    
    renderRandomProduct1();
    renderRandomProduct2();
    renderRandomProduct3();

    clickCounter++;
    if (clickCounter === 25) {
      imageSection.removeEventListener('click', productHandler);
    }
    console.log(clickCounter);
  
}

imageSection.addEventListener('click', productHandler);

new Product('img/bag.jpg', 'Star Wars Bag');
new Product('img/banana.jpg','Banana Cutter');
new Product('img/bathroom.jpg','Bathroom Ipad Stand');
new Product('img/boots.jpg','Toeless Rain Boots');
new Product('img/breakfast.jpg','All in One Breakfeast Cooker');
new Product('img/bubblegum.jpg','Meatball Bubblegum');
new Product('img/chair.jpg','Convex Chair');
new Product('img/cthulhu.jpg','Cthulhu Action Figure');
new Product('img/dog-duck.jpg','Duckbill');
new Product('img/dragon.jpg','Dragon Meat');
new Product('img/pen.jpg','Pen Utensils');
new Product('img/pet-sweep.jpg','Pet Floor Mops');
new Product('img/scissors.jpg','Pizza Scissors');
new Product('img/shark.jpg','Shark Sleepingbag');
new Product('img/sweep.png','Baby Sweeper');
new Product('img/tauntaun.jpg','Tauntaun Sleepingbag');
new Product('img/unicorn.jpg','Unicorn Meat');
new Product('img/usb.gif','Tenticle USB');
new Product('img/water-can.jpg','Reverse Watering Can');
new Product('img/wine-glass.jpg','Wine-Glass');
renderRandomProduct1();
renderRandomProduct2();
renderRandomProduct3();