'use strict';


//import node class
const Node = require('./node');


//linked list constructor
class LinkedList{
    constructor(){
        this.head = null;
    }

    //method to insert node at head
    insertAtHead(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    //method to insert node at end
    insertAtTail(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;
    }

    //method to find node
    find(value){
        if(!this.head){
            throw new Error('The list is empty');
        }

        if(this.head.value === value){
            return this.head;
        }

        let current = this.head;
        while(current.next){
            if(current.next.value === value){
                return current.next;
            }

            current = current.next;
        }

        return null;
    }

    //method to insert node before value
    insertBefore(value, newValue){
        const newNode = new Node(newValue);

        if(!this.head){
            throw new Error('The list is empty');
        }

        if(this.head.value === value){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next){
            if(current.next.value === value){
                newNode.next = current.next;
                current.next = newNode;
                return;
            }

            current = current.next;
        }

        return null;
    }

    //method to insert after value
    insertAfter(value, newValue){
        const newNode = new Node(newValue);

        if(!this.head){
            throw new Error('The list is empty');
        }

        if(this.head.value === value){
            newNode.next = this.head.next;
            this.head.next = newNode;
            return;
        }

        let current = this.head;

        while(current.next){
            if(current.next.value === value){
                newNode.next = current.next.next;
                current.next.next = newNode;
                return;
            }

            current = current.next;
        }

        return null;

    }

    //method to print current list
    printList(){

        if(!this.head){
            throw new Error('No list exists');
        }

        if(this.head.next === null){
            console.log(this.head.value);
            return;
        }

        let current = this.head;

        while(current.next){
            console.log(current.value);
            current = current.next;
        }

        if(current.next === null){
            console.log(current.value);
            return;
        }

        return null;
    }

    //method to find list length
    findLength(){
        let lengthCounter = 0;
        if(!this.head){
            throw new Error('List does not exist.');
        }

        if(this.head.next === null){
            lengthCounter ++;
            return lengthCounter;
        }

        let current = this.head;

        while(current.next){
            lengthCounter ++;
            current = current.next;
        }

        if(current.next === null){
            lengthCounter ++;

            console.log(lengthCounter);
            return lengthCounter;
        }

        return lengthCounter;
    }
//constructor end
}

module.exports = LinkedList;