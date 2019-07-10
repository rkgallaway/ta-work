'use strict';

const Node = require('./../lib/newNode');
const LinkedList = require('./../lib/linked-list');
//setup test list
let linkedList = new LinkedList();
linkedList.insertAtTail(1);
linkedList.insertAtTail(3);
linkedList.insertAtTail(2);
//tests
describe('make a new node', () =>{
    test('with a number', ()=>{
        expect(new Node(69)).toEqual({ value: 69, next: null });
    })
})
describe('test linked list', () => {
    test('Append 1 value to end', () => {
        linkedList.insertAtTail(5);
        expect(linkedList.head.next.next.next.value).toEqual(5);
    });
    test('Append multiple nodes', () => {
        linkedList.insertAtTail(6);
        expect(linkedList.head.next.next.next.next.value).toEqual(6);
    });
    test('Can insert before a node in the middle of a linked list', () => {
        linkedList.insertBefore(3, 10);
        expect(linkedList.head.next.value).toEqual(10);
    });
    test('Can insert before first node of linked list', () => {
        linkedList.insertBefore(1,20);
        expect(linkedList.head.value).toEqual(20);
    });
    test('Can successfully insert after a node in the middle of the linked list', () => {
        linkedList.insertAfter(20, 17);
        expect(linkedList.head.next.value).toEqual(17);
    });
    test('insert at end with after', () => {
        linkedList.insertAfter(6, 666);
        expect(linkedList.lastValue()).toEqual(666);
    });
});
