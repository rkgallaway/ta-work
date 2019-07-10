'use strict';
let Hashmap = require('../hashMap');

describe('testing hashing', () => {
  let testMap1 = new Hashmap();
  let testStrA = 'a';
  let testStrB = 'handle';
  test('hashing', () => {
    expect(testMap1.hash(testStrA, 250, 1)).toEqual(172);
    expect(testMap1.hash(testStrB, 250, 1)).toEqual(70);
  });
  test('basic hashing', () => {
    expect(testMap1.basicHash(testStrA)).toEqual(172);
    expect(testMap1.basicHash(testStrB)).toEqual(70);
  });
});
describe('setting and getting an element', () => {
  let testMap2 = new Hashmap();
  testMap2.set('weed', 'erryday');
  test('did it work?', () => {
    expect(testMap2.data[146][0][1]).toEqual('erryday');
  });
  test('can i get it?', () => {
    expect(testMap2.get('weed')).toEqual('erryday');
  });
  test('constains?', () => {
    expect(testMap2.contains('weed')).toEqual(true);
  });
});
