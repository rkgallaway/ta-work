'use strict';

const Node = require('./node');

/* SUMMARY

Variables
    HEAD

Behavior
    Insert Values ->
    Remove Values
    Interate/Loop
 */

class LinkedList{
    constructor(){
        this.head = null;
    }


    insertAtHead(value){
        const newNode = new Node(value);
        // 1 - Connects newNode to list
        newnode.next = this.head;

        // 2 - reassigning to HEAD
        this.head = newNode;
    }

    insertAtTail(value){
        const neNode = newNode(value);

        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head

        while(current.next) {
            // While we can move to the right
            current = current.next
        }
        // Once the while loop is over, then we're at the end
        // current.next is equal to null right now
        // next part makes a new connection
        current.next = newNode;
    };

    find(value){
        if (!this.head) {
            throw new Error('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            return this.head;
        }

        // looping over linked list
        let current = this.head;
        while (current.next) {
            //checking if we find the value
            if (current.next.value === value) {
                return current.next;
            }
            current = current.next;
        }
        // if we're here, we didn't find anything
        return null;
    }

    append(value){

    }

    insertBefore(value, newVal){

    }

    insertAfter(value, newVal){

    }
}

module.exports = LinkedList;