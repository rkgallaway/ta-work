'use strict';

const Node = require('../lib/node');
const LinkedList = require('../lib/linked-list');

const faker = require('faker');


let newlinkedList=function(length){
    let arr =[];
    let linked = new LinkedList();
    let first = faker.random.number();
    arr.push(first);
    linked.head=new Node(first);
    let current = linked.head;
    for (let i = 0; i < length; i++){
        let rand = faker.random.number();
        arr.push(rand);
        current.next=new Node(rand);
        current = current.next;
    }
    return {array:arr, linkedList:linked};
};

function areSame(obj){
    let strLL='';
    let strArr=obj.array.join(', ');
    let current = obj.linkedList.head;
    while (current.next){
        strLL+=current.value+', ';
        current=current.next;
    }
    strLL+=current.value;
    console.log ('linked: '+strLL, 'Array: '+strArr);
    return (strLL===strArr);
}

describe('append', ()=>{
    let obj=newlinkedList(10);
    obj.array.push(5);
    obj.linkedList.append(5);
    it('adds a new node to the end of the linked list', ()=>{
        expect(areSame(obj)).toEqual(true);
    });
});

describe('insertAtHead', ()=>{
    let obj=newlinkedList(10);
    obj.array.unshift(5);
    obj.linkedList.insertAtHead(5);
    it('adds a new node to the start of the linked list', ()=>{
        expect(areSame(obj)).toEqual(true);
    });
});

describe('insertbefore', ()=>{
    let testLinked=new LinkedList();
    let testArr= [1,3,5,7,9,11];
    for (let i of testArr){
        testLinked.append(i);
    }
    console.log(testLinked.insertBefore(11,10));
    testArr[5]=10;
    testArr[6]=11;
    let obj = newlinkedList(1);
    obj.array=testArr;
    obj.linkedList=testLinked;
    it('can insert a node before the node of a specified value', ()=>{
        expect(areSame(obj)).toEqual(true);
    });
});

describe('insertAfter', ()=>{
    let testLinked=new LinkedList();
    let testArr= [1,3,5,7,9,11];
    for (let i of testArr){
        testLinked.append(i);
    }
    console.log(testLinked.insertAfter(11,10));
    testArr[6]=10;
    let obj = newlinkedList(1);
    obj.array=testArr;
    obj.linkedList=testLinked;
    it('can insert a node before the node of a specified value', ()=>{
        expect(areSame(obj)).toEqual(true);
    });
});
