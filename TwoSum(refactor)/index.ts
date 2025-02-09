function twoAdd(nums:number[], target:number): [number, number] | []{
  const numMap = {} //--> initialize empty object, to store indices.

  // --iterate throught the nums array.
  for(let i = 0; i < nums.length; i++){
    const comp = target - nums[i];
    // console.log(`${target} - ${nums[i]} = `,comp)
    if(comp in numMap && numMap[comp] !== i){
      return [numMap[comp], i];
    }
    numMap[nums[i]] = i;  //--> Store the index of the number.
  }

  return [];
  
}

const numsArr = [2,3,5,8,9];
const getTarget = 9;

const getresult = twoAdd(numsArr, getTarget);

console.log(getresult)