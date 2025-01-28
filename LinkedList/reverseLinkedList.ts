// Node Class
class rNode<T> {
  head: T;
  next: rNode<T> | null;

  constructor(value:T){
    this.head = value;
    this.next = null;
  }
};

// Linked list class
class ReversedLinkedList<T> {
  head: rNode<T> | null;
  tail: rNode<T> | null;
  length: number;

  constructor(value:T){
    this.head = new rNode(value) //--> create head node.
    this.tail = this.head;  //--> setting tail node.
    this.length = 1;
  };

  // push method. Adds a new node at the end of the list.
  push(value:T){
    let newNode = new rNode(value);  //--> create a new node.
    // if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;  //--> link to new node
      this.tail = newNode;  //--> create a new node.      
    }
    this.length++;
  };

  // reverse method. reverse head to tail and tail to head.
  reverse(){
    let temp = this.head; // assign head to temp variable.
    this.head = this.tail;  //--> assign head to the tail node.
    this.tail = temp;  // assign tail to head node.
    let next = temp;  // assign next pointer to head node.
    let prev = null;  // prev pointer declear null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;  //--> next pointer is assign to next element of head node.
      temp.next = prev;  // --> temp next is link to prev pointer in reverse.
      prev = temp;  // --> prev pointer is assign to tail node which was head node.
      temp = next; // --> temp is assign to next element, next to previous node.
    }
  };

}

const rList = new ReversedLinkedList(1)
rList.push(2)
rList.push(3)
rList.push(4)
rList.reverse()
console.log(rList);