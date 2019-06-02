'use strict';

const Node = require('../lib/node');
const BinaryTree = require('../lib/tree');
/*
# Unit Tests
1. “Happy Path” - Expected outcome
2. Expected failure
3. Edge Case (if applicable/obvious)
 */

describe('BINARY TREE: Finding Maximum Value' , () => {

    // adding tree nodes
    const a = new Node(2);
    const b = new Node(7);
    const c = new Node(5);
    const d = new Node(2);
    const e = new Node(6);
    const f = new Node(9);
    const g = new Node(5);
    const h = new Node(11);
    const i = new Node(4)
    // create tree
    const tree = new BinaryTree(a);
    // console.log(tree);
    // setting node positioning
    a.left = b; a.right = c;
    b.left = d; b.right = e;
    e.left = g; e.right = h;
    c.right = f;
    f.left = i;
    // console.log(tree.root)

    it('HAPPY PATH: Is able to find the maximum value in the tree.', () => {
        // console.log(tree.findMax());
        expect(tree.findMax(a)).toEqual(11);
    });
    // it('Expected Flailure', () => {
    //     expect().;
    // });
    // it('Edge Case', () => {
    //     expect().;
    // });
});