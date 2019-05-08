'use strict'

const Node = require('../node');
const BinaryTree = require('../tree');
const breadthFirst = require('../breadth_first');

describe('Tests breadth-first traversal of a binary tree', () => {

  it('Traverses a binary tree breadth first. (Expected outcome)', () => {

    const one = new Node(20);
    const two = new Node(25);
    const three = new Node(30);
    const four = new Node(35);
    const five = new Node(40);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    const tree = new BinaryTree(one);
    const test = breadthFirst(tree.root, []);

    expect(test).toEqual([20,25,30,35,40]);
    expect(test.length).toEqual(5);

  });

  it('Successfully traverses binary tree breadth first. (Expected outcome)', () => {

    const one = new Node(7);
    const two = new Node(12);
    const three = new Node(18);
    const four = new Node(22);
    const five = new Node(31)

    one.left = two;
    two.right = three;
    three.left = four;
    four.left = five;


    const treeTwo = new BinaryTree(one);
    const testTwo = breadthFirst(treeTwo.root, []);

    expect(testTwo).toEqual([7, 12, 18, 22, 31]);
    expect(testTwo.length).toEqual(5);

  });

  it('Returns a null if root is empty', () => {

    const emptyTree = new BinaryTree();
    const emptyTest = breadthFirst(emptyTree.root, []);

    expect(emptyTest).toEqual('null');

  });

});
