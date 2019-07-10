'use strict';

const Node = require('./newNode');

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertAtTail(value){
        const newNode = new Node(value);
        newNode.next = null;
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

module.exports = LinkedList;

