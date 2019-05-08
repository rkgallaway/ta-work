'use strict'


const stacksAndQueues = {};
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

stacksAndQueues.Node = Node;

class Stack {
    constructor() {
        this.top = [];
    }

    push(value) {
        return this.top.push(new Node(value));
    }

    pop() {
        const pop = this.top;
        this.top = this.top.next;
        return pop;

    }

    peek() {

        return this.top;
    }
}

stacksAndQueues.Stack = Stack;

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        new Node = this.rear;
    }

    dequeue() {
        const frontNode = this.front;
        return frontNode;

    }

    peek() {

    }
}
stacksAndQueues.Queue = Queue;

module.exports = stacksAndQueues;