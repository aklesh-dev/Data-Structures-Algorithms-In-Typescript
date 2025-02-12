// -- Node class--
class bNode {
  value: number;
  left: bNode | null;
  right: bNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: bNode | null;

  constructor() {
    this.root = null;
  }

  // --insert method add a new value to the binary search tree.--
  insert(value: number) {
    const newNode = new bNode(value); // Create a new node with the given value

    // If the tree is empty (root is null), set the new node as the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // Otherwise, start from the root and find the correct position for the new node
    let temp = this.root;

    while (true) {
      // If the value already exists in the tree, do not insert and return undefined
      if (newNode.value === temp.value) {
        return undefined;
      }
      // If the new value is less than the current node's value, go to the left subtree
      else if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode; // If the left child is null, insert the new node here
          return this;
        } else {
          temp = temp.left; // Otherwise, move to the left child
        }
      }
      // If the new value is greater than the current node's value, go to the right subtree
      else {
        if (temp.right === null) {
          temp.right = newNode; // If the right child is null, insert the new node here
          return this;
        } else {
          temp = temp.right; // Otherwise, move to the right child
        }
      }
    }
  }

  // --includes method checks if a given value exists in the BST.
  includes(value: number) {
    // Check if the Tree is Empty
    if (!this.root) {
      return false;
    }

    let temp = this.root; //--> Initialize temp to the Root Node.

    // The while loop continues as long as temp is not null.
    while (temp) {
      // If the value is less than the current node's value
      if (value < temp.value) {
        temp = temp.left; //-- If true, temp is updated to temp.left, moving to the left child of the current node.
      }
      // If the value is greater than the current node's value
      else if (value > temp.value){
        temp = temp.right; //--If true, temp is updated to temp.right, moving to the right child of the current node
      }
      // If the value is equal to the current node's value
      else if (value === temp.value){
        return true; //If true, the method returns true, indicating that the value exists in the tree
      }
    }
    // Return false if Value Not Found
    return false;
  }

  // --Breath First Search--
  bfs(){
    let current = this.root;
    let queue = []
    let data = []

    queue.push(current);

    // -- while loop run until it reaches null | 0
    // --iterate through all element.
    while(queue.length){
      current = queue.shift(); //--remove the first element.
      data.push(current.value); //--add value from the queue array to data array.

      // check left pointer if there is node push it to queue array.
      if(current.left) queue.push(current.left);
      // check right pointer if there is node push it to queue array.
      if(current.right) queue.push(current.right);
    }

    return data;
    
  };

}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
// console.log(tree.includes(9));
console.log(tree.bfs())
