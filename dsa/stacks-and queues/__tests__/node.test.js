'use strict';

const Node = require('../node.js');

describe('Node Module', () => {
  it('Can successfully create a node as expected', () => {
    let value = 'Some Value';
    let node = new Node(value);
    expect(node instanceof Node).toBeTruthy();
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});