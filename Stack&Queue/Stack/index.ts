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

  // Pop method. Remove first node from the stack list.
  pop(){
    // if list is empty
    if (this.length === 0) {
      return undefined;
    } else {
      let temp = this.first;  //--> set temp variable to first node.
      this.first = this.first.next;  //--> set first property to next pointer link to previous first node.
      temp.next = null;  //--> remove the temp node which was first node.
      this.length--;
      return temp;
    }

  };

  // min method. Return the minimum value.
  min():T{
    // check if stack is empty
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;

      if (current.value < minValue) {
        // console.log("current value:",current.value, "min value:",minValue)
        minValue = current.value;
      }
    }
    return minValue;    
  };

};

let theStack = new Stack(0);
theStack.push(1)
theStack.push(2)
// theStack.pop()
console.log(theStack.min())