'use strict'

const stacksAndQueues = require('../stacks-and-queues.js');

describe('Node', () => {
    const newNode = new stacksAndQueues.Node(9);
    it('has a value', () => {
        expect(newNode.value).toEqual(9);
    })
    it('has a next, and is null', () => {
        expect(newNode.next).toEqual(null);
    })

});

describe('Stack', () => {
    const newArray = new stacksAndQueues.Stack(null);
    it('has a value', () => {
        expect(newArray.top).toEqual(null);
    })

})