'use strict';

const HashTable = require('../hashtable');

describe('testing hash tables', () => {
  const table = new HashTable();

  test('add a key/value to the hashtable', () => {

    table.add('cat', 'cody');

    expect(table.bucket[3]).toEqual([['cat', 'cody']]);
  });

  test('retrieve with key returns a value', () => {
    expect(table.get('cat')).toEqual(['cody']);
  });

  test('Returns null if key does not exist', () => {
    expect(table.get('dancer')).toBeNull();
  });

  test('Successfully handles collision', () => {
    table.add('cat', 'jump');
    expect(table.bucket[3]).toEqual([['cat', 'cody'], ['cat', 'jump']]);
  });

  test('Retrieves values from bucket with collisions', () => {
    expect(table.get('cat')).toEqual(['cody', 'jump']);
  });

  test('Can hash a key', () => {
    expect(table.hash('cat')).toEqual(3);
  });

});
