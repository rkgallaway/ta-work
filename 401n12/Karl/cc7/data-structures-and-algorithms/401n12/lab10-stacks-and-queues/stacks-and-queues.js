'use strict';

class Node {
    constructor (value, next){
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor(top){
        this.top=top;
    }
    // how do i instantiate a stack when this class is called?

    push(value) {
        // this.value = ?
    }

    pop(){
        // removes node from top of stack
        // return node's value
    }

    peek(){
        return top;
    }
}

class Queue {
    constructor(front) {
        this.front = 0;
        // empty value?
    }

    enqueue (value) {
        // adds a new node with this value to back of queue
        // O(1) time performance?
    }

    dequeue (){
        //removes node from front of queue, return value of node
    }

    peek () {
        return front.value;
        // need reference to node?
    }
}