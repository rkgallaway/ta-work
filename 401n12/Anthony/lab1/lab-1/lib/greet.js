'use strict';

const greet= module.exports= {};

greet.sayHi=(person)=>{
  if(typeof person === 'string'){
    return `Hello ${person}.`;
  }else{
    return null;
  }
};