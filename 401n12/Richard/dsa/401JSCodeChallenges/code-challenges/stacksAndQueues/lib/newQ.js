'use strict';
const Node = require('./newNode');

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        let newNode = new Node(value);
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
            this.front= this.front.next ;
            return cut.value;
        }
    }
    peek(){
        if(this.front){
            return this.front.value;
        }else{
            return 'empty queue';
        }
    }
}

module.exports = Queue;