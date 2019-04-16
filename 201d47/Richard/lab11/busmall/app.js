'use strict'

var imageArray = []; 
var usedImgArray = [];
var totalClicks = 0;

var imgRef1 = document.getElementById('img1');
var imgRef2 = document.getElementById('img2');
var imgRef3 = document.getElementById('img3');

function getRandomImg(){
    var randomNumber = Math.floor(Math.random() * imageArray.length);
    return randomNumber;
}

function imgconstructer(imgPath, name){
    this.imgPath = imgPath;
    this.name = name;
    this.timesClicked = 0;
    imageArray.push(this);

}

var previousIndex = -1;

function renderImg(){
    
    var randomIndex = getRandomImg();
    while(usedImgArray === randomIndex){
        randomIndex = getRandomImg();
    }
    usedImgArray.push(randomIndex);

    var randomIndex2 = getRandomImg();
    while(usedImgArray === randomIndex2){
        randomIndex2 = getRandomImg();
    }
    usedImgArray.push(randomIndex2);

    var randomIndex3 = getRandomImg();
    while(usedImgArray === randomIndex3){
        randomIndex = getRandomImg();
    }
    usedImgArray.push(randomIndex3);

    previousIndex = randomIndex;
    
    imgRef1.src = imageArray[randomIndex].imgPath; //details now live in an array just access that array at desire index to render image
    imgRef1.alt = imageArray[randomIndex].name;

    imgRef2.src = imageArray[randomIndex2].imgPath;
    imgRef2.alt = imageArray[randomIndex2].name;

    imgRef3.src = imageArray[randomIndex3].imgPath;
    imgRef3.alt = imageArray[randomIndex3].name;
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
new imgconstructer('img/water-can.jpg', 'More like unwater can ');
new imgconstructer('img/usb.gif', 'Tenticale usb');
new imgconstructer('img/wine-glass.jpg', 'Badly made glass');

renderImg();

imgRef1.addEventListener('click', renderImg);
imgRef2.addEventListener('click', renderImg);
imgRef3.addEventListener('click', renderImg);
