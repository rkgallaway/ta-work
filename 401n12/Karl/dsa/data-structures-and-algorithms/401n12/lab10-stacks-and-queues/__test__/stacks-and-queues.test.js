'use strict';

const Node = require('../lib/node');
const Queue = require('../lib/queue');
const Stack = require('../lib/stack');
const testingStack = new Stack();
const testingQueue = new Queue();

describe('stack', () => {
    it('Can successfully push onto a stack', () => {
        let x ='x';
        testingStack.push(x);
        expect(testingStack.top.value).toEqual(x);
    });

    it('Can successfully push multiple nodes onto a stack', () => {
       testingStack.push(2);
       testingStack.push(5);
       testingStack.push(12);
       testingStack.push(20);
       expect(testingStack.top.value).toEqual(20);
    });

    it('Can successfully pop off the stack', () => {
       testingStack.pop();
       expect(testingStack.top[2]).toBeUndefined();
    });

    it('Can successfully empty a stack after multiple pops.', () => {
        testingStack.pop();
        testingStack.pop();
        testingStack.pop();
        testingStack.pop();
        expect(testingStack.top).toBeNull();
    });

    it('Can successfully peek the next item on the stack', () => {
        testingStack.push(5);
        testingStack.push(1);
        expect(testingStack.peek()).toEqual(1);
    });

    it('Can successfully instantiate an empty stack', () => {
       let test2 = new Stack();
       expect(test2.top).toBeNull();
    });
});

describe('queue', () => {

    it('Can successfully enqueue onto a queue', () => {
        testingQueue.enqueue(5);
        expect(testingQueue.back.value).toEqual(5);
        expect(testingQueue.front.value).toEqual(5);
    });

    it('Can successfully enqueue multiple items into a queue', () => {
        testingQueue.enqueue(1);
        testingQueue.enqueue(2);
        testingQueue.enqueue(3);
        expect(testingQueue.back.value).toEqual(3);
        expect(testingQueue.front.value).toEqual(5);
    });

    it('Can successfully dequeue off of a queue the expected value', () => {
        testingQueue.dequeue();
        expect(testingQueue.front.value).toEqual(1);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
        expect(testingQueue.peek()).toEqual(1);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
        testingQueue.dequeue();
        testingQueue.dequeue();
        testingQueue.dequeue();
        // console.log(JSON.stringify(testingQueue));
        // testingQueue.dequeue();
        expect(testingQueue.back).toBeNull();
        expect(testingQueue.front).toBeNull();
    });

    it('Can successfully instantiate an empty queue', () => {
       let test3 = new Queue();
       expect(test3.back).toBeNull();
       expect(test3.front).toBeNull();
    });
});
