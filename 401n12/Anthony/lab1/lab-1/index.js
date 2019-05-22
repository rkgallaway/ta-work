'use strict';

const greeting= require('./lib/greet.js');
const mathematics= require('./lib/math.js');

console.log(greeting('Matthew'));
console.log(mathematics.add(16,32));
console.log(mathematics.subtract(32,16));
console.log(mathematics.multiply(5,12));
console.log(mathematics.divide(200,20));
console.log(mathematics.divide(0,25));