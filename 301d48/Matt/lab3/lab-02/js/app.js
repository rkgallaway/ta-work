'use strict';
var pageNum = 1;
// var keywordsArray = [];

function startApp() {

  loadData(pageNum);

  attachListeners();

  loadData(pageNum);

}

function loadData(pageNum) {


  // const success = animals => console.log('animals', animals);
  const success = animals => {
    displayHornsHandlebars(animals);
    makedropDown(animals);
  }


  const failure = error => console.error(error);

  $.get(`data/page-${pageNum}.json`, 'json')
    .then(success)
    .catch(failure);
}

function displayHornsHandlebars (animals) {
  
  const template = $('#horns-template').html();
  
  const render = Handlebars.compile(template);

  var animalElements = [];

  animals.forEach(animalInfo => {
    animalElements.push(render(animalInfo));
    console.log();
  });

  $('main').append(animalElements);

}


// function displayHorns(animals) {

//   animals.forEach(animals => {

//     // const $newAnimal = $('.photo-template').clone();

//     // $newAnimal.find('img').attr('src', animals.image_url);
//     // $newAnimal.find('h2').text(animals.title);
//     // $newAnimal.find('p').text(animals.description);
//     // $newAnimal.attr('class', animals.keyword);
//     // $newAnimal.addClass('animalCard');

//     // $('main').append($newAnimal);
//   });
// }

function makedropDown(animals) {
  //create an array to hold keywords
  console.log(animals);
  const keywordsArray = [];
  animals.forEach((element) => {
    if(!keywordsArray.includes(element.keyword)){
      keywordsArray.push(element.keyword);
    }
  });
  keywordsArray.forEach(element => {
    $('select').append($('<option>', {value: element, text: element}));
  })
  console.log('keyword arr', keywordsArray)
}

function attachListeners(keywordsArray) {
  let type = 'photo-template';
  $('select').on('change', event => {
    const $choice = $(event.target);
    type = $choice.val();
    $('.photo-templatee').hide();
    $(`.${type}`).show();
  });

  //pages listener
  $('li').on('click', event =>{
    pageNum = $(event.target).attr('data-page');
    console.log(pageNum);
    $('.photo-templatee').hide();
   
    loadData(pageNum);
  });
}

$(startApp);
