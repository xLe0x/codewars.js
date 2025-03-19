// https://www.codewars.com/kata/57eaeb9578748ff92a000009


/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/


// Solution 1
function sumMix(x){
  let sum = 0;
  for(let i = 0; i < x.length; i++) {
    sum += +x[i];
  }
  
  return sum
}

// Solution 2
function sumMix(x){
  return x.reduce((a,b) => +a + +b);
}

// Solution 3
function sumMix(x) {
  return x.map(Number).reduce((a, b) => a + b, 0);
}


// Solution 4
function sumMix(x) {
  return x.reduce((sum, num) => sum + Number(num), 0);
}
