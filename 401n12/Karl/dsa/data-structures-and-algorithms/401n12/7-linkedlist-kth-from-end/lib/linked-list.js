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
        newNode.next = this.head;

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

    kthFromEnd(k) {
        let current = this.head;
        let counter = 0;

        // add check that determines if k is 0 or less, or if it's bigger than the linked list
        // otherwise currently, bigger/smaller #s return 4
        if (!this.head) {
            throw new Error('__ERROR__ List is empty!')
        }
        while (current.next) {
            let pointer = this.head;
            current = current.next;
            counter++;
            if (current.next === null) {
                if (counter === k){
                    // pointer = this.head;
                    while (pointer.next) {
                        pointer = pointer.next;
                    }
                }
                // if statement of counter !===k, counter++
                // start pointer when counter === k, when it is k behind current
                console.log(pointer.value);
                return pointer.value;
            }
        }
        return null; // is this necessary?
    }

    // Alistair's study session code
    kthEndAB (k) {
        let counter = 1;
        let current = this.head;

        while (current.next) {
            current = current.next;
            counter++;
        }

        let runK = counter-k; // Ryan - recommend calling runK target instead
        if (runK === 0) {
            return this.head.value;
        } else if (runK < 0) {
            return 'K too big!';
        } else {
            counter = 0;
            current = this.head;
            while (counter < runK) {
                current = current.next;
                counter++;
            }
            return current.value;
        }
    }

    kthFromEndArray (k) {
        let kArray = [];
        let current = this.head;

        while (current) { // Ryan - using current is better than current.next, because otherwise the final node will be ignored
            kArray.push(current.value); // O(n) here on push, O(n)Space for how many elements in the array
            // Kris - make sure to define N in an interview setting
            current = current.next;
        }
        return kArray[kArray.length-k];
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