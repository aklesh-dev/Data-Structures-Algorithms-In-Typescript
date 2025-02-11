// Recursion count down
function countDown(nums:number):void{
  if(nums === 0){
    console.log("And Finally the stopping point 🎉")
    return;
  }

  console.log(nums)
  countDown(nums - 1);
}

// countDown(5)

// Recursion Factorial
function factorial(nums:number) {
  return nums === 0 ? 1 : nums * factorial(nums - 1);

  // if (nums === 0) {
  //   return 1;
  // }

  // return nums * factorial(nums - 1);
  
}
// This will compute the factorial of 4, which is 4 * 3 * 2 * 1 * 1 = 24.
console.log(factorial(4));

//-- Recursive Logic:
// The function uses a ternary operator to check if nums is equal to 0.
// If nums is 0, it returns 1. This is the base case for the recursion, as the factorial of 0 is defined to be 1.
// If nums is not 0, it returns nums multiplied by the result of factorial(nums - 1). 
// This is the recursive case, where the function calls itself with the next lower number until it reaches the base case.