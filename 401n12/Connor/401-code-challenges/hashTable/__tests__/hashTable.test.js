'use strict';
const map= require('../hashTable.js');

describe('Hash Table Functionality',()=>{
    let x = new map.HashTable(1000);
    it('can add a new value to the table',()=>{
        expect(x.add('0','hello')).toEqual(true);
    });
    it('rewrites the value for a key if the same key is used again.',()=>{
        x.add(0,'does this work?');
        x.add('0','goodbye');
        expect(x.get('0')).toEqual('goodbye');
    });
    it('can retrieve the value for a key stored in the hash table',()=>{
        expect(x.get(0)).toEqual('goodbye');
    });
    it('successfully returns null for a value not stored within the hash table.',()=>{
       expect(x.get('noesNotExist')).toBeNull();
    });
    it('can successfully handle a collision, and be able to find a value of a key that is in a bucket.',()=>{
        x=testEnv();
        let test= true;
        for(let i in x.a){
            if (!x.h.contains(x.a[i])){
                test=false;
                console.log(x.a[i]);
            }
        }
        expect(test).toEqual(true);
    });


});

function testEnv(){//this function creates an object that contains a hashmap, and an array of all keys within the hashmap
  let a = [];
  let h = new map.HashTable(200);
  for (let i = 0 ; i < 500 ; i++){
      let x = String.fromCharCode(Math.floor(i*Math.random()*1000%127));
      a.push(x);
      h.add(x,`value here ${i}`);
  }
  return {a,h};
}
