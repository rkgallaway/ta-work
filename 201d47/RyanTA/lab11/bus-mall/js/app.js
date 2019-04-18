'use strict';

// Ryan -global variables
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allProducts = [];
var previouslyShown = ['initial', 'place', 'holders'];
var totalClicks = 0;
var MAX_CLICKS = 25;
var chartVotes = [];
var chartNames = [];


//DOM 'windows'
var container = document.getElementById('image-container');
var imageOne = document.getElementById('img1');
var imageTwo = document.getElementById('img2');
var imageThree = document.getElementById('img3');


// Ryan - Constructor
function Product(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

// Ryan -instances
function createProducts(){
  for (var i = 0; i < names.length; i++){
    new Product(names[i]);
  }
}

createProducts();

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
  selectivelyRender();
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
}

function handleClick(event){
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
    updateChartArrays();
    drawChart();
  }
  productRender();
}

// Ryan - initial render performed on page load
productRender();


function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    chartNames[i] = allProducts[i].name;
    chartVotes[i] = allProducts[i].votes;
  }
}

//chart functionality
var data = {
  labels: chartNames, // titles array we declared earlier
  datasets: [
    {
      label: 'Participant Results',
      data: chartVotes, // votes array we declared earlier
      backgroundColor: [
        'darkturquoise',
        'violet',
        'black',
        'fuchsia',
        'orange', //5
        'purple',
        'navy',
        'magenta',
        'teal',
        'maroon', //10
        'indigo',
        'dimgray',
        'darkmagenta',
        'darkkhaki',
        'darkorange', //15
        'coral',
        'cadetblue',
        'darkred', //18
        'darkslategray',
        'blueviolet'   
      ],
      hoverBackgroundColor: [
        'darkgreen',
        'darkgreen',
        'darkgreen',
        'darkgreen',
        'darkgreen'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('productChart').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      legend: {
        labels: {
          fontColor: 'darkgreen',
          fontSize: 18
        }
      },
      responsive: false,
      animation: {
        duration: 1000,
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
}



container.addEventListener('click', handleClick);
