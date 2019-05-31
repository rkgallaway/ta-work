'use strict';

let LinkedList = require('../linked-list.js');

describe('Linked List tests', () => {

  it('Can successfully instantiate an empty linked list', ()=> {
    let list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list instanceof LinkedList).toBeTruthy();
  });
  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
  });
  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    expect(list.includes(1)).toBeFalsy();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(1)).toBeTruthy();
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes(3)).toBeTruthy();
    expect(list.includes(4)).toBeFalsy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () =>{
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.includes(4)).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    let correctResponse = [3, 2, 1];
    expect(list.print()).toBeNull();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.print()).toEqual(correctResponse);
  });
});

/////////////////////////////Code Challenge 6 /////////////////////////////

describe('Linked List tests continued - 401 js Code Challenge 6', () => {
  it('Can successfully add a node to the end of the linked list', ()  => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head.value).toEqual(1);
    expect(list.print()).toEqual([1, 2, 3, 4]);
  });
  it('Can successfully insert a node before a node located in the middle of a linked list', () =>{
    let list = new LinkedList();
    expect(list.insertBefore(2, 22)).toEqual('Exception: value not found, newValue not inserted');
    list.append(1);
    list.append(3);
    list.append(3);
    list.append(2);
    list.append(3);
    list.insertBefore(2, 4);
    expect(list.print()).toEqual([1, 3, 3, 4, 2, 3]);
  });
  it('Can successfully insert a node before the first node of a linked list', () =>{
    let list = new LinkedList();
    expect(list.insertBefore(2, 22)).toEqual('Exception: value not found, newValue not inserted');
    list.append(1);
    list.insertBefore(1, 11);
    expect(list.head.value).toEqual(11);
  });
  it('Can successfully insert a node after a node located in the middle of a linked list', () =>{
    let list = new LinkedList();
    expect(list.insertAfter(2, 22)).toEqual('Exception: value not found, newValue not inserted');
    list.append(1);
    list.append(3);
    list.append(3);
    list.append(2);
    list.append(3);
    list.insertAfter(2, 4);
    expect(list.print()).toEqual([1, 3, 3, 2, 4, 3]);
  });
  it('Can successfully insert a node after the last node of a linked list', () =>{
    let list = new LinkedList();
    expect(list.insertBefore(2, 22)).toEqual('Exception: value not found, newValue not inserted');
    list.append(1);
    list.insertAfter(1, 11);
    expect(list.head.next.value).toEqual(11);
  });
  it('Can successfully delete node if the value is in the head', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.deleteNode(1);
    expect(list.head.value).toEqual(2);
  });
  it('Can successfully delete node if the value is in the middle of list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.deleteNode(2);
    expect(list.print()).toEqual([1, 3]);
  });
  it('Can successfully delete node if the value is at the end of list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.deleteNode(4);
    expect(list.print()).toEqual([1, 2, 3]);
  });
});