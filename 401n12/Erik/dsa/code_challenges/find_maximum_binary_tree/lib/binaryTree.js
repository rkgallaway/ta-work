'use strict';

const Node = require('./node');


class BinaryTree {
  constructor(root) {
    //root -> sort of equals the top of the tree
    this.root = root;
    this.arr =[];
    this.max = 0;
  }

  preOrder(root) {

    //Base Case
    if(root === null){
      return this.arr;
    }

    //Recursive Case
    this.arr.push(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);

  }

  inOrder (root) {
    //Base Case
    if(root === null){
      return;
    }

    //Recursive Case

    this.inOrder(root.left);
    this.arr.push(root.value);
    this.inOrder(root.right);

  };

  postOrder (root) {
    //Base Case
    if(root === null){
      return;
    }

    //Recursive Case

    this.postOrder(root.left);
    this.postOrder(root.right);
    this.arr.push(root.value);

  };

  findMax(root) {

    //Base Case
    if(root === null) {
      return this.max;
    }

    //Recursive Case
    if(root.value > this.max) {
      this.max = root.value;
    }

    this.findMax(root.left);
    this.findMax(root.right);
  }

}

// Adding Nodes___________//

const one = new Node(2);
const two = new Node(7);
const three = new Node(5);
const four = new Node(2);
const five = new Node(6);
const six = new Node(9);
const seven = new Node(5);
const eight = new Node(11);
const nine = new Node(4);
//________________________//

// Creating a new tree___________//

const tree = new BinaryTree(one);

//________________________________//

// Adding Nodes to tree positions//

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = six;

five.left = seven;
five.right = eight;

six.left = nine;

//______________________________//


// Function Calls____//

// tree.preOrder(tree.root);
// inOrder(tree.root);
// postOrder(tree.root);
tree.findMax(tree.root);

//___________________//

module.exports = BinaryTree;
