// https://www.codewars.com/kata/539ee3b6757843632d00026b

/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]
*/


// Solution 1
var capitals = function (word) {
  const indices = [];
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    if(letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      indices.push(i);
    }
  }
  
  return indices
};


// Solution 2

var capitals = function (word) {
  const indices = [];
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    if(/[A-Z]/.test(letter)) {
      indices.push(i);
    }
  }
  
  return indices
};


// Solution 3
var capitals = function (word) {
  const indices = [];
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter >= 'A' && letter <= 'Z') {
      indices.push(i);
    }
  }

  return indices;
};

