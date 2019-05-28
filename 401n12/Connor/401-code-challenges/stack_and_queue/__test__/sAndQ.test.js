'use strict';
const stackss = require ('../stack.js');
const queue = require ('../queue.js');
const node = require ('../node.js');
const faker = require ('faker');

describe ('stacks',()=>{
    it ('can create an empty stack', ()=>{
        let stack = stackss.createStack();
        expect(stack.top).toEqual(null);
    });
    it ('can push a new node on to the stack', ()=>{
        let stack = stackss.createStack();
        stack.push(7);
        expect(stack.top.value).toEqual(7);
    });
    it ('can push multiple new nodes on to the stack', ()=>{
        let stack = stackss.createStack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        expect(stack.top.value).toEqual(9);
    });
   it ('can peek at the top value of the stack',()=>{
       let stack = stackss.createStack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        expect(stack.peek().value).toEqual(9);
    });
    it('can pop a value off of the stack', ()=>{
        let stack = stackss.createStack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        expect(stack.pop().value).toEqual(9);
    });
    it('can pop off all nodes from the stack', ()=>{
        let stack = stackss.createStack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toEqual(null);
    })
});

describe('queues',()=>{
    it('can create an empty stack',()=>{
      let newQueue = queue.createQueue();
      expect(newQueue.front).toEqual(null);
    });
    it('can add a value to the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enque(19);
        expect(newQueue.front.value).toEqual(19);
    });
    it('can add multiple values to the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enque(19);
        newQueue.enque(11);
        newQueue.enque(17);
        expect(newQueue.front.value-newQueue.rear.value).toEqual(2);
    });
    it('can remove a single value from the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enque(19);
        newQueue.enque(11);
        newQueue.enque(17);
        expect(newQueue.deque().value).toEqual(19);
    });

    it('can remove a all values from the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enque(19);
        newQueue.enque(11);
        newQueue.enque(17);
        newQueue.deque();
        newQueue.deque();
        newQueue.deque();
        expect(newQueue.front).toEqual(null);
    });
    it('can peek at the front of the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enque(19);
        newQueue.enque(11);
        newQueue.enque(17);
        expect(newQueue.peek().value).toEqual(19);
    })
});
