'use strict';

const Queue = require('../lib/queue-with-stacks');

describe('Testing functionality of adding/removing stacks via queue and dequeue', () => {
  test('testing dequeue greater than 1', () => {
    let queue = new Queue();

    queue.stackA.push(1);
    queue.stackA.push(2);
    queue.stackA.push(3);

    let result = queue.dequeue();

    expect(result).toEqual('1 was removed');
    expect(queue.stackA[1]).toEqual(3);
    expect(queue.stackA[0]).toEqual(2);
  });

  test('testing dequeue with stack at 1', () => {

    let queue = new Queue();

    queue.stackA.push(1);

    expect(queue.dequeue()).toEqual('1 has been removed');
  });

  test('testing dequeue with nothing stack', () => {

    let queue = new Queue();

    expect(queue.dequeue()).toEqual('Nothing to remove, stack is empty');
  });

  test('testing enqueue with nothing in stack A', () => {

    let queue = new Queue();

    expect(queue.enqueue(1)).toEqual('1 has been added to the bottom of the stack')
  });

  test('testing enqueue with items in stack A', () => {

    let queue = new Queue();

    queue.stackA.push(1);
    queue.stackA.push(2);
    queue.stackA.push(3);

    let result = queue.enqueue(0);

    expect(result).toEqual('0 has been added to the bottom of the stack');
    expect(queue.stackA).toEqual([0, 1, 2, 3])
  })
});
