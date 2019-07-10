'use strict';

const BinaryTree = require('../lib/newBinaryTree.js');
const Node = require('../lib/newNode.js');

describe('testing tree stuff', ()=>{
  let emptyTree = new BinaryTree();
  let testNode = new Node('test');
  let givenTree = new BinaryTree(testNode);
  let testNodeA = new Node('pass');
  let testNodeB = new Node('fail');
  testNode.left = testNodeA;
  testNode.right = testNodeB;
  test('can make empty tree?', ()=>{
    expect(emptyTree.root).toEqual(null);
  });
  test('given tree', ()=>{
    expect(givenTree.root.value).toEqual('test');
  });
  test('can add chidrens', ()=>{
    expect(givenTree.root.left.value).toEqual('pass');
    expect(givenTree.root.right.value).toEqual('fail');
  });
});

describe('testing pre, in and post order', () => {
  let node0 = new Node(0);
  let node1 = new Node(1);
  let node2 = new Node(2);
  let testBT0 = new BinaryTree();
  testBT0.root = node0;
  node0.left = node1;
  node0.right = node2;
  test('preorder', () => {
    expect(testBT0.preOrder()).toEqual([0, 1, 2]);
  });
  test('inOrder', ()=>{
    expect(testBT0.inOrder()).toEqual([1,0,2]);
  });
  test('postOrder', ()=>{
    expect(testBT0.postOrder()).toEqual([1,2,0]);
  });
});