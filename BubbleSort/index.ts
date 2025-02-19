function bubbleSort(arr: number[]): number[] {
  // Outer loop to iterate over the array from the end to the beginning
  for (let i = arr.length - 1; i > 0; i--) {
    // console.log(`Pass ${arr.length - i}:`); // Log the current pass number
    // Inner loop to iterate through the array up to the last unsorted element
    for (let j = 0; j < i; j++) {
      // console.log(`Comparing elements at index ${j} and ${j + 1}: ${arr[j]} > ${arr[j + 1]}`); // Log the elements being compared
      // Compare the current element with the next element
      if (arr[j] > arr[j + 1]) {
        // console.log(`Swapping elements at index ${j} and ${j + 1}: ${arr[j]} with ${arr[j + 1]}`); // Log the swap
        // Swap the elements if the current element is greater than the next element
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // console.log(`Array after swap: ${arr}`); // Log the array after the swap
      }
    }
    // console.log(`Array after pass ${arr.length - i}: ${arr}`); // Log the array after each pass
  }
  // Return the sorted array
  return arr;
}

// Example array to be sorted
const myArr = [4, 2, 6, 5, 1, 3]
// Call the bubbleSort function and store the result
const res = bubbleSort(myArr)
// Log the sorted array to the console
console.log(res)
