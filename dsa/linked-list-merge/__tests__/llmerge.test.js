'use strict';

const linkedList = require('../../linked-list/linked-list.js');
const mergeList = require('../llmerge.js');

describe('mergeList tests - 401js code challenge 8', () => {
  it('merges two lists of same length as expected', () => {
    let listOne = new linkedList();
    listOne.append(1);
    listOne.append(2);
    listOne.append(3);
    let listTwo = new linkedList();
    listTwo.append('a');
    listTwo.append('b');
    listTwo.append('c');
    let zippedList = mergeList(listOne, listTwo);
    expect(zippedList.print()).toEqual([1, 'a', 2, 'b', 3, 'c']);
  });
  it('merges two lists of different length and list one is shorter than list two', () => {
    let listOne = new linkedList();
    listOne.append(1);
    let listTwo = new linkedList();
    listTwo.append('a');
    listTwo.append('b');
    listTwo.append('c');
    let zippedList = mergeList(listOne, listTwo);
    expect(zippedList.print()).toEqual([1, 'a', 'b', 'c']);
  });
  it('merges two lists of different length and list one is longer than list two', () => {
    let listOne = new linkedList();
    listOne.append(1);
    listOne.append(2);
    listOne.append(3);
    let listTwo = new linkedList();
    listTwo.append('a');
    let zippedList = mergeList(listOne, listTwo);
    expect(zippedList.print()).toEqual([1, 'a', 2, 3]);
  });
  it('only one arguement given', () => {
    let listOne = new linkedList();
    listOne.append(1);
    listOne.append(2);
    listOne.append(3);
    let zippedList = mergeList(listOne);
    expect(zippedList).toEqual('2 lists required');
  });
});