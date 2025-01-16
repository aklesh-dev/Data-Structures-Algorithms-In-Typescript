class MyArray<T> {
  length: number;
  data: { [index: number]: T };

  constructor(){
    this.length = 0;
    this.data = {};
  }

  // -- push method --
  push(item: T): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  };

  // --get method--
  get(index: number): T {
    if(index < 0 || index >= this.length) {
      throw new Error(`Item at index ${index} is out of bound!`);
    }
    return this.data[index];
  }

  // --pop method--
  pop(): T {
    if(this.length === 0) {
      throw new Error('Array is empty!');
    }
    // -- get last item --
    const lastItem = this.data[this.length - 1];
    // -- delete last item --
    delete this.data[this.length -1];
    // -- decrement length --
    this.length--;
    return lastItem;
  };

  // --shift method--
  shift(): T {
    if(this.length === 0) {
      throw new Error('Array is empty!');
    };
    // -- get first item --
    const firstItem = this.data[0];
    // -- shift all items to the left (re-indexing) --
    for(let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
      // console.log(`i: ${i}, this.data[${i}]: ${this.data[i]}`);
    };
    // -- delete last item --
    delete this.data[this.length -1];
    // -- decrement length --
    this.length--;
    return firstItem;
  };

  // --delete by index method--
  deleteByIndex(index: number): T {
    if(index < 0 || index >= this.length) {
      throw new Error(`Item at index ${index} is out of bound!`);
    };
    // -- get item to delete --
    const itemToDelete = this.data[index];
    // -- shift all items to the left (re-indexing)--
    for(let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i + 1];
    };
    // -- delete last item --
    delete this.data[this.length -1];
    // -- decrement length --
    this.length--;
    return itemToDelete;
  };
  

};

const myNewArray = new MyArray<unknown>();
myNewArray.push(1);
myNewArray.push("Hello");
myNewArray.push("World");
console.log(myNewArray)
// console.log('Item at index 0 is:',myNewArray.get(0))
// console.log('Item at index 1 is:',myNewArray.get(1))

// console.log("Last item is removed:", myNewArray.pop());

// console.log("First item is removed:", myNewArray.shift());

console.log("Item at index 1 is deleted:", myNewArray.deleteByIndex(1));

console.log("New array is:", myNewArray)
