'use strict'

var imageArray = []; 
var imageDescriptions = [];  

var totalClicks = 0;
var MAX_CLICKS = 25; 

var imgId1 = "img1";
var imgId2 = "img2";
var imgId3 = "img3";
var listResults = document.getElementById("list-results");
var canvasRef = document.getElementById("results-chart");
var votesButton = document.getElementById('votes-button');  



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


function renderlist(){
    for(var i = 0; i < imageArray.length; i++){
        var liList = document.createElement('li');
        liList.textContent = `${imageArray[i].description} got ${imageArray[i].timesClicked} votes and was viewed ${imageArray[i].views}.`;
        listResults.append(liList);
    }
}


function renderThreeRandomImages(event){
    
    if(event) { 
        for(var i = 0; i < imageArray.length; i++) {
            if(event.target.alt == imageArray[i].description) {
                imageArray[i].registerClick();
            }
        }
        totalClicks++;
        
        if(totalClicks === MAX_CLICKS) {
            renderChart();
            renderlist();

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

    imageOne.views++;
    imageOneRef.src = imageOne.imgPath;
    imageOneRef.alt = imageOne.description;

    imageTwo.views++;
    imageTwoRef.src = imageTwo.imgPath;
    imageTwoRef.alt = imageTwo.description;

    imageThree.views++;
    imageThreeRef.src = imageThree.imgPath;
    imageThreeRef.alt = imageThree.description;


}

function imgconstructer(imgPath, description){
    this.imgPath = imgPath; 
    this.description = description;
    this.timesClicked = 0;
    this.views = 0;

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


var votesSaved = [];


function renderChart() {
    imageOneRef.removeEventListener('click', renderThreeRandomImages); 
    imageTwoRef.removeEventListener('click', renderThreeRandomImages);
    imageThreeRef.removeEventListener('click', renderThreeRandomImages);

   
    var totalVotes = [];
    var totalViews = [];
    for(var i = 0; i < imageArray.length; i++){
        totalVotes.push(imageArray[i].timesClicked);
        totalViews.push(imageArray[i].views);

    }

      
  votesSaved.push(totalVotes, imageDescriptions);
  var stringVoteSaved = JSON.stringify(votesSaved);
  localStorage.setItem('Last Votes', stringVoteSaved); 
  var votesParsed = JSON.parse(localStorage.getItem('Last Votes'));

    
    
    


    new Chart(canvasRef, {  
      type: 'bar',
      data: {
        labels: imageDescriptions,   
        datasets: [{
          label: 'Votes Per Image', 
          data:  totalVotes, 
          backgroundColor: ['red', 'blue', 'green', 'orange', 'pink', 'black', 'red', 'blue', 'green', 'orange', 'pink',
          'red', 'blue', 'green', 'orange', 'pink', 'black','red', 'blue', 'green', 'orange', 'pink', 'black'],
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

votesButton.addEventListener('click', renderChart );
