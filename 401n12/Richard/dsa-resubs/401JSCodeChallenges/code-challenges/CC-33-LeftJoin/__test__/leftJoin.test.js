'use strict';
const leftJoin = require('../ljHashtable');
const Hashmap = require('../lib/Hashmap');

describe('testing left join', () => {
  let testMapA = new Hashmap();
  let testMapB = new Hashmap();
  testMapA.set('yes', 'si');
  testMapA.set('right', 'derecha');
  testMapA.set('beautiful', 'bonita');
  testMapB.set('yes', 'no');
  testMapB.set('right', 'wrong');
  leftJoin(testMapA, testMapB);
  test('adding the opposite', () => {
    let thingOne = testMapA.get('yes');
    expect(thingOne[0]).toEqual('si');
    expect(thingOne[1][0]).toEqual('no');
  });
  test('adding null', () => {
    let thingTwo = testMapA.get('beautiful');
    expect(thingTwo[0]).toEqual('bonita');
    expect(thingTwo[1]).toEqual('null');
  });
});