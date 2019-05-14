'use strict';

const node = require('../lib/node.js');
const LinkedList = require('../lib/linked-list.js');

const linkedList = new LinkedList();

describe('Linked Lists', () => {

    it('Can successfully add a node to the end of the linked list', () =>{
        linkedList.insertAtTail(1);
        expect(linkedList.head.value).toEqual(1);
    });
    it('Can successfully add multiple nodes to the end of a linked list', () =>{
        linkedList.insertAtTail(1);
        linkedList.insertAtTail(2);
        linkedList.insertAtTail(3);
        // how to figure out this test? reconfigure print function for this?
        // expect(printEntireList().toEqual({}))
    });
    it('Can successfully insert a node before a node in the middle of the linked list', () =>{
        linkedList.insertAtTail(1);
        linkedList.insertAtTail(2);
        linkedList.insertAtTail(3);
        linkedList.insertBefore(3, 4)
    });
    it('Can successfully insert a node before the first node of a linked list', () =>{});
    it('Can successfully insert after a node in the middle of the list', () =>{});
    it('Can successfully insert a node after the last node of the linked list', () =>{});
})