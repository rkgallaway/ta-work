'use strict';

const Node = require('../lib/node');
const BinarySearchTree = require('../lib/binarySearchTree');
const BinaryTree = require('../lib/binaryTree');

// BINARY TREE TESTING__________________//

// Adding Nodes___________//
const one = new Node(2);
const two = new Node(7);
const three = new Node(5);
const four = new Node(2);
const five = new Node(6);
const six = new Node(5);
const seven = new Node(11);
const eight = new Node(9);
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
five.left = six;
five.right = seven;
three.right = eight;
eight.left = nine;
//______________________________//


describe('Testing BinaryTree', () =>{

  test('Can it fail when tree is not in parameter', () =>{

    expect(tree.breadth()).toEqual('Please enter a root to traverse');
  });

  test('Can it return tree numbers in correct order', () => {
    expect(tree.breadth(tree.root)).toEqual([2,7,5,2,6,9,5,11,4])
  })

});
