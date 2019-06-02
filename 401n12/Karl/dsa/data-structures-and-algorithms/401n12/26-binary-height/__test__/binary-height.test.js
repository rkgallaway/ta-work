'use strict';

/*
“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)
 */

const Node = require('../lib/node');
const BinaryTree = require('../lib/binarytree');

describe('Binary Tree Height', () => {

    // adding tree nodes
    const a = new Node(2);
    const b = new Node(7);
    const c = new Node(5);
    const d = new Node(2);
    const e = new Node(6);
    const f = new Node(9);
    const g = new Node(4);
    // create tree
    const tree = new BinaryTree(a);
    // console.log(tree);
    // setting node positioning
    tree.root=a;
    a.left = b; a.right = c;
    b.left = d; b.right = e;
    c.right = f;
    f.left = g;

    it('Returns the height of the tree', () => {
        expect(tree.binaryHeight(a)).toEqual(4);
    });
    it('Displays the Binary Tree root as expected', () => {
        console.log(tree);
        expect(tree.root).toEqual(5);
    })
});