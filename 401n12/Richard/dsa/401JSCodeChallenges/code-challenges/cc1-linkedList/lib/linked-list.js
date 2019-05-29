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
            return;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    insertBefore(value, newValue){
        const newNode = new Node(newValue);
        if(!this.head){
            this.head = newNode;
            return;
        }else{
            let current = this.head;
            if(current.value === value){
               newNode.next = current;
               this.head = newNode;
               return;
            }else{
                while(current.next.value !== value){
                    current = current.next;
                }
                newNode.next = current.next;
                current.next = newNode;
                return;
            }

        }
    }
    insertAfter(value, newValue){
        const newNode = new Node(newValue);
        if(!this.head){
            this.head = newNode;
            return;
        }else{
            let current = this.head;
            while(current.value !== value){
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            return;
        }
    }
    lastValue(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current.value;
    }
}

module.exports = LinkedList;