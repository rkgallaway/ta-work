'use strict';

const Node = require('./../lib/newNode');
const LinkedList = require('./../lib/linked-list');
const measureList = require('./../lib/measureList');

let linkedList = new LinkedList();
linkedList.insertAtTail(10);
linkedList.insertAtTail(25);
linkedList.insertAtTail('hello freaks');
linkedList.insertAtTail(true);
linkedList.insertAtTail('The End');

describe('testing new method', () => {
    test('passed NaN', () => {
        expect(linkedList.valueFromEnd('hello')).toEqual('must input a number');
    });
    test('passed a number too large', () => {
        expect(linkedList.valueFromEnd(10)).toEqual('Error-the linked list is too short');
    });
    test('passed a valid input', () => {
        expect(linkedList.valueFromEnd(0)).toEqual('The End');
    });
});