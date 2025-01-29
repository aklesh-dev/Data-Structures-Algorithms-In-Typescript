// Node class
class qNode<T> {
  value: T;
  next: qNode<T> | null;

  constructor(value:T) {
    this.value = value;
    this.next = null;
  }
};

// Queue list class
class Queue<T> {
  first: qNode<T> | null;
  last: qNode<T> | null;
  length: number;

  constructor(value:T){
    const newNode = new qNode<T>(value); //--> create a new node.
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  };

  // enqueue method. Adds new node/element at the end of the list.
  enqueue(value:T){
    const newNode = new qNode(value);
    // if list is empty
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // add new node at the last of the list
      this.last.next = newNode;  //-- create a new node at the last of list.
      this.last = newNode;  // -- set last pointer to the new node.
    }
    this.length++;
    return this;
  };

  // dequeue method. Remove the last node from the list. (❌ suppose to remove the first node.)
  // dequeue(): qNode<T>{
  //   // if list is empty
  //   if (this.length === 0) {
  //     return undefined;
  //   } else {
  //     let temp = this.first;  //--> set temp pointer to head node.
  //     let prev = this.first;

  //     // while loop run until it reach out of temp next pointer.
  //     while (temp.next) {
  //       prev = temp; // --> prev pointer set to temp node.
  //       temp = prev.next; // --> temp pointer set to next node of the prev node.
  //     }

  //     this.last = prev; //--> last pointer is set to prev node(which is new last node).
  //     this.last.next = null; //--> remove the next link node, next to last node.
  //     this.length--;
  //     return temp;
  //   }
  // };

  // dequeue method. Remove the node at the first position from the queue and return it.
  dequeue():qNode<T>{
    // check if queue is empty
    if (this.length === 0) {
      return undefined;

    } 
    else if (this.length === 1){
      this.first = null;
      this.last = null;
      this.length--;
    }
    else {
      let temp = this.first;  //--> set temp pointer to first node.
      this.first = this.first.next;  //--> set first pointer to next pointer of the first node.
      temp.next = null;  //--> remove the temp node
      this.length--;
      return temp;   //--> return remove node
    }
  };

};

let theQueue = new Queue(0);
// theQueue.enqueue(1)
// theQueue.enqueue(2)
theQueue.dequeue()
console.log(theQueue)