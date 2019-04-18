'use strict';

// Global vars
var likeCounter = 0;
var allAdds = [];
var leftAddThatIsOnThePage;
var midAddThatIsOnThePage;
var rightAddThatIsOnThePage;
var previouslyPickedAdds = [];

// References to the DOM refactor
var leftImage = document.getElementById('left_add_img');
var midImage = document.getElementById('mid_add_img');
var rightImage = document.getElementById('right_add_img');


var allAddContainerSectionEl = document.getElementById('all_adds');
// =======================================
// Constructors
// =======================================

var AddImg = function(url, name){
  this.imageUrl = url;
  this.name = name;
  this.clicks = 0;

  allAdds.push(this);
};

// =======================================
// Other Functions
// =======================================

function handleClickOnAllAdds(event){
  if(event.target.tagName !== 'IMG'){
    return;
  }
  // if some other other thing is wrong, stop (return)

  console.log('clicked on a add');
  //increment total clicks
  likeCounter++;
  // increment left add's clicks

  // refactor
  if(event.target.id === 'left_add_img'){
    leftAddThatIsOnThePage.clicks++;
  }
  if(event.target.id === 'mid_add_img'){
    midAddThatIsOnThePage.clicks++;
  }
  if(event.target.id === 'right_add_img'){
    rightAddThatIsOnThePage.clicks++;
  }

  var tempPickedAdds = [];
  // refactor to be repeatable
  do {// we are selecting a previous add
    // pick a new 2 adds,
    var leftAddIndex = Math.floor(Math.random() * allAdds.length);

  } while (
    previouslyPickedAdds.includes(allAdds[leftAddIndex])||
    tempPickedAdds.includes(allAdds[leftAddIndex])

  );

  tempPickedAdds.push(allAdds[leftAddIndex]);

  do {// we are selecting a previous add
    // pick a new 2 adds,
    var midAddIndex = Math.floor(Math.random() * allAdds.length);

  } while (
    previouslyPickedAdds.includes(allAdds[midAddIndex])||
    tempPickedAdds.includes(allAdds[midAddIndex])

  );

  tempPickedAdds.push(allAdds[midAddIndex]);

  do {// we are selecting a previous add
    // pick a new 2 adds,
    var rightAddIndex = Math.floor(Math.random() * allAdds.length);

  } while (
    previouslyPickedAdds.includes(allAdds[rightAddIndex]) ||
    tempPickedAdds.includes(allAdds[rightAddIndex])
  );
  tempPickedAdds.push(allAdds[rightAddIndex]);

  leftAddThatIsOnThePage = allAdds[leftAddIndex];
  midAddThatIsOnThePage = allAdds[midAddIndex];
  rightAddThatIsOnThePage = allAdds[rightAddIndex];


  leftImage.src = leftAddThatIsOnThePage.imageUrl;
  midImage.src = midAddThatIsOnThePage.imageUrl;
  rightImage.src = rightAddThatIsOnThePage.imageUrl;
  // Update <H2> text content under clicker game

  document.getElementById('left_add_h2').textContent = leftAddThatIsOnThePage.name;
  document.getElementById('mid_add_h2').textContent = midAddThatIsOnThePage.name;
  document.getElementById('right_add_h2').textContent = rightAddThatIsOnThePage.name;

  previouslyPickedAdds = [];
  previouslyPickedAdds.push(allAdds[leftAddIndex]);
  previouslyPickedAdds.push(allAdds[midAddIndex]);
  previouslyPickedAdds.push(allAdds[rightAddIndex]);

  // stop after 10 clicks
  if(likeCounter > 9){
    allAddContainerSectionEl.removeEventListener('click', handleClickOnAllAdds);
    makeAddChart();
  }

}

// ===================================
// Initialize the Page
// ===================================

allAddContainerSectionEl.addEventListener('click', handleClickOnAllAdds);

// Instantiate AddImg objects
new AddImg('./assets/bag.jpg', 'Bag');
new AddImg('./assets/banana.jpg', 'Banana');
new AddImg('./assets/bathroom.jpg', 'Bathroom');
new AddImg('./assets/boots.jpg', 'Boots');
new AddImg('./assets/breakfast.jpg', 'Breakfast');
new AddImg('./assets/bubblegum.jpg', 'Bubblegum');
new AddImg('./assets/chair.jpg', 'Chair');
new AddImg('./assets/cthulhu.jpg', 'Cthulhu');
new AddImg('./assets/dog-duck.jpg', 'Dog Duck');
new AddImg('./assets/dragon.jpg', 'Dragon');
new AddImg('./assets/pen.jpg', 'Pen');
new AddImg('./assets/pet-sweep.jpg', 'Pet Sweep');
new AddImg('./assets/scissors.jpg', 'Scissors');
new AddImg('./assets/shark.jpg', 'Shark');
new AddImg('./assets/sweep.png', 'Sweep');
new AddImg('./assets/tauntaun.jpg', 'Tauntaun');
new AddImg('./assets/unicorn.jpg', 'Unicorn');
new AddImg('./assets/usb.gif', 'USB');
new AddImg('./assets/water-can.jpg', 'Water Can');
new AddImg('./assets/wine-glass.jpg', 'Wine Glass');

leftAddThatIsOnThePage = allAdds[0];
midAddThatIsOnThePage = allAdds[1];
rightAddThatIsOnThePage = allAdds[2];


// ==================================
// Chart.js Implementation
// ==================================

function makeAddChart(){

  var addNamesArray = [];
  var addLikesArray =[];

  for(var i = 0; i < allAdds.length; i++){
    var singleAddName = allAdds[i].name;
    addNamesArray.push(singleAddName);
  }

  for(i = 0; i < allAdds.length; i++){
    var singleAddLikes = allAdds[i].clicks;
    addLikesArray.push(singleAddLikes);
  }

  var ctx = document.getElementById('addChart').getContext('2d');
  // eslint-disable-next-line no-undef
  var addChart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',
    data: {
      labels: addNamesArray,
      datasets: [{
        label: 'Add Likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: addLikesArray
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

var click_tracker = document.getElementById('add-clicks');

click_tracker.addEventListener('click', function(){
  likeCounter++;
  localStorage.setItem('clicksInLocalStorage', likeCounter);  //semi was missing
  click_tracker.textContent ='clicked ${clickcount} times';
}); //paren was missing

//LS
//Setters
//localStorage.setItem(<key>, <value>)


 if(localStorage.getItem('alladds') === null){

}

 else{
var stringyadds = localStorage.getItem(allAdds);
allgoats = JSON.parse(stringyadds);
}

//localStorage.getItem('key'); // => click_tracker
//localStorage.getItem('value'); // => previouslyPickedAdds

