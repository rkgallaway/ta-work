'use strict';

function mergeList(listOne, listTwo){
  if(arguments.length !== 2){
    return '2 lists required';
  }

  let currentOne = listOne.head;
  let currentTwo = listTwo.head;
  let temp;

  while(currentOne.next && currentTwo.next){
    let nextOne = currentOne.next;
    let nextTwo = currentTwo.next;
    currentOne.next = currentTwo;
    currentTwo.next = nextOne;
    currentOne = nextOne;
    currentTwo = nextTwo;
  }
  if(currentOne.next && !currentTwo.next){
    currentTwo.next = currentOne.next;
    currentOne.next = currentTwo;
    return listOne;
  }
  currentOne.next = currentTwo;
  if(currentTwo.next){
    currentOne.next = currentTwo;
  }
  return listOne;
}

module.exports = mergeList;