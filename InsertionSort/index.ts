function insertionSort(arr: number[]): number[] {
  // Loop through the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // The current element to be inserted into the sorted portion of the array
    let key = arr[i]; // current element
    // Start comparing with the element just before the current element
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than the key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--; // Move to the previous element
    }

    // Place the key at after the element just smaller than it.
    arr[j + 1] = key;
  }
  // Return the sorted array
  return arr;
}

// Example unsorted array
const unsortedArr = [5, 2, 4, 6, 1, 3];
// Call the insertionSort function and store the result
const Result = insertionSort(unsortedArr);
// Log the sorted array to the console
console.log(Result);
