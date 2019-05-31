'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root) {
    //root -> sort of equals the top of the tree
    this.root = root;
    this.arr =[]
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

  breadth (root) {

    let queue = [root];

    let output = [];

    if(!root) {
      return 'Please enter a root to traverse';
    }

    while (queue.length > 0) {
      let currentNode = queue.shift();

      if(currentNode) {
        output.push(currentNode.value);
      }

      if(currentNode.left) {
        queue.push(currentNode.left);
      }

      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return output;
  }

}

// Adding Nodes___________//

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

//________________________//

// Createing a new tree___________//

const tree = new BinaryTree(one);

//________________________________//

// Adding Nodes to tree positions//

one.left = two;
one.right = three;

three.left = four;
three.right = five;

//______________________________//


// Function Calls____//

// tree.preOrder(tree.root);
// inOrder(tree.root);
// postOrder(tree.root);
// tree.breadth(tree.root);

//___________________//

module.exports = BinaryTree;
