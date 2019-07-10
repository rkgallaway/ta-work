'use strict';

const greet = require('../lib/greet.js');
let faker = require('faker');

describe('String for greetings', () => {
  it('Input is a string', () => {
    let randomName = faker.name.findName();
    expect(greet.sayHello(randomName)).toBe(`Hello, ${randomName}`);
  });
  it('Can\'t take anything that isn\'t a string', () => {
    expect(greet.sayHello(25)).toBe(null);
  });
});