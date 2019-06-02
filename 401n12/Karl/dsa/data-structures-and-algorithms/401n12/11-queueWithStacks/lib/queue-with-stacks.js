'use strict';

const Node = require('./node');
const Stack = require('./stack');

class PseudoQueue {
    constructor(){

    }

    let inStack = new Stack();
    let outStack = new Stack();

    enqueue(node){
        this.inStack.push(node);
    }
    dequeue(node){
        let popper = this.outStack.pop();
        while(this.inStack.peek()){
            this.outStack.push(this.inStack.pop());
        }
        while(this.outStack.peek()){
            this.inStack.push(this.outStack.pop());
        }
    }
}