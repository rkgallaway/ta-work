'use strict';

// REQUIRE AND SETUP
const Node = require ('../lib/node');
const LinkedList = require ('../lib/linklist');
const linkedList = new LinkedList();

//LINKEDLIST VALUES
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);

describe('testing ll kth from end test', () => {

  it('does it return " Exception" if k is larger?', () => {

    expect(linkedList.indexBackWards(4)).toEqual('Exception');
  });

  it('Does it return a valid node value?', () => {

    expect(linkedList.indexBackWards(1)).toEqual(1);
  });

  it('does it only take numbers?', () => {

    expect(linkedList.indexBackWards("w")).toEqual('Exception');
  });
});