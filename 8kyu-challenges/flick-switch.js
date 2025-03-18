// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb


/*
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.


Examples:

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]


Notes:
    - "flick" will always be given in lowercase.
    - A list may contain multiple flicks.
    - Switch the boolean value on the same element as the flick itself.

*/


// Solution 1
function flickSwitch(words){
  // loop over array, fill with true, faced "flick" ? switch to the opposite and keep going.
  let state = true;
  const bolArr = [];
  
  for(let i = 0; i < words.length; i++) {
    if(words[i] === "flick") {
      state = !state
    }
    bolArr.push(state);
  }

  
  return bolArr;
}

// Solution 2
function flickSwitch(words) {
    let state = true;
    return words.map(word => (word === "flick" ? (state = !state) : state));
}


// Solution 3
function flickSwitch(words) {
  let state = true;
  const bolArr = [];

  words.forEach(word => {
    if (word === "flick") state = !state;
    bolArr.push(state);
  });

  return bolArr;
}

