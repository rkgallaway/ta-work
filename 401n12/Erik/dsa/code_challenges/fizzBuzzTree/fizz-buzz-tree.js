'use strict';

const Node = require('./lib/node');


class BinaryTree {
  constructor(root) {
    //root -> sort of equals the top of the tree
    this.root = root;
    this.arr = []
  }

  FizzBuzzTree (root) {

    //Base Case
    if (root === null) {
      if(this.arr.length === 0) {
        return 'Tree does not have any nodes';
      }
      return this.arr;
    }

    //Recursive Case
    if(root !== undefined) {
      if(root.value % 15 === 0) {
        root.value = 'FizzBuzz';
      }
      if(root.value % 3 === 0) {
        root.value = 'Fizz';
      }
      if(root.value % 5 === 0) {
        root.value = 'Buzz';
      }

    this.arr.push(root.value);
    this.FizzBuzzTree(root.left);
    this.FizzBuzzTree(root.right);
    }
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const fifteen = new Node(15);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
five.right = fifteen;

tree.FizzBuzzTree(tree.root);



module.exports = BinaryTree;
