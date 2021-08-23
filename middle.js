const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
