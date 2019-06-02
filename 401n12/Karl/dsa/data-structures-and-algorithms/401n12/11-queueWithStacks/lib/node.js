'use strict'

class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
    pointer(node){
        this.next = node;
    }
}

module.exports = Node;