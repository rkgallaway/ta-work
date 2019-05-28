'use-strict';
const node = require('./node.js');
const stack = require('./stack.js');

module.exports.createQueue=function(){
    return new Queue;
};

class Queue{
    constructor(){
        this.front = stack.createStack();
        this.rear = stack.createStack();
    }

    enqueue(value) {
        this.rear.push(value);
    }

    dequeue(){
        let r = this.front.pop();
        if (!r){
            while(this.rear.top){
                this.front.push(this.rear.pop());
            }
            r= this.front.pop();
        }
        return this.front.pop();
    }

    peek(){
        return new node.createNode(this.front.peek());
    }
}

