//-- O(n^2)--
// This algorithm is also known as the brute-force algorithm. It works by checking all possible combinations of elements in the array.

// Indicates that the algorithm's execution time grows exponentially with the size of the input data. (represented by n).

function findPairs(arr: number[]) {
  // --This process is called O(n^2)
  // --nested loop to check all possible pairs of elements in the array.
  for(let i =0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      console.log(`Pair: ${arr[i]} and ${arr[j]}`)
    }
  }

  // o(n)
  for(let a=0; a<arr.length; a++){
    console.log('-------', a);
  }

  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term in the equation.
  // "n" is a Non-dominant term.
  // so, we remove the non-dominant term and we get O(n^2)
  // this way, we simplify our Big O notation. 
};

const numbers: number[] = [1, 2, 3, 4, 5];
findPairs(numbers);