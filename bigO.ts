const groceries: string[] = ["milk", "bread", "eggs", "butter", "sugar", "flour"];

// o(n) - Linear Time Complexity | as the number of elements in the array increases, the number of iterations increases

const searchForItem = (item: string) => {
  for(let i=0; i<groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Item found: ${item} at index ${i}`);
      // return i;
    }
    // else {
    //   console.log(`Item not found`);
    // }
  }
   console.log(`Item not found`);
  //  return undefined;

  for(let j=0; j<groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Item found: ${item} 2-loop`);
    }
  }

  // n + n = 2n => O(n) | n represents the for loop here 
  // Drop the constant so it becomes O(n)

};
searchForItem("butter");