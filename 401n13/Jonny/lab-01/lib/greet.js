'use strict';

let greet = module.exports = {};

greet.sayHello = function (str) {
  if (typeof str !== 'string') {
    return null;
  } else {
    return `Hello, ${str}`;
  }
};
