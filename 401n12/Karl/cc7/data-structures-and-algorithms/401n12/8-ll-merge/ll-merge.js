'use strict';

const Node = require ('./lib/node');
const LinkedList = require ('./lib/linked-list');

const LLONE = new LinkedList();
const LLTWO = new LinkedList();

function mergeList(list1, list2) {
    let current = list1.head;
    console.log(current.next);
    let curOne = current.next;
    console.log(curOne);
    let curTwo = list2.head.next;

    // if (curOne.next || curTwo.next !==null){
    //    change this into an else if series checking if either LL is empty
    while(curOne.value && curTwo.value){
        current.next = curOne;
        curOne = curOne.next; // advance list1
        current = current.next; // advance current
        current.next = curTwo;
        curTwo = curTwo.next;
        // curTwo = curTwo.next; // advance list2
        current = current.next; // advance current
    }
    if (curOne.value !== null) {
        current.next = curOne;
        return list1.head;
    } else if (curTwo.value !== null) {
        current.next = curTwo;
        return list1.head;
    } else {
        return list1.head;
    }
    // need to write part of function that covers if one list is shorter than the other
    // something about if list.next === null, iterate on the remaining list.
    /* } else if (true === true) {
    current.value = list.value;
    current.next = list.next;
    current = current.next;
    */
}


LLONE.insertAtHead(2);
LLONE.insertAtHead(3);
LLONE.insertAtHead(1);

LLTWO.insertAtHead('a');
LLTWO.insertAtHead('b');
LLTWO.insertAtHead('c');

mergeList(LLONE,LLTWO);