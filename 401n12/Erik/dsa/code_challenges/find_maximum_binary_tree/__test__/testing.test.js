'use strict';

const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

// BINARY TREE TESTING__________________//

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


describe('Testing getting max', () =>{

  test('Can it successfully find a max?', () => {
    tree.findMax(tree.root);

    expect(tree.max).toEqual(11);
  })

});
