// --What is palindromes ?
// If reverse string is equal to the original one then that word is a palindroms.
// eg: 
// abba -> abba ✔
// cddc -> cddc ✔
// hello -> olleh ❌


const palindromes = (str: string) => str.split("").reverse().join("") === str;

console.log(palindromes('abba'));
