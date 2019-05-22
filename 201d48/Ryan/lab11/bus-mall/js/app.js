'use strict';


// my original lab 11
//create global variables
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allProducts = [];
var previouslyShown = ['initial', 'place', 'holders'];
var MAX_CLICKS = 25;
var totalClicks = 0;

//DOM
var container = document.getElementById('image-container');
var imageOne = document.getElementById('img-one');
var imageTwo = document.getElementById('img-two');
var imageThree = document.getElementById('img-three');
var productList = document.getElementById('product-list')

//constructore
function Product(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}


for (var i = 0; i < names.length; i++){
  new Product(names[i]);
}

function getRandom(){
  return Math.floor(Math.random() * allProducts.length);
}

function productSelection() {
  while(previouslyShown.length > 6){
    previouslyShown.shift();
  }

  var firstImage = getRandom();
  while (previouslyShown.includes(firstImage)){
    firstImage = getRandom();
  }

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
}

function productRender(){
  productSelection();
  allProducts[previouslyShown[3]].views++;
  allProducts[previouslyShown[4]].views++;
  allProducts[previouslyShown[5]].views++;
  imageOne.src = allProducts[previouslyShown[3]].filepath;
  imageTwo.src = allProducts[previouslyShown[4]].filepath;
  imageThree.src = allProducts[previouslyShown[5]].filepath;
  imageOne.alt = allProducts[previouslyShown[3]].name;
  imageTwo.alt = allProducts[previouslyShown[4]].name;
  imageThree.alt = allProducts[previouslyShown[5]].name;
  imageOne.title = allProducts[previouslyShown[3]].name;
  imageTwo.title = allProducts[previouslyShown[4]].name;
  imageThree.title = allProducts[previouslyShown[5]].name;
  imageOne.tabIndex = '0';
  imageTwo.tabIndex = '0';
  imageThree.tabIndex = '0';
}



function handleClick(event){
  // console.log (event.target.alt, 'was clicked');
  if (event.target.id === 'image-container'){
    alert('Please click on an image!');
  }
  totalClicks++;


  for(var i = 0; i < allProducts.length; i++){
    if (event.target.alt === allProducts[i].name){
      allProducts[i].votes++;
    }
  }

  if(totalClicks === MAX_CLICKS){
    container.removeEventListener('click', handleClick);
    showList();
  }

  productRender();
}


function showList(){
  // alert ('pretend list is showinwg');
  for (var i = 0; i < allProducts.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].name} has ${allProducts[i].views} views and ${allProducts[i].votes} votes`;
    productList.appendChild(liEl);
  }
}

productRender();

container.addEventListener('click', handleClick);
