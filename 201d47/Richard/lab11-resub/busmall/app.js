'use strict'

var imageArray = []; 
var imageDescriptions = [];

var totalClicks = 0;
var MAX_CLICKS = 5; //make sure to change the number back

var imgId1 = "img1";
var imgId2 = "img2";
var imgId3 = "img3";





function randomIndexGenerator(){
    this.previousIndices = [-1, -2, -3];
    this.currentIndices = [];

    this.getRandomIndex = function(){
        var randomNumber = Math.floor(Math.random() * imageArray.length);
        return randomNumber;
    }
    this.isIndexDuplicated = function(newRandomNumber){
        return this.currentIndices.includes(newRandomNumber) || this.previousIndices.includes(newRandomNumber);
    }
    this.getThreeRandomIndices = function(){
        this.previousIndices = this.currentIndices;
        this.currentIndices = [];

        var newRandomNumber = this.getRandomIndex();

        while(this.currentIndices.length < 3) {
            if(this.isIndexDuplicated(newRandomNumber)){
                newRandomNumber = this.getRandomIndex();
            } else {
                this.currentIndices.push(newRandomNumber);
                newRandomNumber = this.getRandomIndex();
            }
        }
    }
}

var random = new randomIndexGenerator();


function renderThreeRandomImages(event){
    //add counter
    if(event) { //click counter
        for(var i = 0; i < imageArray.length; i++) {
            if(event.target.alt == imageArray[i].description) {
                imageArray[i].registerClick();
            }
        }
        totalClicks++;
        
        if(totalClicks === MAX_CLICKS) {
            renderChart();
        }
    }
    
    random.getThreeRandomIndices();
    var imagesIndices = random.currentIndices;

    var imageOneRef = document.getElementById(imgId1);
    var imageTwoRef = document.getElementById(imgId2);
    var imageThreeRef = document.getElementById(imgId3);
    
    var randomIndexOne = imagesIndices[0];
    var randomIndexTwo = imagesIndices[1];
    var randomIndexThree = imagesIndices[2];

    var imageOne = imageArray[randomIndexOne];
    var imageTwo = imageArray[randomIndexTwo];
    var imageThree = imageArray[randomIndexThree];

    imageOneRef.src = imageOne.imgPath;
    imageOneRef.alt = imageOne.description;

    imageTwoRef.src = imageTwo.imgPath;
    imageTwoRef.alt = imageTwo.description;

    imageThreeRef.src = imageThree.imgPath;
    imageThreeRef.alt = imageThree.description;


}

function imgconstructer(imgPath, description){
    this.imgPath = imgPath; 
    this.description = description;
    this.timesClicked = 0;

    imageArray.push(this);
    imageDescriptions.push(description);

    this.registerClick = function() {
        this.timesClicked++;
    }
}


new imgconstructer('img/bag.jpg', 'R2D2 Suit Case');
new imgconstructer('img/banana.jpg', 'Banana cutter');
new imgconstructer('img/bathroom.jpg', 'Bathroom tablet');
new imgconstructer('img/boots.jpg', 'Rain boots');
new imgconstructer('img/breakfast.jpg', 'All in one breakfast maker');
new imgconstructer('img/bubblegum.jpg', 'Meatball bubblegum');
new imgconstructer('img/chair.jpg', 'Terriable made chair');
new imgconstructer('img/cthulhu.jpg', 'Green monster');
new imgconstructer('img/dog-duck.jpg', 'Rat dog with a mask');
new imgconstructer('img/dragon.jpg', 'Dragon Meat');
new imgconstructer('img/pen.jpg', 'Swiss army pen');
new imgconstructer('img/pet-sweep.jpg', 'Dog with cleaning shoes');
new imgconstructer('img/scissors.jpg', 'Pizza scissors');
new imgconstructer('img/shark.jpg', 'Shark blanket');
new imgconstructer('img/sweep.png', 'Cleaning baby');
new imgconstructer('img/tauntaun.jpg', 'starwars blanket');
new imgconstructer('img/unicorn.jpg', 'Unicorn meat');
new imgconstructer('img/water-can.jpg', 'More like unwater-can ');
new imgconstructer('img/usb.gif', 'Tenticale usb');
new imgconstructer('img/wine-glass.jpg', 'Badly made glass');

var imageOneRef = document.getElementById(imgId1);
var imageTwoRef = document.getElementById(imgId2);
var imageThreeRef = document.getElementById(imgId3);

imageOneRef.addEventListener('click', renderThreeRandomImages);
imageTwoRef.addEventListener('click', renderThreeRandomImages);
imageThreeRef.addEventListener('click', renderThreeRandomImages);

renderThreeRandomImages();

function renderChart() {
    var canvasRef = document.getElementById("results-chart");

    var totalVotes = [];
    for(var i = 0; i < imageArray.length; i++){
        totalVotes.push(imageArray[i].timesClicked);
    }

    new Chart(canvasRef, { 
        type: 'bar',
        data: {
          labels: imageDescriptions,  // label for each individual bar
          datasets: [{
            label: 'Votes Per Image',
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
};