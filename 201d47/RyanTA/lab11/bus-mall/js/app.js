'use strict';

// Ryan -global variables
var allProducts = [];
var previouslyShown = ['initial', 'place', 'holders'];
var clickLimit = 0;
var referenceTable = document.getElementById('image-table');
var imageOne = document.getElementById('img1');
var imageTwo = document.getElementById('img2');
var imageThree = document.getElementById('img3');



// Ryan - Constructor
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allProducts.push(this);
}

// Ryan -instances
new Product('R2D2 Roller Bag', 'img/bag.jpg');
new Product('Banana Cutter', 'img/banana.jpg');
new Product('Bathroom iPad Stand', 'img/bathroom.jpg');
new Product('Open Toed Rainboots', 'img/boots.jpg');
new Product('Breakfast Making Station', 'img/breakfast.jpg');
new Product('Meatball Bubblegum', 'img/bubblegum.jpg');
new Product('Dome Seat Chair', 'img/chair.jpg');
new Product('Cthulhu Figurine', 'img/cthulhu.jpg')
new Product('Doggie Duckbeak Muzzle', 'img/dog-duck.jpg');
new Product('Can of Dragon Meat', 'img/dragon.jpg');
new Product('Silverware Pen Caps', 'img/pen.jpg');
new Product('Sweeping Pet Shoes', 'img/pet-sweep.jpg');
new Product('Pizza Scissors', 'img/scissors.jpg');
new Product('Shark Sleeping Bag', 'img/shark.jpg');
new Product('Floor Sweeping Baby Onesie', 'img/sweep.png');
new Product('Child\'s TaunTaun Sleeping Bag', 'img/tauntaun.jpg');
new Product('Can of Unicorn Meat', 'img/unicorn.jpg');
new Product('Tentacle USB Drive', 'img/usb.gif');
new Product('Self-filling Water Can', 'img/water-can.jpg')
new Product('Spill-proof Wine Glass', 'img/wine-glass.jpg');

// Ryan - gets random allProduct index // instance
function getRandom(){
  return Math.floor(Math.random() * allProducts.length);
}


// Ryan - random render, but not previously shown (6) products.
function selectivelyRender() {
  while(previouslyShown.length > 6){
    previouslyShown.shift();
  }

  var firstImage = getRandom();
  previouslyShown.push(firstImage);

  var secondImage = getRandom();
  while (previouslyShown.includes(secondImage)){
    secondImage = getRandom();
  }
  previouslyShown.push(secondImage);
  var thirdImage = getRandom();

  while (previouslyShown.includes(thirdImage)){
    thirdImage = getRandom();
  }
  previouslyShown.push(thirdImage);

  imageOne.src = allProducts[previouslyShown[3]].filepath;
  imageTwo.src = allProducts[previouslyShown[4]].filepath;
  imageThree.src = allProducts[previouslyShown[5]].filepath;
}

// Ryan - initial render performed on page load
selectivelyRender();


// Ryan - onclick, re-renders and increments total clicks
function clickLimitHandler(){
  if (clickLimit <= 25){
    selectivelyRender();
    clickLimit++;
  }
}

referenceTable.addEventListener('click', clickLimitHandler);
