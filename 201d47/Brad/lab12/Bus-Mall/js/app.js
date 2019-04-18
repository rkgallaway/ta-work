'use strict';

//windows into DOM
var picOneId = document.getElementById('pic-one');
var picTwoId = document.getElementById('pic-two');
var picThreeId = document.getElementById('pic-three');
var container = document.getElementById('item-section');

//global variables

var MAX_CLICKS = 25;
var previouslyShown = ['inital', 'place', 'holders'];
var productsArray = [];
var productDescriptions = [];

var totalClicks = 0;

//Constructor
function Product(picturePath, description) {
  this.picturePath = picturePath;
  this.description = description;
  this.vote = 0;
  this.views = 0;

  productsArray.push(this);
  productDescriptions.push(description);
}

new Product('img/bag.jpg', 'R2 D2 robot rolling suitcase');
new Product('img/banana.jpg','Banana slicer' );
new Product('img/bathroom.jpg', 'iPad holder/ toilet paper stand');
new Product('img/boots.jpg', 'Yellow peep-toe rain boots');
new Product('img/breakfast.jpg', 'Toasteroven/coffee maker combo');
new Product('img/bubblegum.jpg', 'Meatball shaped bubblegum');
new Product('img/chair.jpg','Funky-looking chair');
new Product('img/cthulhu.jpg', 'Green action-figure');
new Product('img/dog-duck.jpg', 'Duck noise maker');
new Product('img/dragon.jpg', 'Can of dragon meat');
new Product('img/pen.jpg', 'Pen cap utensils');
new Product('img/pet-sweep.jpg', 'Pet-sweep product');
new Product('img/scissors.jpg', 'Pizza scissors');
new Product('img/shark.jpg', 'Shark sleeping bag');
new Product('img/sweep.png', 'Baby in a jumper designed to sweep');
new Product('img/tauntaun.jpg', 'Tauntaun sleeping bag');
new Product('img/unicorn.jpg', 'Can of Unicorn meat');
new Product('img/usb.gif', 'Tenticle shaped USB drive' );
new Product('img/water-can.jpg', 'Non-functioning watering can');
new Product('img/wine-glass.jpg', 'Egg-shaped wine glass');


function getRandom () {
  var randomNumber = Math.floor(Math.random() * productsArray.length);
  return randomNumber;
}

function productSelector(){
  while(previouslyShown.length > 6){
    previouslyShown.shift();
    console.log(1);
  }

  var firstImage = getRandom();
  while(previouslyShown.includes(firstImage)){
    firstImage = getRandom();
    console.log(2);
  }
  previouslyShown.push(firstImage);

  var secondImage = getRandom();
  while(previouslyShown.includes(secondImage)){
    secondImage = getRandom();
    console.log(3);
  }
  previouslyShown.push(secondImage);

  var thirdImage = getRandom();
  while(previouslyShown.includes(thirdImage)){
    thirdImage = getRandom();
    console.log(4);
  }
  previouslyShown.push(thirdImage);
}

function productRender(){
  productSelector();
  picOneId.src = productsArray[previouslyShown[3]].picturePath;
  picOneId.alt = productsArray[previouslyShown[3]].description;

  picTwoId.src = productsArray[previouslyShown[4]].picturePath;
  picTwoId.alt = productsArray[previouslyShown[4]].description;

  picThreeId.src = productsArray[previouslyShown[5]].picturePath;
  picThreeId.alt = productsArray[previouslyShown[5]].description;
}

function handleClick(event){
  if(event.target.id === 'item-section') {
    alert('Please click and image.');
  }
  totalClicks++;
  for(var i = 0; i < productsArray.length; i++){
    if(event.target.alt === productsArray[i].description){
      productsArray[i].vote++;
    }
  }
  if(totalClicks === MAX_CLICKS){
    container.removeEventListener('click', handleClick);
    // updateChartArrays(); //will write function to populate chart
    drawChart(); //will write function to render chart
  }
  productRender();
}

productRender();

// function updateChartArrays(){
//   for(var i = 0; i < productsArray.length; i++){
//     productDescriptions[i] = productsArray[i].description;
//     chartVotes[i] = productsArray[i].vote;
//   }
// }

container.addEventListener('click', handleClick);


function drawChart(){
  var canvasReference = document.getElementById('results-chart');

  var totalVotes = [];
  for(var i = 0;i < productsArray.length; i++) {
    totalVotes.push(productsArray[i].vote);
  }

  new Chart(canvasReference, {
    type: 'bar',
    data: {
      labels: productDescriptions, // label for each individual bar
      datasets: [{
        label: 'Votes Per Picture',
        data: totalVotes, // an array of the number of votes per goat
        backgroundColor: ['red', 'blue', 'green', 'orange', 'pink', 'black', 'red', 'blue', 'green', 'orange', 'pink'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          tick: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
}
