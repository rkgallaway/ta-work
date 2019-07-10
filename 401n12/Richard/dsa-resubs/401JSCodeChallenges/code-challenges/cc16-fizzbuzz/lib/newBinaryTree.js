'use strict';
class BinaryTree {
  constructor(){
    this.root = null;
  };
  fizzBuzz(node){
    //base
    if(!node){
      return;
    }
    //recursive
    if((node.value % 5 === 0) && (node.value % 3 === 0)){
      node.value = 'FizzBuzz';
    }else if(node.value % 5 === 0){
      node.value = 'Buzz';
    }else if(node.value % 3 === 0){
      node.value = 'Fizz';
    }
    this.fizzBuzz(node.left);
    this.fizzBuzz(node.right);
  }
}
module.exports = BinaryTree;