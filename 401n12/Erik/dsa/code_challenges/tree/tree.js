'use strict';

const Node = require('./lib/node');


class BinaryTree {
  constructor(root) {
    //root -> sort of equals the top of the tree
    this.root = root;
  }
  // add(nodeToInsert) {
  //   if(!nodeToInsert) {
  //     throw new Error ('can not insert without a value');
  //   }
  //   if(!this.root) {
  //     this.root = nodeToInsert;
  //   }
  // }
  //
  // find(valueToFind) {
  //
  // }
}


const preOrder = (root) => {
  //Base Case
  if(root === null){
    return;
  }

  //Recursive Case
  console.log('PreOrder', root.value);
  preOrder(root.left);
  preOrder(root.right);
  // Visiting my Node
};

const inOrder = (root) => {
  //Base Case
  if(root === null){
    return;
  }

  //Recursive Case
  inOrder(root.left);
  console.log('InOrder', root.value);
  inOrder(root.right);
  // Visiting my Node
};

const postOrder = (root) => {
  //Base Case
  if(root === null){
    return;
  }

  //Recursive Case
  postOrder(root.left);
  postOrder(root.right);
  console.log('PostOrder', root.value);
  // Visiting my Node
};

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

// preOrder(tree.root);
// inOrder(tree.root);
postOrder(tree.root);

//___________________//
