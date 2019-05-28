'use-strict';
module.exports.HashTable=class{

  constructor(size){
      this.size=size;
      this.arr=[];
  }

  hash(string){
      let key=string.toString();
      let code=0;
      for (let i = 0 ; i <key.length ; i++ ){
          code+= ((i**key.charCodeAt(0))+(i**i))%this.size ;
      }
      return code;
  }

  contains(key){
      let hashed=this.hash(key);
      if (this.arr[hashed]) {
          if (this.arr[hashed].key === key) {
              return true
          } else {
              let current = this.arr[hashed];
              while (current.next) {
                  if (current.next.key === key) {
                      return true
                  } else {
                      current = current.next;
                  }
              }
              return false;
          }
      }
      return false;
  }

  add(key,value){
      let hashed=this.hash(key);
      if (this.arr[hashed]){ //if a collision has occured
          let current = this.arr[hashed];
          while(current) {
              if (current.key === key) {//if the same key is being used replace original value with new value
                  current.value = value;
                  return true;
              }
              if (current.next) {
                  current = current.next //iterate the chain
              } else {
                  break;
              }
          }
          current.next={key:key,value:value}
      }else{ //if there is nothing in the array at that index then we can put the object there.
          this.arr[hashed]={key:key,value:value}
          return true;
      }
      return false;
  }

  get(key){
      let hashed=this.hash(key);
      if(this.arr[hashed]) {
          if (this.arr[hashed].key === key) {
              return this.arr[hashed].value;
          } else {
              let current = this.arr[hashed];
              while (current.next) {
                  if (current.next.key === key) {
                      return this.arr[hashed].value;
                  } else {
                      current = current.next;
                  }
              }
              return 'null';
          }
      }else{
          return null;
      }
  }


};
