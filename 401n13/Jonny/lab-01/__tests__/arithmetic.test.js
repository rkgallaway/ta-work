'use strict';

const arithmetic = require('../lib/arithmetic.js');
let faker = require('faker');

describe('Add', () => {
  it('adds positive numbers', () => {
    let result1 = (faker.random.number()); 
    let result2 = (faker.random.number());
    expect(arithmetic.add(result1,result2)).toBe(result1+result2);
  });  
});

describe('Subtract', () => {
  it('subtracts numbers', () => {
    let result1 = (faker.random.number());
    let result2 = (faker.random.number());
    expect(arithmetic.subtract(result1,result2)).toBe(result1-result2);
  });
});

describe('Multiply', () => {
  it('multiplies numbers', () => {
    let result1 = (faker.random.number());
    let result2 = (faker.random.number());
    expect(arithmetic.multiply(result1,result2)).toBe(result1*result2);
  });

  it('Returns 0 when either input === 0', () => {
    let result1 = (faker.random.number());
    expect(arithmetic.multiply(result1,0)).toBe(0);
  });
});

describe('Divide', () => {
  it('divide numbers', () => {
    let result1 = (faker.random.number());
    let result2 = (faker.random.number());
    expect(arithmetic.divide(result1,result2)).toBe(result1/result2);
  });

  it('Returns 0 when the second input === 0', () => {
    let result2 = (faker.random.number());
    expect(arithmetic.divide(0,result2)).toBe(0);
  });
});
