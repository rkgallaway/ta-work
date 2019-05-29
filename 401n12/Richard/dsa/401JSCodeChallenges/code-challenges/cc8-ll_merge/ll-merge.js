'use strict';

const Node = require('./lib/newNode');
const LinkedList = require('./lib/linkedList');

function mergeLL(ll1, ll2){
    if(ll1.head && ll2.head){
        let ll1Cur = ll1.head;
        let ll2Cur = ll2.head;
        while(ll1Cur && ll2Cur){
            let ref = ll1Cur.next;
            let ref2 = ll2Cur.next;
            ll1Cur.next = ll2Cur;
            if(ref){
                ll2Cur.next = ref;
            }
            ll1Cur = ref;
            ll2Cur = ref2;
        }
    }else {
        return 'Either 1 or both linked lists are empty';
    }
}

module.exports = mergeLL;