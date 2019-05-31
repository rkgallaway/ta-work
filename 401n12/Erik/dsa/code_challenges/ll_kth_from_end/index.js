'use strict';

const Node = require ('./lib/node');
const LinkedList = require ('./lib/linklist');
const linkedList = new LinkedList();

linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);
console.log(linkedList.indexBackWards(4));



console.log('test');