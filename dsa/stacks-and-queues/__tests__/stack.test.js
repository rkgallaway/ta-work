'use strict';

const Stack = require('../stack.js');

describe('Stack Tests:', () => {
  it('Can successfully push into a stack', () => {
    let singleStack = new Stack();
    singleStack.push(1);
    expect(singleStack.top.value).toEqual(1);
  });
  it('Can successfully push multiple nodes onto a stack', () => {
    let multiStack = new Stack();
    multiStack.push(1);
    multiStack.push(2);
    multiStack.push(3);
    multiStack.push(4);
    expect(multiStack.top.value).toEqual(4);
    expect(multiStack.top.next.value).toEqual(3);
    expect(multiStack.top.next.next.value).toEqual(2);
    expect(multiStack.top.next.next.next.value).toEqual(1);
  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    expect(stack.top.value).toEqual(2);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });
  it('Can successfully peek the next item on the stack', () => {
    let singleStack = new Stack();
    singleStack.push(1);
    expect(singleStack.peek()).toEqual(1);
  });
  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });
  it('Can successfully return peek() and pop() response from an empty stack', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
    expect(stack.pop()).toEqual(null);
    expect(stack.peek()).toEqual(null);
  });
});