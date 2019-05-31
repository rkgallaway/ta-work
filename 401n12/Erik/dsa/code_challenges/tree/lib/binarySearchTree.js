const Node = require('./node');


class BinarySearchTree {
  constructor(root) {
    //root -> sort of equals the top of the tree
    this.root = root;
  }

  add(nodeToInsert) {

    if (!nodeToInsert) {
      throw new Error('can not insert, nothing is being passed');
    }

    if(!this.root) {
      this.root = nodeToInsert;
      return;
    }

    let current = this.root;

    while(true) {

      if(nodeToInsert.value > current.value) {

        if(!current.right) {

          current.right = nodeToInsert;
          return;

        }

        current = current.right;

      } else {

        if(!current.left) {
          current.left = nodeToInsert;
          return;
        }
        current = current.left;
      }
    }
  }

  contains (value) {

    if (!value) {
      throw new Error('can not insert, nothing is being passed');
    }

    if(!this.root) {
      return 'Tree has nothing to search for';
    }

    if(value === this.root.value) {
      return `${value} was found`;
    }
      let found = false;
      let current = this.root;

    while(!found) {

      if(current === null) {
        return 'value not found!';
      } else if(value > current.value) {
        current = current.right
      } else if(value < current.value) {
        current = current.left;
      } else if(value === current.value) {
        found = true;
        return `${value} was found`;
      }
    }
  }


}
let root = '';
 const createTree = (arr, start = 0, end = arr.length) => {
    let middle = start + Math.floor((end-start)/2);
    root = new BinarySearchTree(arr[middle]);

    if(start >= end) return null;

    root.left = createTree(arr, start, middle);
    root.right = createTree(arr, middle + 1, end);

    return root;
  };

const BST = new BinarySearchTree();
// BST.add(new Node(10));
// BST.add(new Node(15));
// BST.add(new Node(5));
// BST.add(new Node(7));

// BST.contains(15);
// BST.contains(5);
// BST.contains(7);

createTree([1,2,3,4,5]);

console.log(root);

module.exports = BinarySearchTree;
