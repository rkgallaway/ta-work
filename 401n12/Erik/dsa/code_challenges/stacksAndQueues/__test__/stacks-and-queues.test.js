 'use strict';

  const Queue = require('../queue');
  const Stack = require('../stacks-and-queues');
  const stack = new Stack();
  const queue = new Queue();

  describe('Testing stacks', () => {

    test('Can successfully push onto a stack', () => {
      stack.push(1);
      expect(stack.top.value).toEqual(1);
    });

    test('Can successfully push multiple nodes onto a stack', () => {
      stack.push(2);
      stack.push(3);
      expect(stack.top.value).toEqual(3);
    });

    test('Can successfully pop off the stack', () => {
      stack.pop();
      expect(stack.top[2]).toBeUndefined();
    });

    test('Can successfully empty a stack after multiple pops', () => {
      stack.pop();
      stack.pop();
      expect(stack.top).toBeNull();
    });

    test('Can successfully peek the next item on the stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
    });

    test('Can successfully instantiate an empty stack', () => {
      let newStack = new Stack();
      expect(newStack.top).toBeNull();
    })
  });

  describe ('Testing queue', () => {

    test('Can successfully enqueue onto a queue', () => {
      queue.enqueue(1);
      expect(queue.front.value).toEqual(1);
      expect(queue.rear.value).toEqual(1);
    });

    test('Can successfully enqueue multiple items into a queue', () => {
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.rear.value).toEqual(3);
    });

    test('Can successfully dequeue off of a queue the expected value', () => {
      queue.dequeue();
      expect(queue.front.value).toEqual(2);
    });

    test('Can successfully peek into a queue, seeing the expected value', () => {
      expect(queue.peek().value).toEqual(2)
    });

    test('Can successfully empty a queue after multiple dequeues', () => {
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toBeNull();
      expect(queue.rear).toBeNull();
    });

    test('Can successfully instantiate an empty queue', () => {
      let newQueue = new Queue;
      expect(newQueue.front).toBeNull();
      expect(newQueue.rear).toBeNull();
    });
  });