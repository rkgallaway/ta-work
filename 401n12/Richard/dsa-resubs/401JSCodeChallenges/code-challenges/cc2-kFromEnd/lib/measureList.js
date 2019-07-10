'use strict';
const Node = require('./newNode');
const LinkedList = require('./linked-list');

module.exports = () => {
    let acc = 0;
    let current = this.head;
    while(current.next){
        acc++;
        current = current.next;
    }
    return acc;
}