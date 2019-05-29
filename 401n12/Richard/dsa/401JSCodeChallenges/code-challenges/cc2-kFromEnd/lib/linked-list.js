'use strict';

const Node = require('./newNode');
const measureList = require('./measureList');

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
    valueFromEnd(value){
        const reg = new RegExp(/\d+/g);
        if(reg.test(value)){
            let acc = 0;
            let current = this.head;
            while(current.next){
                acc++;
                current = current.next;
            }
            let searchIndex = acc - value;
            if(searchIndex >= 0){
                let searchResult = this.head;
                for(let i = 0; i < searchIndex; i++){
                    searchResult = searchResult.next;
                }
                return searchResult.value;
            }else{
                return 'Error-the linked list is too short';
            }
        }else{
            return 'must input a number';
        }
    }
}

module.exports = LinkedList;