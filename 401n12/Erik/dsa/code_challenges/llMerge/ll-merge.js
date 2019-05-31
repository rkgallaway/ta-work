'use strict';
const Node = require ('./lib/node');
const LinkedList = require ('./lib/linklist');

let linkedListA = new LinkedList();
let linkedListB = new LinkedList();

const mergeList = (linkA, linkB) => {

  if(linkA.head === null) return linkB;
  if(linkB.head === null) return linkA;
  if(linkA.head && linkB.head === null) return 'No link lists were entered';

  let currA = linkA.head;
  let currB = linkB.head;

      while (currB !== null) {
        let nextNodeB = currB.next;
        let nextNode = currA.next;
        currA.next = currB;
        currA.next.next = nextNode;
        currB = nextNodeB;
        currA = currA.next.next;
        }
   return linkA;
};

module.exports = mergeList;



