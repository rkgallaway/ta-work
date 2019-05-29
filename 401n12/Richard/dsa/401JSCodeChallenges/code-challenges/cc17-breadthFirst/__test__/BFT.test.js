'use strict';

const Node = require('../lib/newNode');
const BinaryTree = require('../lib/binaryTree');

describe('BFT test', () => {
  let node0 = new Node('a');
  let node1 = new Node('b');
  let node2 = new Node('c');
  let node3 = new Node('d');
  let node4 = new Node('e');
  let node5 = new Node('f');
  let node6 = new Node('g');
  let testTree0 = new BinaryTree(node0);
  node0.left = node1;
  node0.right = node2;
  node1.left = node3;
  node1.right = node4;
  node2.left = node5;
  node2.right = node6;
  test('happy path works', () => {
    expect(testTree0.breadthFirstSearch()).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
  let testTree1 = new BinaryTree();
  test('edge case: empty tree', () => {
    expect(testTree1.breadthFirstSearch()).toEqual('tree is empty');
  });
});