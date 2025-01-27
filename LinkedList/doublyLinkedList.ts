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

}

let myDoublyLinkedList = new DoublyLinkedList<any>(0);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push('Jhon');
console.log(myDoublyLinkedList);

// const secondDoublLinkedList = new DoublyLinkedList<string>("jhon");
// console.log(secondDoublLinkedList)
