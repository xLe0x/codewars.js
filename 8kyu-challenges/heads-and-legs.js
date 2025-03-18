// https://www.codewars.com/kata/574c5075d27783851800169e


/*
[Heads, Legs] = [72, 200]

VALID - [72, 200] =>             [44 , 28]   
                              [Chickens, Cows]

INVALID - [72, 201] => "No solutions" 
*/

// Solution 1
function animals(heads, legs){
  if (heads < 0 || legs < 0 || legs % 2 !== 0) return "No solutions";
  if(heads === 0 && legs === 0) return [0, 0];
  
  let cows = (legs - 2 * heads) / 2;
  let chickens = heads - cows;
  
  if (cows < 0 || chickens < 0 || !Number.isInteger(cows) || !Number.isInteger(chickens)) return "No solutions";

  return [chickens, cows];
}


// Solution 2
function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;
  
  if (legs & 1 || chickens > heads || cows > heads)
    return "No solutions";
  else
    return [chickens, cows];
}

// Solution 3
const animals = (h, l) => {
  const cows = (l - h * 2) / 2;
  const chickens = (l - cows * 4) / 2;
  
  if(/\.|-/g.test(`${chickens}${cows}`)) return 'No solutions'
  
  return [chickens, cows]
}
