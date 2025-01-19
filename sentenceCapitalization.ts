const capitalize = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const inputSentence = "the quick brown fox jumps over the lazy dog";
const inputSentence2 = "THE QUICK brown fox jumps over the lazy dog";
const capitalizedSentence = capitalize(inputSentence2);
console.log(capitalizedSentence);

const sentenceCapitalization = (sentence: string): string => {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const capitalizedSentence2 = sentenceCapitalization(inputSentence2);
// console.log(capitalizedSentence2);
