'use strict';

const Node = require('./../lib/newNode');
const Stack = require('./../lib/newStack');
const SudoQ = require('./../queue-with-stacks');

describe('can create stuff', () => {
    it('can create a node', () => {
        expect(new Node(69)).toEqual({ value: 69, next: null });
    });
});

describe('see if queue works', () => {
    let testQ = new SudoQ();
    it('peek errors on empty list', () => {
        expect(testQ.peek()).toEqual('Q empty');
    });
    it('can enqueue 1 node', () => {
        testQ.enqueue('derp');
        expect(testQ.peek()).toEqual('derp');
    });
    it('can enqueue multiple', () => {
        testQ.enqueue(420);
        testQ.enqueue('you lose');
        expect(testQ.peek()).toEqual('you lose');
    });
    it('dequeue return first value', () => {
        expect(testQ.dequeue()).toEqual('derp');
    });
});