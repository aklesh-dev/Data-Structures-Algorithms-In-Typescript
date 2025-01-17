const reverseInteger = (input: number): number => {
  // --Handle negative number
  const isNegative = input < 0;
  const absValue = Math.abs(input);

  // console.log("abs value:",absValue);

  // -- Convert to string and reverse
  const reversedStr = absValue.toString().split('').reverse().join("");

  // -- Convert back to number--
  const reversedNumber = parseInt(reversedStr);
  
  // --Apply original sign if negative.
  return isNegative ? -reversedNumber : reversedNumber;
}

// console.info('Reversing Integer.')
// console.log(reverseInteger(123));
// console.info('Reversing Negative Integer.')
// console.log(reverseInteger(-123));


// --

function reversedInt(num: number): number {
  // convert number to string.
  let numStr = num.toString();
  // initalize the empty string. 
  let reversedStr = '';
  // loop backward
  for(let i = numStr.length - 1; i >= 0; i--) {
    // add each character to reversed string
    reversedStr += numStr[i];
  };
  // convert back to number and Math.sign method to know sign of a number and return.
  return parseInt(reversedStr) * Math.sign(num);
};
let num: number = -125468;
let reversedNum = reversedInt(num);

console.info("Original number:", num);
console.log("Reversed Number:", reversedNum);