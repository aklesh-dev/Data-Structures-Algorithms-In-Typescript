// Node class.
class DoblyNode<T> {
  prev: DoblyNode<T> | null;
  next: DoblyNode<T> | null;
  value: T;

  constructor(value: T) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

// Doubly Linked list class
class DoublyLinkedList<T> {
  head: DoblyNode<T> | null;
  tail: DoblyNode<T> | null;
  length: number;
  constructor(value: T) {
    const newNode = new DoblyNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Push method. Adds new node at the end of the list.
  push(value: T): this {
    const newNode = new DoblyNode(value);

    // if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  };

  // Pop method. Remove the last node from the list.
  pop():DoblyNode<T> {
    // --If list is empty
    if (!this.head) {
      return undefined;
    };

    let tempNode = this.tail;  //--> assigned the current tail node, which is the node to be removed.
    
    // If list have 1 element.
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    };

    this.tail = this.tail.prev;   //--> tail pointer is updated to point to the node that was previously before the current tail node
    this.tail.next = null;    //--> remove the pointer to the next node from the new tail.
    tempNode.prev = null;  //--> remove the prev pointer from the removed node.
    this.length--;    //--> decrement the length by 1
    return tempNode;  //--> return the removed node.
    
  };

  // Unshift method. Add new node at first of the list.
  unshift(value:T){
    let newNode = new DoblyNode(value);  // create a new node.
    // Check if list is empty, create a new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add new node at first of the list.
      newNode.next = this.head;  //--> reference the next pointer to the previous head node
      this.head.prev = newNode;      // --> reference the prev pointer to the new node.
      this.head = newNode;    //--> update the head node with the new node.
    }
    this.length++;
    return this;
  };

}

let myDoublyLinkedList = new DoublyLinkedList<any>(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push('Jhon');
myDoublyLinkedList.push(3);
myDoublyLinkedList.unshift(4)
console.log(myDoublyLinkedList);

// const secondDoublLinkedList = new DoublyLinkedList<string>("jhon");
// console.log(secondDoublLinkedList)
