'use strict';

  const Node = require('./node.js');

  class Stack {
    constructor () {
      this.top =null;
    }

    push (value) {
      const newNode = new Node (value);

      if(this.top === null) {
      this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }

    pop () {
      let previous = this.top;
      this.top = previous.next;
      return previous.value;
    }

    peek () {
      return this.top;
    }
  }

  module.exports = Stack;