const middle = require('../middle');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1, 2]))//1,2
console.log(middle([1, 2,5,6,7]))//5
console.log(middle([1]))//1
console.log(middle([]))//[]
assertEqual(assertArraysEqual(middle([1,2]),[1,2]), true)// true
assertEqual(assertArraysEqual(middle([1,2,3]),[2]), true)// true
assertEqual(assertArraysEqual(middle([1]),[1]), false)// false