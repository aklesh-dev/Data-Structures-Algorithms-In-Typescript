const isValidParenthesis = (str:string) => {
// Initialize an empty stack to keep track of opening brackets
const stack = [];

// Define a mapping of opening brackets to their corresponding closing brackets
const bracket = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// Iterate over each character in the input string
for (let char of str) {
  // If the character is an opening bracket (i.e., it exists in the `bracket` object)
  if (bracket[char]) {
    // Push the opening bracket onto the stack
    stack.push(char);
  } else {
    // Pop the top element from the stack (most recent unmatched opening bracket)
    const top = stack.pop();

    // If the stack is empty (no opening bracket to match) or the popped element does not match the current closing bracket
    if (!top || bracket[top] !== char) {
      // Return false, indicating the string is not valid
      return false;
    }
  }
}

// After processing all characters, check if the stack is empty
// If empty, all opening brackets had matching closing brackets; otherwise, return false
  return stack.length === 0;
  
};

console.log(isValidParenthesis("(){}[]"));  // true
console.log(isValidParenthesis("({]"));  // false
console.log(isValidParenthesis("(){]"));  // false
console.log(isValidParenthesis("()"));  // true
console.log(isValidParenthesis("("));  // false