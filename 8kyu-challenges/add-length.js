// https://www.codewars.com/kata/559d2284b5bb6799e9000047

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

```
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
```

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/


// Solution 1
function addLength(str) {
  const words = str.split(" ");

  const lenArr = [];

  for(let word of words) {
      lenArr.push(`${word} ${word.length}`);
  }

  return lenArr;
}


// Solution 2

function addLength(str) {
  return str.split(" ").map(word => `${word} ${word.length}`)
}


// Solution 3
function addLength(str) {
  return str.split(" ").reduce((acc, word) => {
    acc.push(`${word} ${word.length}`);
    return acc;
  }, []);
}


// Solution 4
function addLength(str) {
  return Array.from(str.split(" "), word => `${word} ${word.length}`);
}


