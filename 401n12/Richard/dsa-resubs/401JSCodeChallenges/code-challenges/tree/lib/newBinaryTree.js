'use strict';

const Node = require('./newNode');

class BinaryTree {
  constructor(givenRoot) {
    if(!givenRoot){
      this.root = null;
    }else{
      this.root = givenRoot;
    }
  }
  //===============================================================
  preOrder(){
    let accArr = [];
    this.preOrderHelper(this.root, accArr);
    return accArr;
  }
  preOrderHelper(curNode, arr){
    //base
    if(!curNode){
      return;
    }
    //recursive
    arr.push(curNode.value);
    this.preOrderHelper(curNode.left, arr);
    this.preOrderHelper(curNode.right, arr);
    return arr;
  }
  //================================================================
  inOrder(){
    let accArr = [];
    this.inOrderHelper(this.root, accArr);
    return accArr;
  }
  inOrderHelper(curNode, arr){
    //base
    if(!curNode){
      return;
    }
    //recursive
    this.inOrderHelper(curNode.left, arr);
    arr.push(curNode.value);
    this.inOrderHelper(curNode.right, arr);
    return arr;
  }
  //==================================================================
  postOrder(){
    let accArr = [];
    this.postOrderHelper(this.root, accArr);
    return accArr;
  }
  postOrderHelper(curNode, arr){
    //base
    if(!curNode){
      return;
    }
    //recursive
    this.postOrderHelper(curNode.left, arr);
    this.postOrderHelper(curNode.right, arr);
    arr.push(curNode.value);
    return arr;
  }
}

module.exports = BinaryTree;