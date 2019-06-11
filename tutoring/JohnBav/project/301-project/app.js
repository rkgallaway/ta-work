'use strict';

var event_target = document.getElementById('writing_pad');


var save_story = function(){
  if (data.open_idx < 12){
    data.images[data.open_idx] = working;
    data.current = data.open_idx; // set "current" to be the most recently saved image
    data.open_idx++;
    localStorage.setItem('stories', JSON.stringify(data));
    alert(`Saved as image #${data.open_idx}`);
  }
  else {
    if (overwrite_check()){
      data.images.push(data.images.shift());
      data.images[11] = working;
      localStorage.setItem('nature_images', JSON.stringify(data));
      alert(`Saved as image #${data.open_idx}`);
    }
  }
};

var click_handler = function(event) {
  event.preventDefault();
  if (event.target.id === 'canvas') {
    canvas_click(event, ctx);
  }
  else if (event.target.id === 'reset_button') {
    reset_current();
  } else if (event.target.id === 'save_button') {
    console.log(data);
    save_story();

  } else return;
};

var data, working;

var Story_data = function () {
  this.current = 0; 
  this.open_idx = 0;
  this.stories = [];
  this.newstory = true;
  for (var i = 0; i < 12; i++) {
    this.stories.push(new Story());
  }
};

var Story = function (points, Story) {
  this.points = points || [];
  this.type = Story || 'Story';

};

var retrieve = function(){
  if (localStorage.getItem('stories')){
    data = JSON.parse(localStorage.getItem('stories'));
    if (data.newStory) {
      working = new Story();
      return;
    } else {
      working = data.stories[data.current];
    }
    data.newStroy = true;
    localStorage.setItem('stories', JSON.stringify(data));
  } else {
    data = new Story_data();
    working = new Story();
  }
};

retrieve();
