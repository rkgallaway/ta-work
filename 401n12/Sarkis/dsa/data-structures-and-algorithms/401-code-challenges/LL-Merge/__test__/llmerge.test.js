'use strict';

// Sarkis - Import constructor properties/methods
const LlMerge = require('../llmerge');

const linkedList1= new LinkedList();
linkedList1.insertAtHead(3);
linkedList1.insertAtHead(2);
linkedList1.insertAtHead(1);
const linkedList2= new LinkedList ();
linkedList2.insertAtHead('c');
linkedList2.insertAtHead('b');
linkedList2.insertAtHead('a');


describe('test if lists merge', () => {
    test('testing that method zips two lists together', () => {
        let mergedList = zipper(linkedList1, linkedList2);

        expect(mergedList.value).toEqual(1);
        expect(mergedList.next.value).toEqual('a');
        expect(mergedList.next.next.value).toEqual(2);
    })
})