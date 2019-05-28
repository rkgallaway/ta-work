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
    let obj=newlinkedList(10);
    obj.array.unshift(5);
    obj.linkedList.insertAtHead(5);
    it('adds a new node to the start of the linked list', ()=>{
        expect(areSame(obj)).toEqual(true);
    });
});

describe (`Kth from end`, ()=> {

    let k = 3;
    let obj = newlinkedList(10);
    console.log (obj.array);
    let lrv = obj.linkedList.kthFromEnd(k).value;
    let arv = obj.array[obj.array.length-(k)];
    console.log (arv,lrv);
    it ('can return a value that is k indexes back from the end of a linked list',()=>{
        expect(arv===lrv).toEqual(true);
    })
});
