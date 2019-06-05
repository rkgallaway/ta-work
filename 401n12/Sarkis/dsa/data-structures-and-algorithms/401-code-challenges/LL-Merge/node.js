'use strict';

function Node(value, next = null) {
    this.value = value;
    this.next = next;
};

module.exports = Node;