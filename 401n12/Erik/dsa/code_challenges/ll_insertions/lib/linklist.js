'use strict';

const Node = require('./node');

class LinkList {
  constructor () {
    this.head = null;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    // Connecting newNode to our list
    newNode.next = this.head;

    // re-assigning our HEAD
    this.head = newNode;
  }

  addNew (val) {
    const newNode = new Node(val);
    let current = this.head;

    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(newVal, value) {

    if (value === this.head.value) {
       return this.insertAtHead(newVal);
    }

    const newNode = new Node(newVal);
    let current = this.head;
    let previous;

    while(current.value !== value) {
      previous = current;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;
    console.log(newNode.next);
    console.log(previous.next);
  }

  insertAfter (newVal, value) {
    const newNode = new Node(newVal);
    let current = this.head;
    let previous;

    while (current.value !== value) {
      previous = current;
      current = current.next;
    }
    // Assigning value link to new node
    newNode.next = current.next;
    // Assigns new node position (current will assign after and previous will assign before)
    current.next = newNode;
  }
}

module.exports = LinkList;