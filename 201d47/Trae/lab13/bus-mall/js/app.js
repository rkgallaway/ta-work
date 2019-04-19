'use strict';
var counter = 0;


function ImageDirectory() {
    this.images = new Array();
    this.previousIndices = [];
    this.selectedImage = "";
    this.addImage = function (image) {
        this.images.push(image);

    }
    this.renderRandomImage = function (imagePictureReference) {
        if (this.previousIndices.length == 6
            ) {
            for (var i = 0; i < 3; i++) {
                this.previousIndices.pop();
            }
        }
        var randomIndex = Math.floor(Math.random() * this.images.length);

        while (this.previousIndices.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * this.images.length);
        }

        this.previousIndices.unshift(randomIndex);
        var randomImage = this.images[randomIndex];
        imagePictureReference.src = "./img/" + randomImage.picturePath;
        imagePictureReference.alt = randomImage.description;
    };
    this.incrementClicked = function (alt) {
        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].description === alt) {
                this.images[i].timesClicked += 1;
                console.log(alt + ": " + this.images[i].timesClicked);
            }
        }
    }
    this.serialize = function() {
        return JSON.stringify(this.images);
    }

    this.deserialize = function(directoryString) {
        this.images = Array.from(JSON.parse(directoryString));
    }
}
var itemDescription = [];

function Picture(picturePath, description) {
    this.picturePath = picturePath;
    this.description = description;
    this.timesClicked = 0;
}

var directory = new ImageDirectory();

var counterData = function() {
    if(localStorage.getItem('counter') !== null) {
        counter = Number(localStorage.getItem('counter'));
    }else{
        counter = 0;
    }
}

var loadData = function() {
    if(localStorage.getItem('directoryData') !== null){
        directory.deserialize(localStorage.getItem('directoryData'));
    }
    else{
        directory.addImage(new Picture("bag.jpg", "Bag"));
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
    }

}

loadData();
counterData();

console.log(directory.serialize());
var imagePictureReference = document.getElementById('image1');
var imagePictureReference2 = document.getElementById('image2');
var imagePictureReference3 = document.getElementById('image3');


var results = function () {
    for (var i = 0; i < directory.images.length; i++) {

    }
}


imagePictureReference.addEventListener('click', function handler() {
    counter++;
    if (counter >= 25) {
        this.removeEventListener('click', handler);
        return renderChart();
    }
    var altImg = imagePictureReference.alt;
    directory.incrementClicked(altImg);
    directory.renderRandomImage(imagePictureReference);
    directory.renderRandomImage(imagePictureReference2);
    directory.renderRandomImage(imagePictureReference3);
    localStorage.setItem("directoryData", directory.serialize());
    localStorage.setItem('counter', counter);
});

imagePictureReference2.addEventListener('click', function handler() {
    counter++;
    if (counter >= 25) {
        this.removeEventListener('click', handler);
        return results();
    }
    var altImg = imagePictureReference2.alt;
    directory.incrementClicked(altImg);

    directory.renderRandomImage(imagePictureReference);
    directory.renderRandomImage(imagePictureReference2);
    directory.renderRandomImage(imagePictureReference3);
    localStorage.setItem("directoryData", directory.serialize());
    localStorage.setItem('counter', counter);

});

imagePictureReference3.addEventListener('click', function handler() {
    counter++
    if (counter >= 25) {
        this.removeEventListener('click', handler);
        return results();
    }
    var altImg = imagePictureReference3.alt;
    directory.incrementClicked(altImg);
    directory.renderRandomImage(imagePictureReference);
    directory.renderRandomImage(imagePictureReference2);
    directory.renderRandomImage(imagePictureReference3);
    localStorage.setItem("directoryData", directory.serialize());
    localStorage.setItem('counter', counter);
});

function renderChart() {
    var canvasReference = document.getElementById('tallyChart');
    var totalVotes = [];
    var itemDescription = [];
    for (var i = 0; i < directory.images.length; i++) {
        totalVotes.push(directory.images[i].timesClicked);
        itemDescription.push(directory.images[i].description);

    }
    new Chart(canvasReference, {
        type: 'bar',
        data: {
            labels: itemDescription,
            datasets: [{
                label: '# of Votes',
                data: totalVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}



// Goat.allGoats = Goat.parsedGoats || [

// ]
// localStorage.setItem
// Goat.parsedGoats = JSON.parse( localStorage.getItem('userResults') );
// Goat.allGoats = Goat

// var itemArray = [];

// function TallyInformation(description, votes) {
//     this.description = description;
//     this.votes = votes;
//     itemArray.push(this);
// }

