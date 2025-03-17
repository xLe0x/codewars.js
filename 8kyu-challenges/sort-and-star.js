// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/


// Solution 1
function twoSort(s) {
  let first = s[0];
  
  for(let i = 1; i < s.length; i++) {
    if(s[i] < first) {
      first = s[i];
    }
  }
  
  let res = "";
  for(let i = 0; i < first.length; i++) {
    res += first[i];

    // if index is not the last one
    if(i !== first.length - 1) {
      res += "***"
    }
  }
  
  return res;
}


// Solution 2
function twoSort(s) {
  let first = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] < first) {
      first = s[i];
    }
  }

  return first.split("").join("***");
}

// Solution 3
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}


// Solution 4
function twoSort(s) {
  let first = s.reduce((min, word) => word < min ? word : min);
  return first.split("").join("***");
}


// Solution 5
function twoSort (strings) {
  return [...strings]
    .sort()
    .shift()
    .split("")
    .join("***")
}
