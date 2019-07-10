'use strict';
//import Node from '../lib/newNode';
const Node = require('../lib/newNode');
//import BinaryTree from '../lib/newBT';
const BinaryTree = require('../lib/newBT');
const {findHeight, maximumValue} = require('../index');


describe('test height function', ()=> {
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let testTree = new BinaryTree(node1);
  node1.left = node2;
  node1.right = node3;
  node2.right = node4;
  test('no problems should equal 3', ()=>{
    expect(findHeight(testTree.root)).toEqual(3);
  });
});