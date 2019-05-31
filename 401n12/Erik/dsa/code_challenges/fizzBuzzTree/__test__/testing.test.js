'use strict';

const Node = require('../lib/node');
const BinaryTree = require('../fizz-buzz-tree');

describe('Testing fizzbuzz problem', () => {

  test('Does it replace all values that are devisable by 3, 5, and 3 & 5.', () => {

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const fifteen = new Node(15);

    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    five.right = fifteen;

    tree.FizzBuzzTree(tree.root);

    expect(tree.arr).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'FizzBuzz']);

  });

  test('No tree to traverse', () => {
    const tree = new BinaryTree(null);

    expect(tree.FizzBuzzTree(tree.root)).toEqual('Tree does not have any nodes');
  })
});
