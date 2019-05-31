'use strict';

const Node = require('./node');

class LinkList {
  constructor () {
    this.head = null;
    this.count = 0;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    // Connecting newNode to our list
    newNode.next = this.head;

    // re-assigning our HEAD
    this.head = newNode;

    //counter
    this.count ++;
  }


}

module.exports = LinkList;
