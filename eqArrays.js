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
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (const num in arr1) {
    if (arr2[num] !== arr1[num]) 
      return false;
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2,3]), true); 
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); 
assertEqual(eqArrays([], []), true); 
assertEqual(eqArrays([1, 2, 3], [3,, 2,'1']), true); 


