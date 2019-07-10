'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
// console.log(greet('JOHN'));
console.log(math.add(5,3)); // 4
console.log(math.subtract(1,7,12)); // -2
console.log(math.divide(9,3));
console.log(math.multiply(20,4,7));

let greeting = greet.sayHello('asshat');
console.log(greeting);
