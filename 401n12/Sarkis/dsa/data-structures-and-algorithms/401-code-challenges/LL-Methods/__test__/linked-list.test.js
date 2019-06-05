'use strict';

// Sarkis - Import constructor properties/methods
const LinkedList = require('../linked-list');

function Node(value, next = null) {
    this.value = value;
    this.next = next;
};


describe('Linked List  Data Structure', () => {

    it('Can successfully add a node to the end of the linked list', () => {
        let list = new LinkedList();
        list.append(1);
        expect(typeof (list.head)).toEqual('object');
        expect(list.length).toEqual(2);
    });

    it('Can successfully add multiple nodes to the end of the linked list', () => {
        let list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.length).toEqual(3);
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        let list = new LinkedList();
        list.append(1);
        list.insertBefore(1, 'a');
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual(1);
    });

    it('Can successfully insert a node after the first node of a linked list', () => {
        let list = new LinkedList();
        list.append(1);
        list.insertAfter(1, 'a');
        console.log(list)
        expect(list.head.value).toEqual(1);
        expect(list.head.next.value).toEqual('a');
    });

    it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.insertAfter(2, 'a');
        expect(list.head.next.value).toEqual(2);
        expect(list.head.next.next.value).toEqual('a');
    });


    it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.insertAfter(2, 'a');
        list.append(4);
        expect(list.head.next.next.next.value).toEqual(3);
        expect(list.head.next.next.next.next.value).toEqual(4);
    });

});
