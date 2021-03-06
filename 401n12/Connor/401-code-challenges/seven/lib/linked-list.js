'use strict';

const Node = require('./node');

// Variables
  // HEAD
// Behavior
  // Insert Values -> :)
  // Remove Values
  // Iterate / Loop -> :)
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    // 1 - Connecting newNode to our list
    newNode.next = this.head;

    // 2 - re-assigning our HEAD
    this.head = newNode;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) { // Vinicio - WHILE I CAN MOVE CURRENT TO THE RIGHT
      current = current.next;
    }
    // Vinicio - once this while is over. I know I'm at the end
    // current.next is equal to null right now
    // this is making the new connection
    current.next = newNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        let hold = current.next;
        current.next = newNode;
        newNode.next = hold;
        return (`new node with value ${newValue} placed into the linked list before value ${value}`);
      } else {
        return (`value ${value} was not found in the linked list.`);
      }
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        let hold = current.next;
        current.next = newNode;
        newNode.next = hold;
        return (`new node with value ${newValue} placed into the linked list after value ${value}`);
      } else {
        return (`value ${value} was not found in the linked list.`);
      }
    }
  }
kthFromEnd(k){
    let current=this.head;
    let count=0;
    let rV=null;
    while (current) {
      if (count === k ) {
        rV = this.head;
      }
      current = current.next;
      if (rV) {
        rV = rV.next;
      }
      count++;
    }
    return rV;
  };
}


module.exports = LinkedList;