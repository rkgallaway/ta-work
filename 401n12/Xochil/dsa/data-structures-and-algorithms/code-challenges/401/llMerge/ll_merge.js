'use strict';

const Node = require('./node.js');
const LinkedList = require('./linked_list.js');

const linkedList1= new LinkedList();
linkedList1.insertAtHead(5);
linkedList1.insertAtHead(3);
linkedList1.insertAtHead(1);
const linkedList2= new LinkedList ();
linkedList2.insertAtHead(6);
linkedList2.insertAtHead(4);
linkedList2.insertAtHead(2);



const  mergedLists =(a, b) => {

        let currentListA = a.head;
        let currentListB = b.head;
        let tempA = currentListA.next;
        let tempB = currentListB.next;



        while (tempA && tempB) {


            currentListA.next = currentListB;
            currentListB.next= tempA;
            currentListA = tempA;
            currentListB = tempB;
            tempA = currentListA.next;
            tempB = currentListB.next;

        }


        return a;

  };

  // const linkedList1= new LinkedList();
  // linkedList1.insertAtHead(5);
  // linkedList1.insertAtHead(3);
  // linkedList1.insertAtHead(1);cT
  // const linkedList2= new LinkedList ();
  // linkedList2.insertAtHead(6);
  // linkedList2.insertAtHead(4);
  // linkedList2.insertAtHead(2);

  mergedLists(linkedList1, linkedList2);








  module.exports = mergedLists;