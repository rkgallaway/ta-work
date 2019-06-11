const keywords = []

$(startApp);

function startApp() {
  loadData();

}

function loadData() {
  const success = horns => {
    displayPage(horns);
    displaySelector(horns);
    attachListeners();
  }
  const failure = error => console.error(error);

  function pageListeners() {
    $('div li').on('click', event =>{
      const pageNum = $(event.target).attr('data-page');
      console.log(pageNum);
      // eslint-disable-next-line no-empty
      if (parseInt(pageNum) === 1){
        $.get('data/page-1.json', 'json')
          .then(success)
          .catch(failure);

      }
      else {
        $.get('data/page-2.json', 'json')
          .then(success)
          .catch(failure);
      }
    })
  }
 pageListeners(); 


  // $.get('data/page-1.json', 'json')
  //   .then(success)
  //   .catch(failure);

  // $.get('data/page-2.json', 'json')
  //   .then(success)
  //   .catch(failure);

}

function displayPage(horns) {
  horns.forEach(horn => {

    const $hornsClone = $('#photo-template').clone();
    $hornsClone.find('h2').text(horn.title);
    $hornsClone.find('img').attr('src', horn.image_url);
    $hornsClone.find('h3').text(horn.description);
    $hornsClone.find('img').attr('title', horn.title);
    $hornsClone.find('p').text(`Horns: ${horn.horns}`);
    $hornsClone.addClass( horn.keyword);

    $hornsClone.removeAttr('#photo-template');
    $('main').append($hornsClone);
  })



}
function displaySelector(horns) {
  horns.forEach(horn => {
    if(!keywords.includes(horn.keyword)) {
      keywords.push(horn.keyword)
      console.log(keywords);
    }

  })

  keywords.forEach((element) => {
    const $newKeyword = $('#key-word').clone();
    $newKeyword.text(element);
    $newKeyword.val(element);
    $newKeyword.removeAttr('#key-word');
    $('select').append($newKeyword);

  })


}

function attachListeners() {
  $('select').on('change', event => {
    const $selector = $(event.target);
    const type = $selector.val();
    $('section').hide();
    $(`.${type}`).show();

    console.log(type);

    //  if (type == ) {
    //      $('').hide();
    //  }

    //  for (let i = 0; i < keywords.length; i++) {
    //      if(keywords[i] === type) {
    //          $(`.${type}`).hide();


  })
}

