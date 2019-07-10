// import BinaryTree from '../lib/BinaryTree';
// import Node from '../lib/newNode';
const BinaryTree = require('../lib/BinaryTree');
const Node = require('../lib/newNode');
describe('testing max value', () => {
  let node0 = new Node(1);
  let node1 = new Node(10);
  let node2 = new Node(90);
  let node3 = new Node(3);
  let node4 = new Node(21);
  let node5 = new Node(420);
  let node6 = new Node(210);
  let node7 = new Node(100);
  let testTree = new BinaryTree(node0);
  node0.left = node1;
  node0.right = node2;
  node1.left = node3;
  node1.right = node4;
  node2.left = node5;
  node2.right = node6;
  node6.left = node7;
  test('happy route', () => {
    expect(testTree.findMaximumValue()).toEqual(420);
  });

});
