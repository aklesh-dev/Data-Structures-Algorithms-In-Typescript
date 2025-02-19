function selectionSort(arr: number[]): number[] {
  // Iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current position (i) is the minimum
    let minIndex = i;

    // Compare the current element with the rest of the elements in the array
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller element is found, update the minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minimum element is not at the current position (i),
    // swap the current element with the minimum element
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  // Return the sorted array
  return arr;
}

// Example array to be sorted
const sArr = [4, 2, 6, 5, 1, 3];

// Call the selectionSort function and store the result
let r = selectionSort(sArr);

// Log the sorted array to the console
console.log(r);
