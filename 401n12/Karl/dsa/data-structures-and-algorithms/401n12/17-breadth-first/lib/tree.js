'use strict';

const Node = require('./node');
const Queue = require('./queue');

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    inOrder(node){
        inOrder(node.left);
        console.log(node);
        inOrder(node.right);
    }

    preOrder(node){
        console.log(node);
        preOrder(node.left);
        preOrder(node.right);
    }

    postOrder(node){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node);
    }
    breadthFirst() {
        let queue = new Queue();
        let output = '';
        let str = queue.dequeue();

        if (this.root){

            queue.enqueue(this.root);
            while(queue.peek()){ // accidentally made an infLoop here - need a different parameter
                if(this.left){
                    queue.enqueue(this.left);
                }
                if(this.right){
                    queue.enqueue(this.right);
                }
                // output += queue.dequeue() + ' ,';
                queue.dequeue();
                // console.log(output);
            }
        }
    }
    // from 0527 study session
    // Ryan - remember to mention if you're going in a direction (like w/ using Arrays) since it's a direction you know
    breadthArray() {
        let arrayBT = [];
        let queue = new Queue();
        queue.enqueue(this.root);
        while (queue.peek()) {
            arrayBT.push(queue.front.value); // push top array
            if(this.left){ // check left
                queue.enqueue(this.left);
            }
            if(this.right){ // check right
                queue.enqueue(this.right);
            }
            queue.dequeue(); // dequeue
        }
        return arrayBT;
    }
}

module.exports = BinaryTree;