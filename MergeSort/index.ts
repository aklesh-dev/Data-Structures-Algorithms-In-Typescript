
function mergeSort(arr: number[]) {
  // Base case: if the array has 1 or no elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array to divide it into two halves
  const middle = Math.floor(arr.length / 2);

  // Create the left half of the array
  const left = arr.slice(0, middle);

  // Create the right half of the array
  const right = arr.slice(middle);

  // Recursively sort the left and right halves, then merge them together
  return merge(mergeSort(left), mergeSort(right));
}



function merge(leftArr: number[], rightArr: number[]): number[] {
  // Initialize an empty array to store the merged result
  const result: number[] = [];
  
  // Initialize two pointers for leftArr and rightArr
  let i = 0;
  let j = 0;

  // Loop through both arrays until one is exhausted
  while (i < leftArr.length && j < rightArr.length) {
    // Compare elements from both arrays and push the smaller one to the result array
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++; // Move the pointer in leftArr
    } else {
      result.push(rightArr[j]);
      j++; // Move the pointer in rightArr
    }
  }

  // Push the remaining elements from leftArr, if any
  result.push(...leftArr.slice(i));
  
  // Push the remaining elements from rightArr, if any
  result.push(...rightArr.slice(j));
  
  // Return the merged result array
  return result;
}

const unsortedArray = [38,27,43,3,9,81,10]
const sortedArray = mergeSort(unsortedArray)
console.log(sortedArray)

// Sort the arrays before merging
// const sortedLeftArr = [9, 5, 27, 36].sort((a, b) => a - b);
// const sortedRightArr = [8, 15, 10, 43, 86].sort((a, b) => a - b);

// Test the merge function with two sorted arrays
// const mres = merge(sortedLeftArr, sortedRightArr);
// console.log(mres); // Output should be [5, 8, 9, 10, 15, 27, 36, 43, 86], which is sorted

