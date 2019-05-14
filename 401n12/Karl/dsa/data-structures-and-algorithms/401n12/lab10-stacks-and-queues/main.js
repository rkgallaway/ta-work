'use strict';

const Node = require('./lib/node');
const Stack = require('./lib/stack');
const Queue = require('./lib/queue');

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(JSON.stringify(stack));
stack.peek();
stack.pop();
console.log(JSON.stringify(stack));

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.peek();
queue.dequeue();

console.log(JSON.stringify(queue))
