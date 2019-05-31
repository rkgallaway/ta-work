'use strict';

const Node = require('./node.js');

class Queue {
  constructor () {
    // is front the same as top? error in instructions???
    this.front = null;
    this.rear = null;
  }

  enqueue (value) {
    const newNode = new Node (value);

    if(this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue () {
    let oldFront = this.front;

    this.front = oldFront.next;

    if(this.front === null) {
      this.rear = null;
    }
    return oldFront;
  }

  peek () {
    return this.front;
  }
}

module.exports = Queue;