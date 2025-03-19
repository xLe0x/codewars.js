// https://www.codewars.com/kata/5899642f6e1b25935d000161


/*
You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

    The resulting array is sorted in ascending order.

    Any duplicate values are removed, so each integer appears only once.

    If both input arrays are empty, return an empty array.

No input validation is needed, as both arrays are guaranteed to contain zero or more integers.
Examples (input -> output)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

Happy coding!
*/


// Solution 1
function mergeArrays(arr1, arr2) {
  const finalArr = [];

  // add all elements of arr1 to finalArr   
  for(let i = 0; i < arr1.length; i++) {
    let item = arr1[i] ;
    finalArr.push(item);
  }

  // add all elements of arr2 to finalArr if they are not already in finalArr
  for(let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    let exists = false;
    for (let j = 0; j < finalArr.length; j++) {
      if (item === finalArr[j]) {
        exists = true;
        break;
      }
    }
    if(!exists) {
      finalArr.push(item);
    }
  }
  
  // sort finalArr by check if n element is bigger than n + 1 element, if so swap them!   
  for (let i = 0; i < finalArr.length; i++) {
    for (let j = i + 1; j < finalArr.length; j++) {
      if (finalArr[i] > finalArr[j]) {
        let temp = finalArr[i];
        finalArr[i] = finalArr[j];
        finalArr[j] = temp;
      }
    }
  }
  
  return finalArr;
}

// Solution 2
function mergeArrays(arr1, arr2) {
  const finalArr = Array.from(new Set([...arr1, ...arr2]));

  return finalArr.sort((a, b) => a - b);
}


// Solution 3
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}


// Solution 4
function mergeArrays(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2)
    .sort((a, b) => a - b)
}
