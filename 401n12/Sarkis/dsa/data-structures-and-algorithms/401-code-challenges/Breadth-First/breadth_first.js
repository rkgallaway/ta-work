'use strict';

// node class

class BST {
    constructor() {
        this.root = null;
    }

    // add node to tree

    addNode(value) {
        let newNode = {value, left: null, right: null};

        // set root if absent

        if (this.root == null) {
            this.root = newNode;
            return;
        }
    }
}