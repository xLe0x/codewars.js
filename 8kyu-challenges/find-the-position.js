// https://www.codewars.com/kata/5808e2006b65bff35500008f


/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/



// Solution 1
function position(letter){
  const letters = ["a","b","c", "d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return `Position of alphabet: ${letters.indexOf(letter) + 1}`;
}

// Solution 2
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

// Solution 3
function position(letter) {
  const alphabet = Object.fromEntries([...Array(26)].map((_, i) => [String.fromCharCode(i + 97), i + 1]));
  return `Position of alphabet: ${alphabet[letter]}`;
}

// Solution 4
function position(letter) {
  const alphabetMap = new Map([...Array(26)].map((_, i) => [String.fromCharCode(i + 97), i + 1]));
  return `Position of alphabet: ${alphabetMap.get(letter)}`;
}
