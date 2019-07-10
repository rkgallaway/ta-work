'use strict';

class Hashmap {
  constructor(){
    this.data = [];
  }
  hash(string, maxCap, salt){
    let hashValue = 0;
    for(let i = 0; i < string.length; i++){
      hashValue += (((i + 1) + salt) ** string.charCodeAt(i)) % maxCap;
    }
    return hashValue % maxCap;
  }
  basicHash(string){
   return this.hash(string, 250, 1);
  }
  set(key, value){
    let level = 1;
    let size = 250;
    let indx = this.hash(key, size, level);

    if(!this.data[indx]){
      this.data[indx] = [];
      this.data[indx].push([key, value]);
    }else{
      this.data[indx].push([key, value]);
    }
    return this;
  }
  get(key){
    let level = 1;
    let size = 250;
    let indx = this.hash(key, size, level);
    if(!this.data[indx]){
      return 'Sorry key does not exist';
    }else{
      for(let data of this.data[indx]){
        if(data[0] === key){
          return data[1];
        }
      }
    }
  }
  contains(key){
    let level = 1;
    let size = 250;
    let indx = this.hash(key, size, level);
    if(!this.data[indx]){
      return false;
    }else{
      for(let data of this.data[indx]){
        if(data[0] === key){
          return true;
        }
      }
    }
  }
}

module.exports = Hashmap;