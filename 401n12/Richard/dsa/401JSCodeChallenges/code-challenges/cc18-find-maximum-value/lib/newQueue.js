'use strict';

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(treeNode){
    let newNode = treeNode;
    if(!this.front){
      this.front = newNode;
      this.rear = newNode;
    }else{
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue(){
    let cut = this.front;
    if(!cut){
      return 'empty queue';
    }else{
      this.front = this.front.next ;
      cut.next = null;
      return cut.value;
    }
  }
}

module.exports = Queue;
