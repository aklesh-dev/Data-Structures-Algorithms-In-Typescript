function revString(str: string): string {
  const stack = []; //--> Initialized an empty stack.

  // --iterates over each character in the input string (str).
  for (let char of str) {
    stack.push(char); //--> each character is pushed onto the stack.
  }

  let reversedStr = ""; //--> An empty string is initialized to build the reversed version of the input string.

  // loop continues as long as there are elements in the stack.
  while (stack.length > 0) {
    // In each iteration, the pop() method is used to remove and return the last element from the stack,
    // and this character is appended to reversedStr.
    reversedStr += stack.pop();
  }
  // Once the stack is empty, function returns the reversedStr.
  return reversedStr;
}
const myreversedString = revString("aklesh");
console.log(myreversedString);
