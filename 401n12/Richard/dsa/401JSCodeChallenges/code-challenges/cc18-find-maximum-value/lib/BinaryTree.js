'use strict';

// import Queue from './newQueue';
const Queue = require('./newQueue');
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  breadthFirstSearch(){
    let bftQ = new Queue();
    let outputArray = [];
    if(this.root){
      bftQ.enqueue(this.root);
      while(bftQ.front){
        if(bftQ.front.left){
          bftQ.enqueue(bftQ.front.left);
        }
        if(bftQ.front.right){
          bftQ.enqueue(bftQ.front.right);
        }
        outputArray.push(bftQ.dequeue());
      }
      return outputArray;
    }else{
      return 'tree is empty';
    }
  }
  findMaximumValue(){
    let arr = this.breadthFirstSearch();
    let highestValue = 0;
    for(let i in arr){
      if(highestValue < arr[i]){
        highestValue = arr[i];
      }
    }
    return highestValue;
  }
}
module.exports = BinaryTree;