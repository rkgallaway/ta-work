'use strict'

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtHead(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

    }
}

module.exports = LinkedList;