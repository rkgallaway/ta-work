const keywords = []
console.log(keywords);
let template;

$(startApp);

function startApp() {
  loadData1();
  template = Handlebars.compile($('#entry-template').html());
  attachListeners();
}

function loadData1() {
  $.get('data/page-1.json', 'json')
    .then(displayPage)
}

function loadData2() {
  $.get('data/page-2.json', 'json')
    .then(displayPage);
}

function displayPage(horns) {
  displaySelector(horns);
  const render = template({ horns: horns });
  $('#dataSection').html(render);

  pageListeners();
}

function pageListeners() {
  $('div li').on('click', event => {
    const pageNum = $(event.target).attr('data-page');
    console.log(pageNum);
    // eslint-disable-next-line no-empty
    if (parseInt(pageNum) === 1) {
      loadData1();
    }
    else {
      loadData2();
    }
  })
}
function displaySelector(horns) {
  horns.forEach(horn => {
    if (!keywords.includes(horn.keyword)) {
      keywords.push(horn.keyword)
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
    console.log($selector);
    const type = $selector.val();
     $(`.${type}`).show();
    console.log(type);
    console.log(keywords);
    for (let i = 0; i < keywords.length; i++) {
      console.log(i);
      if (keywords[i] !== type) {
        console.log($(`.${type}`));
        $(`.${keywords[i]}`).each((index, element) => {
           $(element).hide();
          console.log(element);
        });
      }
    }
    // keywords.forEach(description => {
    //   if(!description === type) {
    //     $(`.${type}`).hide();
    //   }
    // }) 

  });
}

//   function attachListeners() {
//     $('select').on('change', event => {
//       const $selector = $(event.target);
//       const type = $selector.val();
//       $('section').hide();
//       $(`.${type}`).show();
//       //  for (let i = 0; i < keywords.length; i++) {
//       //      if(!keywords[i] === type) {
//       //          $(`.${type}`).hide();


//     })
//   }

