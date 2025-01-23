// --Node
class LinkedListNode<T> {
  head: T;
  next: LinkedListNode<T> | null;
  constructor(value: T) {
    this.head = value;
    this.next = null;
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
  
    
  
};

const myLinkedList = new LinkedList(1);
myLinkedList.push(12);
// myLinkedList.pop();
// myLinkedList.unshift(0);
console.log(myLinkedList);
// myLinkedList.shift();
console.log(myLinkedList.shift());
