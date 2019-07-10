'use strict';

const buzzFizz = (node) => {
    //base
    if(!node){
        return;
    }
    //recursive
    if((node.value % 5 === 0) && (node.value % 3 === 0)){
        node.value = 'FizzBuzz';
    }else if(node.value % 5 === 0){
        node.value = 'Buzz';
    }else if(node.value % 3 === 0){
        node.value = 'Fizz';
    }
    buzzFizz(node.left);
    buzzFizz(node.right);
};


module.exports = buzzFizz;