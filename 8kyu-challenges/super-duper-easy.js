// https://www.codewars.com/kata/55a5bfaa756cfede78000026

/*

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

// Solution 1
function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

// Solution 2
function problem(x) {
  try {
    if (typeof x !== "number") throw "Error";
    return x * 50 + 6;
  } catch (e) {
    return e;
  }
}


// Solution 3
function problem(x) {
  return isFinite(x) ? x * 50 + 6 : "Error";
}


// Solution 4
function problem(x) {
  return ["number"].includes(typeof x) ? x * 50 + 6 : "Error";
}

// Solution 5
function problem(x) {
  return { number: x * 50 + 6 }[typeof x] ?? "Error";
}

