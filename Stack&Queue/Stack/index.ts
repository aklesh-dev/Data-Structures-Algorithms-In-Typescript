// Node class
class sNode<T> {
  value:T;
  next: sNode<T> | null;
  constructor(value:T){
    this.value = value;
    this.next = null;
  }
};

// Stack class
class Stack<T> {
  first: sNode<T> | null;
  length: number;

  constructor(value:T){
    const newNode = new sNode(value);
    this.first = newNode;
    this.length = 1;
  }

  // Push method. Adds new node at the first of stack.
  push(value:T){
    let newNode = new sNode<T>(value);
    // if stack is empty
    if (this.length === 0) {
      this.first = newNode;   //-- create a new node.      
    } else {
      // Add new node at the first stack
      newNode.next = this.first;  //--> set the newNode next property(reference) to the previous first node
      this.first = newNode;  // --> set first property to newNode.
    }
    this.length++;
  };
   
};

let theStack = new Stack(0);
theStack.push(1)
console.log(theStack)