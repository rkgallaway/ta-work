'use strict';
const leftJoin = (map1, map2) => {
  for(let data of map1.data){
    if(data){
      for(let innerData of data){
        if(map2.contains(innerData[0])){
          innerData.push(map2.get(innerData[0]));
        }else{
          innerData.push('null');
        }
      }
    }
  }
  return map1;
};

module.exports = leftJoin;