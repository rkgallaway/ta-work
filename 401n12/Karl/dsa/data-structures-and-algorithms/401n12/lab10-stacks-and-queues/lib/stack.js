'use strict';

const Node = require('./node.js');

class Stack {
    constructor(){
        this.top=null;
    }
    // how do i instantiate a stack when this class is called?

    push(value) {
        let nextTop = new Node(value);
        nextTop.pointer(this.top);
        this.top = nextTop;
    }

    pop(){
        // removes node from top of stack
        let popTop = this.top;
        this.top = this.top.next; // i think this will return the next one in the stack instead of the current one.
        popTop.pointer(null);
        // return this.top.value;
        // return node's value?
    }

    peek(){
        // console.log(this.top.value);
        return this.top.value;
    }
}

module.exports = Stack;