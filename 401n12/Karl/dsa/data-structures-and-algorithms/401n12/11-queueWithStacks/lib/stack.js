'use strict';

const Node = require('./node.js');

class Stack {
    constructor(){
        this.top=null;
    }

    push(value) {
        let nextTop = new Node(value);
        nextTop.pointer(this.top);
        this.top = nextTop;
    }

    pop(){
        // removes node from top of stack
        let popTop = this.top;
        this.top = this.top.next;
        popTop.pointer(null);
        return popTop.value;
    }

    peek(){
        return this.top.value;
    }
}

module.exports = Stack;