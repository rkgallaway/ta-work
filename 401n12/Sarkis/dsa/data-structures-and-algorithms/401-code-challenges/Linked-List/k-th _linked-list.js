'use strict';

const LinkedList = require('../LL-Methods/linked-list')

const list = new newLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.insertAfter(1, 'a');
list.append(4);

console.log(list);

class newLinkedList  extends LinkedList {
    returnNodeValue() {

        let following = this.head;
        let current = this.head;
        let previous= null;
        let counter = -1;

        while(this) {
            following = following.next;
            current.next = previous;
            previous = current;
            current = following;
            counter++;
            if(following == null) {
                break;
            }
        }
    }
}

list.returnNodeValue();





