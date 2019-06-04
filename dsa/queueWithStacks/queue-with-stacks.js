'use strict';

const Stack = require('../stacks-and-queues/stack.js');

class PsuedoQueue {
  constructor(){
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
    this.enqNodes = [];
    this.deqNodes = [];
  }

  enqueue(value){
    this.enqueueStack.push(this.dequeueStack.pop());
  }
  dequeue (){
    let temp = 0;
    if(!this.enqueueStack.top){
      return null;
    } else {
      while(this.enqueueStack.top){
        temp = this.enqueueStack.pop();
        if(this.enqueueStack.top){
          this.dequeueStack.push(temp);
        }else{
          break;
        }
      }
    }
    while(this.dequeueStack.top){
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    return temp;
  }
}


module.exports = PsuedoQueue;