'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let current = this.head;
    this.head = node;
    this.head.next = current;
    return this;
  }

  includes(value){
    if(!this.head){
      return false;
    }
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print(){
    if(!this.head){
      return null;
    }
    let nodes = [];
    let current = this.head;
    while(current){
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    return this;
  }

  insertBefore(value, newValue){
    if(!this.includes(value)){
      return 'Exception: value not found, newValue not inserted';
    }
    if(this.head.value === value){
      this.insert(newValue);
      return this;
    }
    let node = new Node(newValue);
    let current = this.head;
    while(current.next){
      if(current.next.value === value){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue){
    if(!this.includes(value)){
      return 'Exception: value not found, newValue not inserted';
    }
    let node = new Node(newValue);
    let current = this.head;
    while(current){
      if(current.value === value){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
  }

  deleteNode(value){
    if(this.head.value === value){
      this.head = this.head.next;
      return this;
    }
    let current = this.head;
    while(current.next){
      if(current.next.value === value){
        current.next = current.next.next;
        return this;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;