'use strict';

const Node = require ('../lib/node');
const LinkedList = require ('../lib/linklist');
const mergeList = require('../ll-merge');

// async function beforeAll() {

let linkedListA = new LinkedList();
let linkedListB = new LinkedList();

describe('Testing functionality of linked list', () => {

  test('Does it return linkedList A if linkList B does not exist', () => {
    //Adding to link list A
    linkedListA.insertAtHead(6);
    linkedListA.insertAtHead(4);

    mergeList(linkedListA,linkedListB);
    expect(linkedListA.head.next.value).toEqual(6);
  });

  test('returns linkedListA merged with B', () =>{
    //Adding to link list B
    linkedListB.insertAtHead(5);
    linkedListB.insertAtHead(3);

    mergeList(linkedListA,linkedListB);
    expect(linkedListA.head.next.value).toEqual(3);
  });

  test('return linkedListA merged with B, when B is shorter', () => {
    linkedListA = new LinkedList();
    linkedListB = new LinkedList();

    //Adding to link list A
    linkedListA.insertAtHead(6);
    linkedListA.insertAtHead(4);
    linkedListA.insertAtHead(2);

    //Adding to link list B
    linkedListB.insertAtHead(5);
    linkedListB.insertAtHead(3);

    mergeList(linkedListA, linkedListB);
    expect(linkedListA.head.next.next.next.value).toEqual(5);
  });

});
