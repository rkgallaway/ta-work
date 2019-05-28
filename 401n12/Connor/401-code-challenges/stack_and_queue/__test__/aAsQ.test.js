'use strict';
const queue = require ('../stacksAsQueues.js');

describe('queues',()=>{
    it('can create an empty queue',()=>{
        let newQueue = queue.createQueue();
        expect(newQueue.peek().value).toEqual(null);
    });
    it('can add a value to the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enqueue(19);
        expect(newQueue.rear.top.value).toEqual(19);
    });
    it('can add multiple values to the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enqueue(19);
        newQueue.enqueue(11);
        newQueue.enqueue(17);
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.front.top.value).toEqual(17);
    });
    xit('can remove a all values from the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enqueue(19);
        newQueue.enqueue(11);
        newQueue.enqueue(17);
        newQueue.dequeue();
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.dequeue()).toEqual(null);
    });

    xit('can peek at the front of the queue',()=>{
        let newQueue = queue.createQueue();
        newQueue.enqueue(19);
        newQueue.enqueue(11);
        newQueue.enqueue(17);
        expect(newQueue.peek().value).toEqual(19);
    })
});
