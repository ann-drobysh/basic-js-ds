const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {    
    const newNode = new Node(data);
    if (this.tree == null) {
      this.tree = newNode;
    } else {
      let currentNode = this.tree;
      let newRecord = false;
      while (!newRecord){
        if (data < currentNode.data) {          
          if (currentNode.left != null){currentNode = currentNode.left;}
          else {currentNode.left = newNode;
            newRecord = true;}          
        } else {          
          if (currentNode.right != null) {currentNode = currentNode.right;}
            else {currentNode.right = newNode;
            newRecord = true;}
        } 
      }
        
      
    }
  }

  has(data) {
    if (this.find(data) == null) {
      return false;
    } else {
      return true;
    }
    
  }

  find(data) {
    let currentNode = this.tree;
    let foundData = null;
    if (currentNode == null) {
      return null;
    }
    while (currentNode != null && data != currentNode.data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (currentNode == null) {
      foundData = null;
    } else {foundData = currentNode;}    
    return foundData;
    
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};