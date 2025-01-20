// Write a function that takes an array and a chunk size as input.
// The function should return a new array where original array is split into chunks of the specified size.

// Example:
// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 4) => [[1, 2, 3, 4], [5, 6, 7, 8], [9]]

function chunk(arr: number[], size: number): number[][] {
    const chunkedArr: number[][] = [];
    let startIndex = 0;

    while (startIndex < arr.length) {
      const chunk = arr.slice(startIndex, startIndex + size);
      console.log("-------",chunk)
      chunkedArr.push(chunk);
      startIndex += size;  // Increment the start index by the chunk size. To break the loop
    }

    return chunkedArr;
};

// Testing the function
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 2;
const result = chunk(arr1, size);
console.log(`Chunked array of size ${size}:`, result);



// --Second implementation
function chunkedArray(arr: number[], size: number): number[][] {
  const result: number[][] = []; // This will hold arrays of numbers, so it's a number[][]
  let chunk: number[] = []; // This is a temporary array to hold a chunk of numbers

  for (let i = 0; i < arr.length; i++) {
      chunk.push(arr[i]); // Add the current element to the chunk
      if (chunk.length === size) { // If the chunk reaches the specified size
          result.push(chunk); // Add the chunk to the result array
          chunk = []; // Reset the chunk for the next set of elements
      }
  }

  // If there are any remaining elements in the chunk, add them to the result
  if (chunk.length > 0) {
      result.push(chunk);
  }

  return result; // Return the array of chunks
};

console.log("Second implementation:",chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
