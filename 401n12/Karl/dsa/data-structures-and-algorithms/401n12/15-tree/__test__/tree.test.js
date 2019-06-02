'use strict';

const BST = require('../lib/bst');
const Node = require('../lib/node');
const Tree = require('../lib/tree');

/*
Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
Can successfully add a left child and right child to a single root node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal
 */
let tree = new Tree;
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);

tree.root = a;
a.left = b; a.right = c;
b.left = d; b.right = e;
c.left = f;

let douglas = new Tree;
let leaf = new Node(10);
douglas.root = leaf;

describe('Binary Trees',() => {
    it('Can successfully instantiate an empty tree',() => {
        let conifer = new Tree;
        expect(conifer.root).toBe(null);

    });
    it('Can successfully instantiate a tree with a single root node',() => {
        expect(douglas.root.value).toBe(10);
    });
    it('Can successfully add a left child and right child to a single root node',() => {
        let lLeaf = new Node (5);
        let rLeaf = new Node (8);
        leaf.left = lLeaf;
        leaf.right = rLeaf;
        expect(douglas.root.left.value).toBe(5);
        expect(douglas.root.right.value).toBe(8);
    });
    it('Can successfully return a collection from a preorder traversal',() => {
        // console.log(tree.preOrder());
        expect(tree.preOrder()).toStrictEqual([1, 2, 4, 5, 3, 6]);
    });
    it('Can successfully return a collection from an inorder traversal',() => {
        // console.log(tree.inOrder());
        expect(tree.inOrder()).toStrictEqual([4, 2, 5, 1, 6, 3]);
    });
    it('Can successfully return a collection from a postorder traversal',() => {
        console.log(tree.postOrder());
        expect(tree.postOrder()).toStrictEqual([4, 5, 2, 6, 3, 1]);
    });
});