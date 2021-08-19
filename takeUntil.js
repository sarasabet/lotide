const takeUntil = function(array, callback) {
  let  result = [];

  for (let item of array) {
    if (callback(item)) {
      result = array.slice(0,  array.indexOf(item));
      return result;     
    }
  }
}
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
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]), true);
assertEqual(assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);

