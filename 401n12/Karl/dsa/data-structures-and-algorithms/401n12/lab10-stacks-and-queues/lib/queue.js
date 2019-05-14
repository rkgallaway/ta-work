'use strict';

const Node = require('./node.js');

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        if (this.front === null && this.back === null){
            let newLine = new Node(value);
            this.front = newLine;
            this.back = newLine;
        } else {
            let current = this.back;
            current.next = new Node(value);
            this.back = current.next;
        }
        // adds a new node with this value to back of queue
        // O(1) time performance?
    }

    dequeue(){
        //removes node from front of queue, return value of node
        if (this.front === null || this.front.next === null){
            this.front === null;
            this.back === null;
        } else {
            this.front = this.front.next;
        }
    }

    peek() {
        return this.front.value;
        // need reference to node?
    }
}

module.exports = Queue;