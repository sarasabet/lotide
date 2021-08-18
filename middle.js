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
  if (arrLength < 2) {
    return array;
  }
  if (arrLength % 2 !== 0) {
    middleNum.push(array[Math.floor(arrLength / 2)])
    return ('odd', middleNum);
  }
  middleNum.push(array[(arrLength / 2) - 1])
  middleNum.push(array[arrLength / 2])

  return middleNum;

}
console.log(middle([1, 2]))
console.log(middle([1, 2,5,6,7]))
console.log(middle([1]))
console.log(middle([]))
assertEqual(assertArrayEqual(middle([1,2]),[1,2]), true)
assertEqual(assertArrayEqual(middle([1,2,3]),[2]), true)
assertEqual(assertArrayEqual(middle([1]),[1]), false)