'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    inOrder(root){
        // left root right, using recursion
        inOrder(root.left);
        inOrder(root.value);
        inOrder(root.right);
    }

    preOrder(root){
        // root left right
    }

    postOrder(root){
        // left right root
    }

    binaryHeight(tree, height) {
        // use Math.max w/ height + 1/height++ on return when recursing

        if (tree === null){
            return 0;
        } else {
            return Math.max((tree.binaryHeight(node.left, height+1)), (tree.binaryHeight(node.right, height+1)));
        }

        return height;
    }
}

module.exports = BinaryTree;