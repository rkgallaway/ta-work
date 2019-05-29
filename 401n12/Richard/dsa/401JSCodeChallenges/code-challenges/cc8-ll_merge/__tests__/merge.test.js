'use strict';

const Node = require('./../lib/newNode');
const LinkedList = require('./../lib/linkedList');
const mergeLL = require('./../ll-merge');

describe('make stuff', () =>{
    test('a node', ()=>{
        expect(new Node(69)).toEqual({ value: 69, next: null });
    });
    test('a ll', () => {
        expect(new LinkedList()).toEqual({ head: null });
    });
});

describe('mergeLL tests', () => {
    let LLAlpha = new LinkedList();
    let LLOmega = new LinkedList();
    LLOmega.insertAtTail('gonna still break');
    test('empty linked lists throws an error', ()=> {
        expect(mergeLL(LLAlpha, LLOmega)).toEqual('Either 1 or both linked lists are empty');
    });
    let LLOne = new LinkedList();
    let LLTwo = new LinkedList();
    LLOne.insertAtTail('a');
    LLOne.insertAtTail('b');
    LLOne.insertAtTail('c');
    LLTwo.insertAtTail('1');
    LLTwo.insertAtTail('2');
    LLTwo.insertAtTail('3');
    mergeLL(LLOne, LLTwo);
    test('when the linked lists are of equal lengths', () => {
        expect(LLOne.head.next.value).toEqual('1');
        expect(LLOne.head.next.next.value).toEqual('b');
        expect(LLOne.head.next.next.next.value).toEqual('2');
    });
    let testLL1 = new LinkedList();
    let testLL2 = new LinkedList();
    testLL1.insertAtTail('ro');
    testLL1.insertAtTail('sham');
    testLL1.insertAtTail('bo');
    testLL2.insertAtTail('you lose');
    mergeLL(testLL1, testLL2);
    test('test when the first ll is longer', () => {
        expect(testLL1.head.value).toEqual('ro');
        expect(testLL1.head.next.value).toEqual('you lose');
        expect(testLL1.head.next.next.next.value).toEqual('bo');
    });
    let testLLA = new LinkedList();
    let testLLB = new LinkedList();
    testLLA.insertAtTail('smite');
    testLLA.insertAtTail('you');
    testLLB.insertAtTail('club');
    testLLB.insertAtTail('will');
    testLLB.insertAtTail('enjoy');
    testLLB.insertAtTail('it');
    mergeLL(testLLA, testLLB);
    test('when the second LL is longer', () => {
        expect(testLLA.head.value).toEqual('smite');
        expect(testLLA.head.next.value).toEqual('club');
        expect(testLLA.head.next.next.value).toEqual('you');
        expect(testLLA.head.next.next.next.value).toEqual('will');
        expect(testLLA.head.next.next.next.next.value).toEqual('enjoy');
        expect(testLLA.head.next.next.next.next.next.value).toEqual('it');
    });
});