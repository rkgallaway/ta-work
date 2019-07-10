'use strict';

const Node = require('./newNode');

class BST {
    constructor(givenRoot) {
        this.root = givenRoot ? new Node(givenRoot) : null;
        // if(!givenRoot){
        //     this.root = null;
        // }else{
        //     this.root = new Node(givenRoot);
        // }
    }
    //==============
    insertNodeHelper(node, value){
        if(!node){
          return this.root = new Node(value);
        }
        if(value < node.value){
            node.left ? this.insertNodeHelper(node.left, value) : node.left = new Node(value);
        }else if(value > node.value){
            node.right ? this.insertNodeHelper(node.right, value) : node.right = new Node(value);
        }
        return;
    };
    insertNode(value){
       if(value){
           this.insertNodeHelper(this.root, value);
       }else{
           return 'Must insert value';
       }
        //value ? this.insertNodeHelper(this.root, value) : 'Must insert value';
    }
}

module.exports = BST;