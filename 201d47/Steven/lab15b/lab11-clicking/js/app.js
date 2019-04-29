'use strict'

var productOneId = 'product-one';
var productTwoId = 'product-two';
var productThreeId = 'product-three';
var productSection = document.getElementById('product-section');

var MAX_CLICKS = 25;

var products = [];
var productDescriptions = [];

var totalClicks = 0;

function RandomIndexGenerator() {
    this.previousIndices = [-1, -2, -3];
    this.currentIndices = [];

    this.getRandomIndex = function() {
        var randomNumber = Math.floor(Math.random() * products.length);
        return randomNumber;
    }
    this.isIndexDuplicated = function(newRandomNumber) {
        return this.currentIndices.includes(newRandomNumber) ||
        this.previousIndices.includes(newRandomNumber);
    }
    this.getThreeRandomIndices = function() {
        this.previousIndices = this.currentIndices;
        this.currentIndices = [];

        var newRandomNumber = this.getRandomIndex();

        while(this.currentIndices.length < 3) {
            if(this.isIndexDuplicated(newRandomNumber)) {
                newRandomNumber = this.getRandomIndex();
            }   
            else {
                this.currentIndices.push(newRandomNumber);
                newRandomNumber = this.getRandomIndex();
            }
        }
        this.currentIndices.push(1);
        this.currentIndices.push(2);
        this.currentIndices.push(3);
    }
    this.saveRandomNumber = function () {
    }
}

var random = new RandomIndexGenerator();

function registerClick(event) {
    if(event.target.id === 'product-section') {
        alert('Please click an image')
    }
    for(var i = 0; i < products.length; i++) {
        if(event.target.alt == products[i].description) {
            products[i].registerClick();
        }
    }
    totalClicks++;
        
    if(totalClicks === MAX_CLICKS) {
        productSection.removeEventListener('click', registerClick);
        renderChart();
    }
}

function renderRandomThreeProducts() {

    random.getThreeRandomIndices();
    var productIndices = random.currentIndices;

    var productOneReference = document.getElementById(productOneId);
    var productTwoReference = document.getElementById(productTwoId); 
    var productThreeReference = document.getElementById(productThreeId);

    var randomIndexOne = productIndices[0];
    var randomIndexTwo = productIndices[1];
    var randomIndexThree = productIndices[2];

    var productOne = products[randomIndexOne];
    var productTwo = products[randomIndexTwo];
    var productThree = products[randomIndexThree];

    productOneReference.src = productOne.picturePath;
    productOneReference.alt = productOne.description;

    productTwoReference.src = productTwo.picturePath;
    productTwoReference.alt = productTwo.description;

    productThreeReference.src = productThree.picturePath;
    productThreeReference.alt = productThree.description;
}

function Products(picturePath, description) {
    this.picturePath = picturePath;
    this.description = description;

    this.timesClicked = 0;

    products.push(this);
    productDescriptions.push(description);

    this.registerClick = function() {
        this.timesClicked++;
    }
}

new Products("img/bag.jpg", "Star wars luggage bag");
new Products("img/banana-cutter.jpg", "Banana cutting tool");
new Products("img/bathroom-stand.jpg", "Toilet paper plus Ipad holder");
new Products("img/boots.jpg", "Yellow boots");
new Products("img/breakfast.jpg", "Multi-functional breakfast tool");
new Products("img/bubblegum.jpg", "Gum that looks like meatballs");
new Products("img/chair.jpg", "Rounded seat chair");
new Products("img/cthulhu.jpg", "Alien action figure");
new Products("img/dog-duck.jpg", "Plastic duck bill for dogs");
new Products("img/dragon.jpg", "Dragon meat");
new Products("img/pen.jpg", "Pens with utensil caps");
new Products("img/pet-sweep.jpg", "Mop shoes for pets");
new Products("img/scissors.jpg", "Scissors and pizza cutter");
new Products("img/shark.jpg", "Shark sleeping bag");
new Products("img/tauntaun.jpg", "Star wars themed sleeping bag");
new Products("img/sweep.png", "Baby onesie with mop");
new Products("img/unicorn.jpg", "Unicorn meat");
new Products("img/usb.gif", "Tentacle usb stick");
new Products("img/water-can.jpg", "Water can with spout facing inside");
new Products("img/wine-glass.jpg", "Wine glass with drinking hole on side");

var productOneReference = document.getElementById(productOneId);
var productTwoReference = document.getElementById(productTwoId);
var productThreeReference = document.getElementById(productThreeId);

productOneReference.addEventListener("click", renderRandomThreeProducts);
productTwoReference.addEventListener("click", renderRandomThreeProducts);
productThreeReference.addEventListener("click", renderRandomThreeProducts);

productSection.addEventListener('click', registerClick);

renderRandomThreeProducts();

function renderChart() {
    var canvasReference = document.getElementById("results-chart");
  
    var totalVotes = [];
    for(var i = 0; i < products.length; i++) {
      totalVotes.push(products[i].timesClicked);
    
    new Chart(canvasReference, {
      type: 'bar',
      data: {
        labels: productDescriptions,  // label for each individual bar
        datasets: [{
          label: 'Votes Per Product',
          data: totalVotes, // an array of the number of votes per product
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
  };
};

var stringifiedProducts = JSON.stringify(products);
localStorage.setItem('products', stringifiedProducts);

var productsParsed = JSON.parse(localStorage.getItem('products'));
