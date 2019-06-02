'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.next = null;
    }
}

module.exports = Node;