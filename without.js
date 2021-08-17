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
const assertArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (const num in arr1) {
    if (arr2[num] !== arr1[num])
      return false;
  }
  return true;
};
// the func splice/ take out the simmilar items mentioned in the array , and return the newArray
const without = (words, array) => {
  let newArray = words;
  for (const word of newArray) {
    for (const element of array) {
      element === word ? newArray.splice(newArray.indexOf(word)) : newArray;
    }
  }
  return  newArray;
};


const words = ["hello", "world", "lighthouse"];
const sampleArray = ["hello", "world", ];
assertEqual(assertArrayEqual(without(words, ["lighthouse"]),sampleArray), true);
assertEqual(assertArrayEqual(without(words, ["lighthouse"]),sampleArray), false);
