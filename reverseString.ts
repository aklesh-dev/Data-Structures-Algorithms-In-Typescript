// --This function takes a string as input and returns the reversed string.
function reverseString(input: string): string {
  // --Convert the string to an array of characters
  const charArray = input.split("");
  // --Reverse the array of characters
  const reversedArray = charArray.reverse();
  // --Join the reversed array of characters back into a string
  const reversedString = reversedArray.join("");
  // --Return the reversed string
  return reversedString;
};

// Testing the function
// console.log(reverseString("hello")); 


// --This approach manually reverses the string using a loop.
function reverse(str: string): string {
  // Initialize an empty string to hold the reversed string
  let reversedString = "";
  // Loop through the string backwards and add each character to the reversed string
  for (let i = str.length -1; i >= 0; i--) {
    // Add each character to the reversed string
    reversedString +=  str[i];
  };
  return reversedString;
};

const originalString = "Hello, World!";
const reversedString = reverse(originalString);
console.log(`Original string: ${originalString} and reversed string: ${reversedString}`)