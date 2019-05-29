'use strict';

const Node = require('./lib/newNode');
const Stack = require('./lib/newStack');

class SudoQ {
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value){
        this.stack1.pushToStack(value);
    }
    dequeue(){
        while(this.stack1.top){
            this.stack2.pushToStack(this.stack1.popOff());
        }
        let ref;
        if(this.stack2.top){
           ref = this.stack2.popOff();
        }
        while(this.stack2.top){
            this.stack1.pushToStack(this.stack2.popOff());
        }
        return ref;
    }
    peek(){
        if(this.stack1.top){
            return this.stack1.top.value;
        }else{
            return 'Q empty';
        }
    }
}

module.exports = SudoQ;