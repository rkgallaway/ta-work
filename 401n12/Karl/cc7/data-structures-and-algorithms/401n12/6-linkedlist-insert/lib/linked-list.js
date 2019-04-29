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
// to do 3/20
//    ran base code, insertHead, append and Tail works, as well as find.
    // insertAfter borks, need to check insertBefore
// to do 3/10
// clean up use of this.head - looks like i'm using it wrong
// double-check logic around inserts - re-read CF LL article?

    insertAtHead(value){
        const newNode = new Node(value);
        // 1 - Connects newNode to list
        newNode.next = this.head;

        // 2 - reassigning to HEAD
        this.head = newNode;
        console.log('Node added to head, value ' + value);
    }

    insertAtTail(value){
        const newNode = new Node(value);

        // if there isn't a head, set our newNode as the head.
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next) {
            // While we can move to the right
            current = current.next;
            // console.log(current);
        }
        // Once the while loop is over, then we're at the end
        // current.next is equal to null right now
        // next part makes a new connection
        current.next = newNode;
        console.log('This one should show the new Node:' + JSON.stringify(current.next));
        console.log(`Added ${value} to tail.`)
    };

    find(value){
        if (!this.head) {
            throw new Error('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            return 'We found ' + this.head +'!';
        }

        // looping over linked list
        let current = this.head;
        while (current.next) {
            //checking if we find the value
            if (current.next.value === value) {
                return current.next;
            }
            current = current.next;
            console.log('Find found ' + value);
        }
        // if we're here, we didn't find anything
        return null;
    }

    append(value){
    // inserts new node with given value to end of list
        const newNode = new Node (value);
        let current = this.head;
        // if list is empty, make a new Node
        if (this.head === null) {
            this.head = newNode;
        } else {
            // otherwise, this.head goes through the list
            // current = this.head;
            while (current.next) {
                current = current.next;
            }
            // ... and add a node
            current.next = newNode;
            console.log('Appended ' + value);
        }
    }

// might be an overall issue with assigning newNode - need to make sure that the nodes before point to the correct .next

    insertBefore(value, newVal){
        // inserts new node with given newValue before Value
        let newNode = new Node(newVal);
        let current = this.head;
        if(!this.head) {
            throw new Error ('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            //unsure about logic here
            // current = newNode;
            current.next = this.head;
            current = newNode;
            return 'New node added before.';
        } else {
            while (current.next){
                if (current.next.value === value){
                    console.log('Current before insertBefore:' + JSON.stringify(current));
                    newNode.next = current.next;
                    current.next = newNode;
                    console.log('Current after insertBefore:' + JSON.stringify(current));
                    return `New node with value ${value} inserted before.`;
                }
                current = current.next;
            }
        }
    }

    insertAfter(value, newVal){
    // inserts new node with given newValue after Value
        const newNode = new Node (newVal);
        let current = this.head;
        if(!this.head) {
            throw new Error ('__ERROR__ List is empty!');
        }
        if (this.head.value === value) {
            // current = this.head;
            current.next = newNode;
            return 'New node inserted after.';
        } else {
        // otherwise, current goes through the list
        //     current = this.head;
            while (current.next) {
                if (current.next.value === value){
                    current = current.next;
                    current.next = newNode;
                    return 'New node inserted after.';
                }
                current = current.next;
            }
        }
    }
    printEntireList() {
        if (!this.head) {
            throw new Error('__ERROR__ List is empty!');
        }
        // looping over linked list
        let current = this.head;
        while (current.next) {
            //checking if we find the value
            console.log('Node: Value, ' + current.value + '; Next: ' + current.next);
            current = current.next;
        }
        // if we're here, we didn't find anything
        return null;
    }
}

module.exports = LinkedList;