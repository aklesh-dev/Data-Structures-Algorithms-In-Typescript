// print numbers from 1 to n
// if number is divisible by 3, print "Fizz"
// if number is divisible by 5, print "Buzz"
// if number is divisible by both 3 and 5, print "FizzBuzz"
// else print the number

function FizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.info("FizzBuzz");
    } else if (i % 3 === 0) {
      console.info("Fizz");
    } else if (i % 5 === 0) {
      console.info("Buzz");
    } else {
      console.log(i);
    }
  }
};

FizzBuzz(15);
