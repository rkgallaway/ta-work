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

const BST = new BinarySearchTree();
BST.add(new Node(10));
BST.add(new Node(15));
BST.add(new Node(5));
BST.add(new Node(7));

BST.contains(15);
BST.contains(5);
BST.contains(7);

module.exports = BinarySearchTree;
