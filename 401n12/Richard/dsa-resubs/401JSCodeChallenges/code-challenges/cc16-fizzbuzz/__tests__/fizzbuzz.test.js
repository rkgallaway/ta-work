const BT = require('../lib/newBinaryTree');
const Node = require('../lib/newNode');
const buzzFizz = require('../index');

describe('if fizz buzz works with a basic tree', () => {
  let testBT = new BT();
  let a = new Node(15);
  let b = new Node(6);
  let c = new Node(10);
  testBT.root = a;
  a.left = b;
  a.right = c;
  test('nodes are transformed', () => {
    testBT.fizzBuzz(testBT.root);
    expect(testBT.root.value).toEqual('FizzBuzz');
    expect(testBT.root.left.value).toEqual('Fizz');
    expect(testBT.root.right.value).toEqual('Buzz');
  });
  // test('buzzFizz?', () => {
  //   buzzFizz(testBT.root);
  //   expect(testBT.root.value).toEqual('FizzBuzz');
  //   expect(testBT.root.left.value).toEqual('Fizz');
  //   expect(testBT.root.right.value).toEqual('Buzz');
  // });
});