'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = root;
        this.max = 0;
    }

    inOrder(root){
        inOrder(root.left);
        console.log(root);
        inOrder(root.right);
    }

    preOrder(root){
        console.log(root);
        preOrder(root.left);
        preOrder(root.right);
    }

    postOrder(root){
        postOrder(root.left);
        postOrder(root.right);
        console.log(root);
    }

<<<<<<< HEAD
    findMax(root){

        if(root === null) {
            return this.max;
        };

        if(root.value>this.max){
            this.max = root.value;
        };
        this.findMax(root.left);
        this.findMax(root.right);
=======
    findMax(tree){
        if(!tree.root){
            return;
        }
        let highValue = tree.root.value;
        
        function recurse(node) = {
            if(node.value>highValue){
                highValue=node.value;
            }
        }
        if (node.left) {recurse(node.left)}
        if (node.right) {recurse(node.right)}
        recurse(tree);
        
        return highValue;
        
        // if(root>this.max){
        //     this.max = root.value;
        // };
        // this.findMax(root.left);
        // this.findMax(root.right);
>>>>>>> dca7d91d807e8fb52023b5f46bed6f55b483db99
        // this.findMax(inOrder(root));
    }
}

module.exports = BinaryTree;