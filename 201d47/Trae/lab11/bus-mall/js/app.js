'use strict';

function ImageDirectory(image) {
    this.images = new Array(image);
    this.previousIndices = [];
    this.selectedImage = "";
    this.addImage = function(image) {
        this.images.push(image);

    }
    this.renderRandomImage = function(imagePictureReference) {
        if(this.previousIndices.length == 6){
            for(var i = 0; i < 3; i++){
                this.previousIndices.pop();
            }
        }
        var randomIndex = Math.floor(Math.random() * this.images.length);

        while(this.previousIndices.includes(randomIndex)){
            randomIndex = Math.floor(Math.random() * this.images.length);
        }

        this.previousIndices.unshift(randomIndex);        
        var randomImage = this.images[randomIndex];
        imagePictureReference.src = "./img/" + randomImage.picturePath;
        imagePictureReference.alt = randomImage.description;
    };
    this.incrementClicked = function(alt) {
        for(var i = 0; i < this.images.length; i++){
            if(this.images[i].description === alt){
                this.images[i].timesClicked += 1;
                console.log(alt + ": " + this.images[i].timesClicked);
            }
        }
    }
}

function Picture(picturePath, description) {
    this.picturePath = picturePath;
    this.description = description;
    this.timesClicked = 0;
}

var directory = new ImageDirectory(new Picture("bag.jpg", "Bag"));
directory.addImage(new Picture("banana.jpg", "Banana"));
directory.addImage(new Picture("bathroom.jpg", "bath"));
directory.addImage(new Picture("boots.jpg", "Boots"));
directory.addImage(new Picture("breakfast.jpg", "breakfast"));
directory.addImage(new Picture("bubblegum.jpg", "bubblegum"));
directory.addImage(new Picture("chair.jpg", "chair"));
directory.addImage(new Picture("cthulhu.jpg", "cthulu"));
directory.addImage(new Picture("dog-duck.jpg", "dog"));
directory.addImage(new Picture("dragon.jpg", "dragon"));
directory.addImage(new Picture("pen.jpg", "pen"));
directory.addImage(new Picture("pet-sweep.jpg", "pet"));
directory.addImage(new Picture("scissors.jpg", "scissors"));
directory.addImage(new Picture("shark.jpg", "shark"));
directory.addImage(new Picture("sweep.png", "sweep"));
directory.addImage(new Picture("tauntaun.jpg", "tauntaun"));
directory.addImage(new Picture("unicorn.jpg", "unicorm"));
directory.addImage(new Picture("usb.gif", 'usb'));
directory.addImage(new Picture("water-can.jpg", "water"));
directory.addImage(new Picture("wine-glass.jpg", "wine"));


var imagePictureReference = document.getElementById('image1');
var imagePictureReference2 = document.getElementById('image2')
var imagePictureReference3 = document.getElementById('image3')

var counter = 0;
var results = function() {
    for(var i = 0; i < directory.images.length; i++) {
        alert(`${directory.images[i].description} was clicked ${directory.images[i].timesClicked}`);
    }
}


imagePictureReference.addEventListener('click', function handler(){
    counter++;
    if(counter >= 25) {
        this.removeEventListener('click', handler);
        return results();
    }
    var altImg = imagePictureReference.alt;
    directory.incrementClicked(altImg);
    directory.renderRandomImage(imagePictureReference);
    directory.renderRandomImage(imagePictureReference2);
    directory.renderRandomImage(imagePictureReference3);
    
});

imagePictureReference2.addEventListener('click', function handler() {
    counter++;
    if(counter >= 25) {
        this.removeEventListener('click', handler);
        return results();
    }
    var altImg = imagePictureReference2.alt;
    directory.incrementClicked(altImg);

    directory.renderRandomImage(imagePictureReference);
    directory.renderRandomImage(imagePictureReference2);
    directory.renderRandomImage(imagePictureReference3);
    
});

imagePictureReference3.addEventListener('click', function handler() {
    counter++
    if(counter >= 25) {
        this.removeEventListener('click', handler);
        return results();
    } 
    var altImg = imagePictureReference3.alt;
    directory.incrementClicked(altImg);
    directory.renderRandomImage(imagePictureReference);
    directory.renderRandomImage(imagePictureReference2);
    directory.renderRandomImage(imagePictureReference3);
});