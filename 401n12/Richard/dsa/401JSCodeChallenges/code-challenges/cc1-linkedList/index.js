'use strict';

const Node = require('./lib/newNode');
const LinkedList = require('./lib/linked-list');

let linkedList = new LinkedList();
linkedList.insertAtTail(1);
linkedList.insertAtTail(3);
linkedList.insertAtTail(2);
linkedList.insertBefore(1, 10);

console.log(linkedList.head);