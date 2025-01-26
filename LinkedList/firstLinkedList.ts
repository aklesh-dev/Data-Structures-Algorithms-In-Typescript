// --Node
class LinkedListNode<T> {
  head: T;
  next: LinkedListNode<T> | null;
  value: T;
  constructor(value: T) {
    this.head = value;
    this.next = null;
    this.value = value;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;
  constructor(value: T) {
    this.head = new LinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  // push method. Adds a new node to the end of the list.
  push(value: T) {
    let newNode = new LinkedListNode<T>(value);
    // if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add to last node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };


  // pop method. Removes and returns the last node of the list.
  pop():T  {

    // --if list is empty
    if (!this.head) {
      return null;
    };

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;  // --> update prev node
      temp = prev.next; // --> update temp node
    }

    this.tail = prev; // update tail node
    this.tail.next = null; // remove link to next node
    this.length--;

    // --if list has only one node
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    };

    return temp.head; // return the removed node
  };

  // unshift method. Adds a new node at the first of the list.
  unshift(value: T) {
    let newNode = new LinkedListNode<T>(value);
    // if list is empty
    if (!this.head) {
      this.head = newNode;  // --> update head node
      this.tail = newNode;  // --> update tail node
    } else {
      // add to first node
      newNode.next = this.head; // --> link new node to current head
      this.head = newNode;  // --> update head node
    }
    this.length++;  // --> increment length
    return this;  // --> return the list
  };
  
  // shift method. Removes and returns the first node of the list.
  shift(): T {
    // --if list is empty
    if(!this.head){
      return null;
    }
    let temp = this.head;  // --> update temp node with head node
    this.head = this.head.next;  // --> update head node with next node
    temp.next = null;  // --> remove link to next node
    this.length--;  // --> decrement length
    // --if list has only one node
    if(this.length === 0) {
      this.tail = null;
    };
    return temp.head;  // --> return the removed node
  };
  
    
  // get first method. return the first element.
  getFirst():T | null {
    if(!this.head){
      return null;
    }

    return this.head.head;
  };

  // get last method. return last element.
  getLast():T | null {
    if(!this.head) {
      return null;
    };

    let temp = this.head;

    while(temp) {
      if(!temp.next){
        return temp.head;
      }
      temp = temp.next;
    }
  }

  // get element by index method
  elementOf(index: number) {
    let counter = 0;
    let tempNode = this.head;   // --> temp pointer starting at the head
    

    while (tempNode) {   // --> loop continues as long as there are nodes in the list.
      if (counter === index) {  // --> checks if current position match the requested index if true returns the current node.
        return tempNode;
      }
      counter ++;  // increment the counter
      tempNode = tempNode.next;  // --> move the temp pointer to the next node.
    }
    // -- If the loop completes without finding the requested index, it returns null.
    return null;
  };

  // set method. set value in requested index.
  set(index: number, value: T) {
    // Check if the index is valid (not negative and not larger than the list length)
    if(index < 0 || index > this.length) {
      return console.info("Invalid index !")
    };

    let temp = this.elementOf(index);  // --> get element method used.

    if (temp && 'value' in temp) {
      // --Set the value of the found node to the new value
      temp.value = value;
      return true;
    } else{
      console.info("Node not found at index!");
      return false;
    }
    
  };

  // insert method. insert value at requested index.
  insert(index: number, value: T) {
    // check if value is 0 then call unshift method. which add new node at the first of the list.
    if (index === 0) {  
      return this.unshift(value);
    }
    // add new node at the end of the list.
    else if (index === this.length) {
      return this.push(value);
    }

    const newNode = new LinkedListNode(value);  // --> create new node with value.

    // Uses the elementOf method to get the node right before the desired position (index - 1).
    const temp = this.elementOf(index - 1); 

    newNode.next = temp.next;  // --> link new node to next node of the previous node.
    temp.next = newNode;  // --> link previous node to new node.
    this.length++;  // --> increment length.
    return true;  

  };

  // size method. return the length of the list.
  size(): number {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }

    return counter;
  };

};

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
// console.log(myLinkedList)
// console.log(myLinkedList.insert(0, 20))
// console.log(myLinkedList)
console.log("Size of the list:", myLinkedList.size());
// myLinkedList.pop();
// myLinkedList.unshift(0);
// console.log(myLinkedList);
// console.log("get element:",myLinkedList.elementOf(3));
// myLinkedList.shift();
// console.log(myLinkedList.shift());
