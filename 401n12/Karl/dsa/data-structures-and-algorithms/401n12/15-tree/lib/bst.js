'use strict';

const Node = require('./node');
const Tree = require('./tree');

class BST extends Tree {
    constructor(){
        this.root = null;
    }

    add(node, value){
        node = new Node;
        value = node.value;

        if(!this.root){
            this.root = value;
            return;
        }
        let current = this.root;

        if (node.value > current.value) {
            if(!current.right){
                current.right = node;
            }

            current = current.right;
        } else {
            if(!current.left){
                current.left = node;
            }

            current = current.left;
        }
    }

    contains(value){
        if(!this.root){return null;}

        if(this.root.value === value){
            return true;
        }

        let current = this.root;

        while(current.value !== value){
            if (current === null) {
                return null;
            } else if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            } else if (value === current.value) {
                return true;
            }
        }
    }
}

module.exports = BST;