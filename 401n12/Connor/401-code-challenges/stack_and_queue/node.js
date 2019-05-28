'use-strict';

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
module.exports.createNode=function(val){
    return new Node(val)
};