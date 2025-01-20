// Imagine you have a list of numbers and a target number.
// Your job is to find two numbers in the list that add up to the target number.
// You also need to tell which positions (indices) those two numbers are in the list.

// Example:
// Given the list [2, 7, 11, 15] and the target number 9,
// your function should return [0, 1] because 2 + 7 = 9 and their positions are at indices 0 and 1.

function twoSum(nums: number[], target: number): [number, number] | null {
  const numToIndexMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(numToIndexMap.has(complement)) { 
      return [numToIndexMap.get(complement) as number, i];
    }
    numToIndexMap.set(nums[i], i);
  }

  return null;
};

const nums = [2, 7, 11, 15];
const target = 10;
const sum = twoSum(nums, target);
console.log(`The target sum of ${target} is found at indices:`,sum);



// This is not better solution

function twoSumOfTarget(nums: number[], target: number): [number, number] {
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // For each number, check the rest of the array
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return the indices
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // If we get here, no two numbers add up to the target
  return null;
};

const list = [2, 7, 11, 15];
const targetNum = 9;
const indices = twoSumOfTarget(list, targetNum);
console.log(`The target sum of ${targetNum} is found at indices:`, indices);
