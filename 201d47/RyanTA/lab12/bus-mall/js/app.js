'use strict';
//////////////////////////////////////

// check local st.

//use the data if exists

//render chart using old data




/////////////////////////////////////
//create global variables
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var allProducts = [];
var totalClicks = 0;
//DOM
var container = document.getElementById('image-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var productList = document.getElementById('product-list')
var justViewed = [];

// Arrays to hold data for the chart
var chartVotes = [];
var chartNames = [];


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

function makRandom(){
  return Math.floor(Math.random() * allProducts.length);
}


/////////////////////////////////


function makeThreeUnique(){
  var output = [];

  var firstNum = makRandom(); //make first
  while(justViewed.includes(firstNum)){
    firstNum = makRandom(); //makes first again

  }
  output.push(firstNum);

  var secondNum = makRandom(); //make first
  while(justViewed.includes(firstNum)){
    secondNum = makRandom(); //makes first again

  }
  output.push(secondNum);
  while (output[0] === output[1]){
    output[1] = makRandom();
  }
  // output.push(makRandom()); //make third  85 -90 var firstNum-output.push(firstNumreplaces this line w/thirdNum)
  var thirdNum = makRandom(); //make first
  while(justViewed.includes(firstNum)){
    thirdNum = makRandom(); //makes first again

  }
  output.push(thirdNum);
  while (output[0] === output[2] || output[1] === output[2]){
    output[2] = makRandom();
  }
  justViewed = output;
  return output;
}

function productRender(){
  var idx= makeThreeUnique();
  allProducts[idx[0]].views++;
  allProducts[idx[1]].views++;
  allProducts[idx[2]].views++;
  left.src = allProducts[idx[0]].filepath;
  center.src = allProducts[idx[1]].filepath;
  right.src = allProducts[idx[2]].filepath;
  left.alt = allProducts[idx[0]].name;
  center.alt = allProducts[idx[1]].name;
  right.alt = allProducts[idx[2]].name;
  left.title = allProducts[idx[0]].name;
  center.title = allProducts[idx[1]].name;
  right.title = allProducts[idx[2]].name;

}



function handleClick(event){
  // console.log (event.target.alt, 'was clicked');
  if (event.target.id === 'image-container'){
    return alert('Please click on an image!');
  }
  totalClicks++;


  for(var i = 0; i < allProducts.length; i++){
    if (event.target.alt === allProducts[i].name){
      allProducts[i].votes++;
    }
  }

  if(totalClicks === 25){
    container.removeEventListener('click', handleClick);
    //local
    updateChartArrays();
    drawChart();
    showList();
  }

  productRender();
}
function showList(){
  // alert ('pretend list is showinwg');
  for (var i = 0; i < allProducts.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].name}: ${allProducts[i].views} views & ${allProducts[i].votes} votes`;
    productList.appendChild(liEl);
  }
}

productRender();

//purple rain example
function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    chartNames[i] = allProducts[i].name;
    chartVotes[i] = allProducts[i].votes;
  }
}
// updateChartArrays();

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
  // chartDrawn = true;
}

container.addEventListener('click', handleClick);
