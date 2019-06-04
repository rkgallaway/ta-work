'use strict';

const PsuedoQueue = require('../queue-with-stacks.js');

describe('Queue with stacks - 401js code challenge 11', () => {
  it('Creates an instance of pquedoQueue', () => {
    let psuedoQueue = new PsuedoQueue();
    expect(psuedoQueue instanceof PsuedoQueue).toBeTruthy();
  });
  it('Dequeues from an empty psuedoqueue behaves as expected', () => {
    let psuedoQueue = new PsuedoQueue();
    expect(psuedoQueue.dequeue()).toEqual(null);
  });
  it('"Happy Path" - behaves as expected, FIFO', () => {
    let psuedoQueue = new PsuedoQueue();
    psuedoQueue.enqueue(1);  
    psuedoQueue.enqueue(2);
    psuedoQueue.enqueue(3);
    psuedoQueue.enqueue(4);
    psuedoQueue.enqueue(5);
    expect(psuedoQueue.dequeue()).toEqual(1);
    expect(psuedoQueue.dequeue()).toEqual(2);
    psuedoQueue.enqueue(6);
    expect(psuedoQueue.dequeue()).toEqual(3);
    expect(psuedoQueue.dequeue()).toEqual(4);
    expect(psuedoQueue.dequeue()).toEqual(5);
    expect(psuedoQueue.dequeue()).toEqual(6);
    expect(psuedoQueue.dequeue()).toBeNull();
  });
});