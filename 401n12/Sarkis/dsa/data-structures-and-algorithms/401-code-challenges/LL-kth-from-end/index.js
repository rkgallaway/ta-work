'use strict';

const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtHead(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    findKthValue(k) {
        let counter = 0;
        let current = this.head;
        let arr = [];

        while (current.next !== null) {
            arr.push(current.value)
            current = current.next;
            counter++;
        }

        if (counter < k || k < 0 || typeof k !== 'number') {
            return 'value not found'
        } else {
            return arr[counter - k];
        }
    }
}

module.exports = LinkedList;