'use strict';

const Node = require('./newNode');

class Stack {
    constructor(){
        this.top = null;
    }
    pushToStack(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }
    popOff(){
        let tempNode = this.top;
        this.top = tempNode.next;
        tempNode.next = null;
        return tempNode.value;
    }
    peek(){
        if(this.top){
            return this.top.value;
        }else{
            return 'Stack empty';
        }
    }
}

module.exports = Stack;