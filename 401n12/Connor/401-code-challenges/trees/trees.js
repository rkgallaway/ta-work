'use strict';
const node = require ('./node');
module.exports.Tree= class{
    constructor(){
        this.root=null;
    }
    //this insertion method always ensures that we will have a tree that is in attempt to keep itself balanced.
    insert(value){
        let val = new node.TreeNode(value);
        if (this.root===null ){
            this.root=val;
            return true;
        }else {
            let q = [];
            q.unshift(this.root);
            while (q[q.length-1] !== null){
                if(!q[q.length-1].left){
                    q[q.length-1].left = val;
                    return true;
                }else{
                    q.unshift(q[q.length-1].left)
                }
                if(!q[q.length-1].right){
                    q[q.length-1].right=val;
                    return true;
                }else{
                    q.unshift(q[q.length-1].right)
                }
                q.pop();
            }
        }
    }
    
    breadthFirst(test=false){
        let returns=[];
        let q = [this.root];
        if (!this.root) {
            return ('Empty tree');
        } else {
            while (q.length!==0){
                if(q[q.length-1].left){
                    q.unshift(q[q.length-1].left)
                }
                if(q[q.length-1].right){
                    q.unshift(q[q.length-1].right)
                }
                returns.push(q.pop().value);
            }
            return returns;
        }
    }

    max(current=this.root){
        if(!this.root){
            return null;
        }
        if (!current.left&&!current.right){
            return (current.value)
        }else{
            let l = null;
            let r = null;
            if (current.left){
               l = this.max(current.left);
            }
            if (current.right){
                r = this.max(current.right);
            }
            if (l<r){
                l=r;
            }
            if(l<current.value){
                return current.value;
            }
            else{
                return l;
            }
        }
    }
};
