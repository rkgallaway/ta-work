'use strict';

const Node = require('../lib/node');
const Queue = require('../lib/queue');
const BinaryTree = require('../lib/tree');
// const breadthFirst = require('../lib/breadth-first');

/*
# Unit Tests
1. “Happy Path” - Expected outcome
2. Expected failure
3. Edge Case (if applicable/obvious)
 */

describe('Breadth-First Traversal', () => {

    const tree = new BinaryTree(2);
    // console.log(tree);
    // adding tree nodes
    const a = new Node(7);
    const b = new Node(5);
    const c = new Node(2);
    const d = new Node(6);
    const e = new Node(9);
    const f = new Node(5);
    const g = new Node(11);
    const h = new Node(4);
    // setting node positioning
    tree.left = a;
    tree.right = b;
    a.left = c; a.right = d;
    b.right = e;
    d.left = f; d.right = g;
    e.left = h;

    it('HAPPY PATH: Can successfully output breadth first traversal.', () => {
        // expect(tree.breadthFirst()).toEqual('2, 7, 5, 2, 6, 9, 5, 11, 4 ');
        expect(tree.breadthArray()).toEqual('2, 7, 5, 2, 6, 9, 5, 11, 4 ');
        // console.log(JSON.stringify(breadthFirst(tree)));
    });
    xit('Expected Flailure: The given tree is not null, test is expecting null.', () => {
        expect(breadthFirst()).toBeNull;
    });
    xit('Edge Case: Will not take in any other data structures other than Binary Trees.', () => {
        let testQ = new Queue();
        expect(breadthFirst()).toBeFalsy;
    })
});