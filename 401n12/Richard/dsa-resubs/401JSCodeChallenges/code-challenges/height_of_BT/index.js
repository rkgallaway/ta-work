'use strict';

const maximumValue = (a, b) => (a > b) ? a : b;
const findHeight = root => {
  if(!root){
    return 0;
  }
  //let lh = findHeight(root.left);
  //let rh = findHeight(root.right);
  return 1 + maximumValue(findHeight(root.left), findHeight(root.right));
};

module.exports = {findHeight, maximumValue};

