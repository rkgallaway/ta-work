'use strict';

const Node = require('./node');

class Tree {
    constructor(){
        this.root = null;
    }

    preOrder(){
        // + 0528 study session recursion
        let nodes = [];
        function _walk(node){

            // base case (the exit)
            if (node === null){return;}

            nodes.push(node.value);

            if(node.left){
                _walk(node.left);
            }
            if(node.right){
                _walk(node.right);
            }
        }
        _walk(this.root);

        // console.log(root);
        // preOrder(this.left);
        // preOrder(this.right);
        return nodes;
    }

    inOrder(){
        let nodes = [];

        function _walk(node){

            if(node === null){return;}

            if(node.left){
                _walk(node.left);
            }
            nodes.push(node.value);
            if(node.right){
                _walk(node.right);
            }
        }

        _walk(this.root);

        return nodes;
    }

    postOrder(){
        let nodes = [];

        function _walk(node){

            if(node === null){return;}

            if(node.left){
                _walk(node.left);
            }
            if(node.right){
                _walk(node.right);
            }
            nodes.push(node.value);
        }

        _walk(this.root);

        return nodes;
    }
}

/*
SAMPLE TREE

let tree = new Tree;
let a = new Node(a);
let b = new Node(b);
let c = new Node(c);
let d = new Node(d);
let e = new Node(e);
let f = new Node(f);

tree.root = a;
a.left = b; a.right = c;
b.left = d; b.right = e;
c.left = f;

 */
module.exports = Tree;