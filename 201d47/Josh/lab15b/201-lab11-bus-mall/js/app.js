'use strict';

var productPictureReference = document.getElementById('image-container');

var img1 = document.getElementById('rand-img1');
var img2 = document.getElementById('rand-img2');
var img3 = document.getElementById('rand-img3');
var allProducts = [];
var lastShown = ['initial', 'place', 'holders'];
var productDescriptions = [];
var totalClicks = 0;
var MAX_CLICK = 25;
var totalVotes = [];

var listResults = document.getElementById('list');

function getRandomProductNumber(){
  var randomNumber = Math.floor(Math.random() * allProducts.length);
  return randomNumber;
}
function renderRandomProduct(){
  while(lastShown.length > 6){
    lastShown.shift();
  }

  var firstImage = getRandomProductNumber();
  while(lastShown.includes(firstImage)){
    firstImage = getRandomProductNumber();
  }
  lastShown.push(firstImage);

  var secondImage = getRandomProductNumber();
  while(lastShown.includes(secondImage)){
    secondImage = getRandomProductNumber();
  }
  lastShown.push(secondImage);

  var thirdImage = getRandomProductNumber();
  while(lastShown.includes(thirdImage)){
    thirdImage = getRandomProductNumber();
  }
  lastShown.push(thirdImage);

  allProducts[lastShown[3]].views++;
  allProducts[lastShown[4]].views++;
  allProducts[lastShown[5]].views++;

  img1.src = allProducts[lastShown[3]].picturePath;
  img1.alt = allProducts[lastShown[3]].description;
  img2.src = allProducts[lastShown[4]].picturePath;
  img2.alt = allProducts[lastShown[4]].description;
  img3.src = allProducts[lastShown[5]].picturePath;
  img3.alt = allProducts[lastShown[5]].description;
}
function renderList(){
  for(var i = 0; i < allProducts.length; i++){
    var liElement = document.createElement('li');
    liElement.textContent = `${allProducts[i].description}: ${allProducts[i].views}
    views and ${allProducts[i].vote} votes`;
    listResults.append(liElement);
  }
}

// Product.parsedProducts = JSON.parse(localStorage.getItem('allProductStorage'));

function Product(picturePath, description){
  this.vote = 0;
  this.views = 0;
  this.picturePath = picturePath;
  this.description = description;
  allProducts.push(this);
  productDescriptions.push(description);
}

Product.allProducts = Product.parsedProducts ||[
  new Product('img/bag.jpg', 'a Bag'),
  new Product('img/banana.jpg', 'a Banana'),
  new Product('img/bathroom.jpg', 'a bathroom'),
  new Product('img/boots.jpg', 'some Boots'),
  new Product('img/breakfast.jpg', 'Yummy Breakfast'),
  new Product('img/bubblegum.jpg', 'a bubblegum'),
  new Product('img/chair.jpg', 'a chair'),
  new Product('img/cthulhu.jpg', 'Heed the Call'),
  new Product('img/dog-duck.jpg', 'qua= Product.parsedProducts ||cky'),
  new Product('img/dragon.jpg', 'a DRAGON!'),
  new Product('img/pen.jpg', 'una Pluma, guay.'),
  new Product('img/pet-sweep.jpg', 'its not a vaccum'),
  new Product('img/scissors.jpg', 'Dont run with these!'),
  new Product('img/shark.jpg', 'Insert Jaws Theme Here'),
  new Product('img/sweep.png', 'SWIFFER'),
  new Product('img/tauntaun.jpg', 'And I thought they smelled bad..'),
  new Product('img/unicorn.jpg', 'Sparkly'),
  new Product('img/usb.gif', 'Wriggly'),
  new Product('img/water-can.jpg', 'Yup'),
  new Product('img/wine-glass.jpg', 'Salut!'),
];


renderRandomProduct();
productPictureReference.addEventListener('click', handleClick);


function handleClick(event){
  if(event.target.alt === 'image-comtainer'){
    alert('Click on the Image, Brah');
  }
  totalClicks++;

  for(var i = 0; i < allProducts.length; i++){
    if(event.target.alt === allProducts[i].description){
      allProducts[i].vote++;
    }
  }

  if(totalClicks === MAX_CLICK){

    productPictureReference.removeEventListener('click', handleClick);
    drawChart();
    renderList();
  }
  renderRandomProduct();


}
function drawChart(){
  var canvasReference = document.getElementById('myChart');
  for(var i = 0; i < allProducts.length; i++){
    totalVotes.push(allProducts[i].vote);
  }
  localStorage.setItem('allProductsStorage', JSON.stringify(Product.allProducts));
  var stringifiedProducts = JSON.stringify(allProducts);
  localStorage.setItem('allProductsStorage', stringifiedProducts);
  var productsParsed = JSON.parse(localStorage.getItem('allProductsStorage'));
  console.log(productsParsed);

  new Chart(canvasReference, {
    type: 'bar',
    data: {
      labels: productDescriptions,
      datasets: [{
        label: 'Product Ratings',
        data: totalVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',

        ],
        borderColor: [
          'rgba(255, 9, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 10,
            min: 0,
            stepSize:1.0,
            beginAtZero: true
          }
        }]
      }
    }
  });
}


