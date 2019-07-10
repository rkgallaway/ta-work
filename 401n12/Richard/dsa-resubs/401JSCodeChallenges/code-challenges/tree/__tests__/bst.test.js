'use strict';

const BST = require('../lib/newBST.js');
const Node = require('../lib/newNode.js');

describe('testing BST', ()=>{
    let emptyTree = new BST();
    test('can call empty tree', ()=>{
        expect(emptyTree.root).toEqual(null);
    });
    test('errors', ()=>{
        expect(emptyTree.insertNode()).toEqual('Must insert value');
    });
    let emptyTree2 = new BST();
    emptyTree2.insertNode(10);
    test('can add a root', ()=>{
        expect(emptyTree2.root.value).toEqual(10);
    });
    let newTestTree = new BST(20);
    test('start new tree', ()=>{
        expect(newTestTree.root.value).toEqual(20);
    });
    newTestTree.insertNode(10);
    newTestTree.insertNode(21);
    newTestTree.insertNode(420);
    test('insert works correctly', ()=>{
        expect(newTestTree.root.left.value).toEqual(10);
        expect(newTestTree.root.right.value).toEqual(21);
        expect(newTestTree.root.right.right.value).toEqual(420);
    });
});