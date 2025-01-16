const number:number[] = [1,2,3,4,5];

// --O(1)--
// Accessing an element in an array by index is an O(1) operation.
const getElement = (arr:number[], index:number) => arr[index];

console.log('Element at index 2:', getElement(number, 2)); // Output: 3