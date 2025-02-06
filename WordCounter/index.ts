function wordCounter(text:string) {
  // --convert text to lower case.
  const lowerText = text.toLowerCase();
  
  // --hash table to store the count.
  const wordMap = {}; //--> Initialize empty object.
  
  // --split text into word 
  const words = lowerText.split(/\s+/);
  // console.log(words)
  
  // --Iterate through word.
  for(const word of words){
    if (word in wordMap) {
      wordMap[word]++;
    }else {
      wordMap[word] = 1;
    }
  }
  
  return wordMap;

}

const text = "Dog is dancing but dog can dance."
const theresult = wordCounter(text);
console.log(theresult);