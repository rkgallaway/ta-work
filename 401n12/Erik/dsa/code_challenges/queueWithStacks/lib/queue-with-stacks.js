'use strict';

class PseudoQueue {
  constructor () {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue (value) {

    if(this.stackA.length === 0) {

      let newValue = this.stackA.push(value);

      return `${newValue} has been added to the bottom of the stack`;

    } else {

      for (let i = this.stackA.length - 1; i > -1; i--) {

        this.stackB.push(this.stackA[i]);

        this.stackA.pop();
      }

      this.stackA.push(value);

      for(let i = this.stackB.length - 1; i > -1; i--) {

        this.stackA.push(this.stackB[i]);

        this.stackB.pop();
      }

      return `${value} has been added to the bottom of the stack`;

    }
  }

  dequeue () {

    if(this.stackA.length === 0) {
      return 'Nothing to remove, stack is empty';

    }

    if(this.stackA.length === 1) {

      let dequeueItem = this.stackA.pop();

      return `${dequeueItem} has been removed`;

    }

    if(this.stackA.length > 1) {
      for (let i = this.stackA.length - 1; i > 0; i--) {


        this.stackB.push(this.stackA[i]);
        this.stackA.pop();

      }

      let dequeuedItem = this.stackA.pop();

      for (let i = this.stackB.length - 1 ; i > -1; i--) {

        this.stackA.push(this.stackB[i]);

        this.stackB.pop();

      }

      return `${dequeuedItem} was removed`;

    } else {

      let dequeuedItem = this.stackA.pop();

      return `${dequeuedItem} was removed`

    }
  }
}

module.exports = PseudoQueue;
