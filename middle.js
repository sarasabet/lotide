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

const middle = function(array) {
  let arrLength = array.length;
  let middleNum = [];
  let middArray = arrLength / 2;

  if (arrLength < 2) {// if the array is empty or has one item
    return array;
  }

  if (arrLength % 2 !== 0) {// if the array length is odd/3/7/9
    return (array.slice(Math.floor(middArray), Math.floor(middArray) + 1));
  }

  return array.slice( middArray-1, middArray+1); // if teh array length is even 2/4/6/10

}
console.log(middle([1, 2]))//1,2
console.log(middle([1, 2,5,6,7]))//5
console.log(middle([1]))//1
console.log(middle([]))//[]
assertEqual(assertArrayEqual(middle([1,2]),[1,2]), true)// true
assertEqual(assertArrayEqual(middle([1,2,3]),[2]), true)// true
assertEqual(assertArrayEqual(middle([1]),[1]), false)// false