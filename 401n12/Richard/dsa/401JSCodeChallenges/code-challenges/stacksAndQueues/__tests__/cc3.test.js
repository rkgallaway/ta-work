'use strict';

const Node = require('./../lib/newNode');
const Stack = require('./../lib/newStack');
const Queue = require('./../lib/newQ');

let testStack = new Stack();

describe('make a new node', () =>{
    test('with a number', ()=>{
        expect(new Node(69)).toEqual({ value: 69, next: null });
    })
});

describe('test stack', () => {
    test('adding a node to the stack', () => {
       testStack.pushToStack(420);
       expect(testStack.top.value).toEqual(420);
    });
    test('adding multiple nodes', () => {
        testStack.pushToStack(69);
        testStack.pushToStack(502);
        expect(testStack.top.value).toEqual(502);
    });
    test('can pop off', () => {
        testStack.popOff();
        expect(testStack.top.value).toEqual(69);
    });
    test('can empty list with multiple pops', () => {
        testStack.popOff();
        testStack.popOff();
        expect(testStack.top).toEqual(null);
    });
    test('peeking an empty list return messaqe', () => {
        expect(testStack.peek()).toEqual('Stack empty');
    });
    test('peeking reveals alst added nodes value', () => {
        testStack.pushToStack('codefellows');
        testStack.pushToStack('n12');
        expect(testStack.peek()).toEqual('n12');
    });
});

describe('test queue', () => {
    let testQueue = new Queue();
    test('make a q', () => {
        expect(testQueue).toEqual({front: null, rear: null});
    });
    test('can add to que', () => {
        testQueue.enqueue(5);
        expect(testQueue.front.value).toEqual(5);
        expect(testQueue.rear.value).toEqual(5);
    });
    test('can add multiple to que', () => {
        testQueue.enqueue(2013);
        testQueue.enqueue('the end');
        expect(testQueue.front.value).toEqual(5);
        expect(testQueue.rear.value).toEqual('the end');
    });
    test('testing dequeue func', () => {
        expect(testQueue.dequeue()).toEqual(5);
        expect(testQueue.front.value).toEqual(2013);
    });
    test('multiple empties queue', () => {
        expect(testQueue.dequeue()).toEqual(2013);
        expect(testQueue.dequeue()).toEqual('the end');
        expect(testQueue.dequeue()).toEqual('empty queue');
    });
    test('peek works', () => {
        expect(testQueue.peek()).toEqual('empty queue');
    });
});