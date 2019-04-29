'use strict';

const Node = require('./lib/node');
const LinkedList = require('./lib/linked-list');



const linkedList = new LinkedList();
linkedList.insertAtHead(1);
linkedList.insertAtHead(2);
linkedList.insertAtHead(3);
linkedList.insertAtHead(4);
linkedList.find(2);
linkedList.insertAtTail(5);
linkedList.append(10);
linkedList.insertBefore(10, 9);
linkedList.insertAfter(10, 6);
// linkedList.printEntireList();

console.log(JSON.stringify(linkedList));
// logging this will only show two latest nodes?