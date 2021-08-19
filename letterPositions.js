const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected)  {
    result = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else  {
    result = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return result;
};
// check if two arrays are equal
const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (const num in arr1) {
    if (arr2[num] !== arr1[num]) 
      return false;
  }
  return true;
}


const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {// get index of each letter 

    if (results[sentence[index]]) {// if the letter is already exist in the results  push the number to the array 
      results[sentence[index]].push(parseInt(index))

    } else { // if the letter does not exist , creta a key/[value] for it 
      results[sentence[index]] = [parseInt(index)];
    }
    
  }

  return results;
};

assertEqual(assertArraysEqual(letterPositions("hello").e, [1]), true);
assertEqual(assertArraysEqual(letterPositions("hello").l, [2, 3]), true);

