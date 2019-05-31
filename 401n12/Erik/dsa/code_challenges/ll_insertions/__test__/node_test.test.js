'use strict';

// REQUIRE AND SETUP
const Node = require ('../lib/node');
const LinkedList = require ('../lib/linklist');
const linkedList = new LinkedList();

//LINKEDLIST VALUES
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);

describe ('linked list test.', () => {
  it('Can it add a new node to the end?', () => {
    linkedList.addNew(4);
    expect(linkedList.head.next.next.next.value).toEqual(4);
  });
  it('Can it add multiple new nodes to the end', () => {
    linkedList.addNew(4);
    linkedList.addNew(5);
    expect(linkedList.head.next.next.next.value).toEqual(4);
    expect(linkedList.head.next.next.next.next.next.value).toEqual(5);
  });

  it('Can it be inserted in the middle of the list', () => {
    linkedList.insertBefore(10, 2);
    expect(linkedList.head.next.value).toEqual(10);
    expect(linkedList.head.next.next.value).toEqual(2)
  });
  it('Can it be inserted at the head?', () => {
    linkedList.insertBefore(10, 3);
    expect(linkedList.head.value).toEqual(10);
    expect(linkedList.head.next.value).toEqual(3);
  });
  it('Can it be inserted into the middle?', () => {
    linkedList.insertAfter(10, 2);
    expect(linkedList.head.next.next.value).toEqual(10);
    expect(linkedList.head.next.next.next.value).toEqual(2);
  })
  it('Can it be inserted at the end?', () => {
    linkedList.insertAfter(10, 1);
    expect(linkedList.head.next.next.next.next.next.next.value).toEqual(10);
  })
});