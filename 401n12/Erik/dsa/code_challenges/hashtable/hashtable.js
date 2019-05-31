'use strict';

class HashTable {
  constructor(size = 32) {
    this.bucket = Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  add(key, val) {
    let index = this.hash(key);

    if(!this.bucket[index]) {
      this.bucket[index] = [ ];
    }

    this.bucket[index].push([key, val]);

    return index;
  }

  get(key) {
    let index = this.hash(key);
    let result = [];

    if(!this.bucket[index]) return null;

    if(this.bucket[index][0][0] === key) {
      for(let i = 0; i < this.bucket[index].length; i++) {
        result.push(this.bucket[index][i][1]);
      }
    }
    return result;
  }

  contain(key) {
    let index = this.hash(key);

    if(this.bucket[index][0][0] === key) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = HashTable;
