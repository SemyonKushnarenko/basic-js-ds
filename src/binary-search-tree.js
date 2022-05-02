const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = null

  root() {
    return this.tree
  }

  add(data) {
    let addNode = (tree) => {
      if (tree === null) {
        this.tree = new Node(data);
      } else if (tree.data > data) {
        if (tree.left === null) {
          tree.left = new Node(data);
        } else {
          addNode(tree.left);
        }
      } else if (tree.data < data) {
        if (tree.right === null) {
          tree.right = new Node(data);
        } else {
          addNode(tree.right);
        }
      }
    };
    addNode(this.tree);
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let node = this.tree;
    while (node !== null) {
      if (node.data === data) {
        return node;
      } else if (node.data > data) {
        node = node.left;
      } else if (node.data < data) {
        node = node.right;
      }
    }
    return null;
  }

  remove(data, node = this.tree) {
    if (!this.has(data)) {
      return;
    }
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      node.data = this.min(node.right);
      node.right = this.remove(node.data, node.right);
    }
    return node;
  }

  min(node = this.tree) {
    if (node === null) {
      return null;
    }
    let min = node.data;
    while (node.left != null) {
      min = node.left.data;
      node = node.left;
    }
    return min;
  }

  max(node = this.tree) {
    if (node === null) {
      return null;
    }
    let min = node.data;
    while (node.right != null) {
      min = node.right.data;
      node = node.right;
    }
    return min;
  }
}

module.exports = {
  BinarySearchTree
};