'use strict';

const breadth_first = (root, arr) => {
  if (!root){
    return 'null';
  }
  const queue = [];
  queue.push(root);

  while(queue.length > 0) {
    let current = queue.shift();

    console.log(current.value);
    arr.push(current.value);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right)
  }

  return arr;
};

module.exports = breadth_first;