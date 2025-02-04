// Hash Table class
class HashTable<T> {
  keyMap: [string, string][][] = [];
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key:string): number {
    let sum = 0;

    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode =  key.charCodeAt(0) - 96
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  };

  // set method.
  set(key:string, value:string): this {
    const index = this._hashFunction(key);
    // console.log("Index:", index);

    // check if index is empty or not
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
      this.keyMap[index].push([key, value]);
    }
    return this;
  };

  // get method.
  get(key:string){
    const index = this._hashFunction(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++ ){
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
      return undefined;
    }
  };
}

const phoneBook = new HashTable();
phoneBook.set("Izumi", "555-444-333");
console.log(phoneBook.get("Izumi"));
