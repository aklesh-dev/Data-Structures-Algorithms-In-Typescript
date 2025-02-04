// Hash Table class
class HashTable{
  private keyMap: [string, any][][] = [];
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  private _hashFunction(key:string): number {
    let sum = 0;

    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // For uppercase letters, char.charCodeAt(0) - 96 
      // will result in negative numbers because the ASCII values for 'A' to 'Z' are between 65 and 90.
      const char = key[i].toLowerCase(); //--> convert character to lowercase.
      // The expression char.charCodeAt(0) - 96 assumes that the ASCII value of 'a' is 97, which is correct. 
      // However, it does not handle uppercase letters properly.
      const charCode =  char.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
      // Ensure sum is non-negative
      if(sum < 0){
        sum += this.keyMap.length;
      }
    }

    return sum;
  };

  // set method.
  public set(key:string, value:string): this {
    const index = this._hashFunction(key);
    // console.log(`Setting key: ${key} at index: ${index}`);

    // check if index is empty or not
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    // console.log(`keyMap[${index}]:`, this.keyMap[index]);
    return this;
  };

  // get method.
  public get(key:string):string{
    // --Hash Function
    const index = this._hashFunction(key);
    // Check if Index Exists.
    if(this.keyMap[index]){
      // --Iterate through
      for(let i = 0; i < this.keyMap[index].length; i++ ){
        // Check each key
        if(this.keyMap[index][i][0] === key){
          // return the value.
          return this.keyMap[index][i][1]
        }
      }
      // return undefined if key not found!.
      return undefined;
    }
    return undefined;
  };

  // getAllKeys method. returns all the keys.
  getAllKeys(){
    const keys:string[] = [];

    // console.log("Starting getAllKeys method")
    // console.log("keyMap length:", this.keyMap.length);

    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        // console.log(`keyMap[${i}] length:`, this.keyMap[i].length) //length of each sub-array
        for(let j = 0; j < this.keyMap[i].length; j++){
          // console.log(`keyMap[${i}][${j}][0]`, this.keyMap[i][j][0]) //log each key
          keys.push(this.keyMap[i][j][0])
        }
      } else {
        // console.log(`keyMap[$[i]] is undefined`);  // log if sub-array is undefined.
      }
    }
    // console.log("Finished getAllkeys method.")
    return keys;
  };

  // getAllValues method. return value
  getAllValues(){
    const values:any[] = [];

    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        // console.log(`keyMap[${i}] length:`, this.keyMap[i].length) //length of each sub-array
        for(let j = 0; j < this.keyMap[i].length; j++){
          // console.log(`keyMap[${i}][${j}][1]`, this.keyMap[i][j][1]) //log each value
          values.push(this.keyMap[i][j][1])
        }
      } 
    }
    return values;

  };
  
}

const phoneBook = new HashTable();
phoneBook.set("Izumi", "555-444-333");
phoneBook.set("Arzuna", "666-888-999");
phoneBook.set("Aklesh", "111-222-555");
// console.log(phoneBook.get("Izumi"));
// console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
