// https://www.codewars.com/kata/57cc975ed542d3148f00015b


/*
You will be given an array `a` and a value `x`. All you need to do is check whether the provided array contains the value.

`a` can contain numbers or strings. `x` can be either.

Return true if the array contains the value, false if not.

*/

// Solution 1
function check(a, x) {
  for(let i = 0; i < a.length; i++) {
    
    if(a[i] === x) return true;
  
  }

  return false;
}

// Solution 2
function check(a, x) {
  return a.includes(x);
}

// Solution 3
function check(a, x) {
  return a.indexOf(x) !== -1;
}


// Solution 4
function check(a, x) {
  return a.some(element => element === x);
}


// Solution 5
function check(a, x) {
  return a.find(element => element === x) !== undefined;
}

// Solution 6
function check(a, x) {
  return a.findIndex(element => element === x) !== -1;
}

