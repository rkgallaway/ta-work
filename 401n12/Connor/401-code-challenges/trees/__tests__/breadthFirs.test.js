'use strict';
const tree= require('../trees.js');

describe('breadth first',()=>{
    it('can add a new node on to the tree',()=>{
        let x=new tree.Tree;
        expect(x.insert(5)).toEqual(true);
    });
    it('can add multiple values tot the tree',()=>{
        let exTree = new tree.Tree;
        let vals=[1,2,3,4,5,6,7,8,9,0];
        for (let i in vals){
            exTree.insert(vals[i]);
        }
        expect(exTree.insert(5)).toEqual(true);
    });
    it('can print out all values in a tree breadth first',()=>{
        let exTree = new tree.Tree;
        let vals=[1,2,3,4,5,6,7,8,9,0];
        for (let i in vals){
            exTree.insert(vals[i]);
        }
        expect(exTree.breadthFirst(true)).toEqual(vals);
    });
    it('can find the greatest value in the tree',()=>{
        let exTree = new tree.Tree;
        let vals=[1,2,22,4,5,6,7,8,9,0];
        for (let i in vals){
            exTree.insert(vals[i]);
        }
        expect(exTree.max(exTree.root)).toEqual(22);
    });
    it('handles an empty tree',()=> {
        let exTree = new tree.Tree;
        expect(exTree.max()).toEqual(null);
    });
    it('handles empty trees',()=>{
        let exTree= new tree.Tree;
        expect(exTree.breadthFirst(true)).toEqual('Empty tree');
    })

});
