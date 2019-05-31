'use strict';

const Node = require('../lib/node');
const BinarySearchTree = require('../lib/binarySearchTree');
const BinaryTree = require('../lib/binaryTree');

// BINARY TREE TESTING__________________//

// Adding Nodes___________//
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
//________________________//

// Creating a new tree___________//
const tree = new BinaryTree(one);
//________________________________//

// Adding Nodes to tree positions//
one.left = two;
one.right = three;
three.left = four;
three.right = five;
//______________________________//


describe('Testing Binary Trees', () =>{

  test('Can it traverse PreOrder?', () =>{

    tree.preOrder(tree.root);
    expect(tree.arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('Can it traverse InOrder?', () =>{
    tree.arr = [];
    tree.inOrder(tree.root);
    expect(tree.arr).toEqual([2, 1, 4, 3, 5]);
  });

  test('Can it traverse Post Order?', () =>{
    tree.arr = [];
    tree.postOrder(tree.root);
    expect(tree.arr).toEqual([2, 4, 5, 3, 1]);
  });

  test('Does it return "Tree has nothing to search for"', () => {
    const BST = new BinarySearchTree();

    expect(BST.contains(1)).toEqual('Tree has nothing to search for');
  });

  test('Does it return a value if there is just one node in a tree?', () =>{
    const BST = new BinarySearchTree();
    BST.add(new Node(10));

    expect(BST.contains(10)).toEqual('10 was found');
  });

  test('Can it successfully add a left and right node', () => {
    const BST = new BinarySearchTree();
    BST.add(new Node(10));
    BST.add(new Node(15));
    BST.add(new Node(5));

    expect(BST.root.right.value).toEqual(15);
    expect(BST.root.left.value).toEqual(5);
  })

});
