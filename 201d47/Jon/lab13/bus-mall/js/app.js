'use strict';
//----------Gobals--------------------------------------------------------
var generateTableDate = false;
var ctx = document.getElementById("resultsChart").getContext('2d');

var productImage1 = document.getElementById('product-image-1');
var productImage2 = document.getElementById('product-image-2');
var productImage3 = document.getElementById('product-image-3');

var currentImage1 = 0;
var currentImage2 = 1;
var currentImage3 = 2;

var clickCounter = 0;
var allProductArray = [];
var productDescripition = [];
var timesProductsShown = [];
var initialImage = [];

//----------
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
    initialImage.push(randomIndex);
}

function renderRandomProduct2() {
    var productImageReference = document.getElementById('product-image-2');
    do {var randomIndex = getRandomProductNumber();
    } while (randomIndex === initialImage[0]);
    var randomProduct = allProductArray[randomIndex];

    productImageReference.src = randomProduct.imagePath;
    productImageReference.descripition = randomProduct.descripition;
    initialImage.push(randomIndex);
}
function renderRandomProduct3() {
    var productImageReference = document.getElementById('product-image-3');
    do {var randomIndex = getRandomProductNumber();
    } while (randomIndex === initialImage[0] || randomIndex === initialImage[1]);
    var randomProduct = allProductArray[randomIndex];

    productImageReference.src = randomProduct.imagePath;
    productImageReference.descripition = randomProduct.descripition;
}


function Product(imagePath, descripition) {
    this.imagePath = imagePath;
    this.descripition = descripition;

    this.choosenProduct = 0;
    this.timesProductsShown = 0;

    allProductArray.push(this);
    productDescripition.push(descripition);
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

      allProductArray[currentImage1].timesProductsShown++;
      allProductArray[currentImage2].timesProductsShown++;
      allProductArray[currentImage3].timesProductsShown++;


    currentImage1 = randomImage1;
    currentImage2 = randomImage2;
    currentImage3 = randomImage3;
    
    renderRandomProduct1();
    renderRandomProduct2();
    renderRandomProduct3();

    clickCounter++;
    if (clickCounter === 25) {
      imageSection.removeEventListener('click', productHandler);
      renderChart();
    }

    function renderProgress() {
        var progressMeter = document.getElementById('progresscounter')
        if ( clickCounter < 25) {
            progressMeter.textContent = `${clickCounter}/25 chosen`
        }
        else {
            progressMeter.textContent = "Thank You for Participating"
        }
    }
    dataToStorage();
    renderProgress();
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


//----------Chart and Data---------------------------------------------------------
function generateData() {
    if (!generateTableDate) {
        for (var i = 0; i < allProductArray.length; i++) {
        var dataOfProducts = document.getElementById('dataInformation')
        var liUl = document.createElement('li');
        liUl.textContent = `${allProductArray[i].descripition}: ${allProductArray[i].choosenProduct} / ${allProductArray[i].timesProductsShown}`;
        dataOfProducts.append(liUl);
    }
        generateTableDate = true;
        dataOfProducts.style.display = "block";
        var disableButton = document.getElementById('generateDataButton');
        disableButton.style.backgroundColor = "#616161"
    }
}

function showHideData() {
    var dataOfProducts = document.getElementById('dataInformation')
    if (dataOfProducts.style.display ==="none") {
        dataOfProducts.style.display = "block";
    } else {
        dataOfProducts.style.display = "none";
    }
}


var resetProductsChosen = function(){
    localStorage.clear();
    location.reload();
  };
  

var storedProductDescriptions = [];
var storedChosenProduct = [];

var dataToStorage = function () {
    for ( var i = 0; i < allProductArray.length; i++) {
        storedProductDescriptions[i] = allProductArray[i].descripition;
        storedChosenProduct[i] = allProductArray[i].choosenProduct;
    }
    localStorage.setItem('xAxisLabels', JSON.stringify(storedProductDescriptions));
    localStorage.setItem('votes', JSON.stringify(storedChosenProduct));
};

    var renderChart = function () {
    var canvasReference = document.getElementById("resultsChart");

    var storedProductDescriptions = JSON.parse(localStorage.getItem('xAxisLabels'));
    var storedChosenProduct = JSON.parse(localStorage.getItem('votes'));
  
  
    new Chart(canvasReference, { 
      type: 'bar',
      data: {
        labels: storedProductDescriptions,  
        datasets: [{
          label: 'Times You Picked Given Item',
          data: storedChosenProduct, 
          backgroundColor: 
          ['rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(191, 3, 91, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(191, 3, 91, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(191, 3, 91, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(191, 3, 91, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(191, 3, 91, 0.2)'],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(191, 3, 91, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(191, 3, 91, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(191, 3, 91, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(191, 3, 91, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(191, 3, 91, 1)',
          ],
          borderWidth: 1
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
  };    
