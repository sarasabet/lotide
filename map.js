const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
// const test = function(word) {return word.toUpperCase() }
// const results1 = map(words, test);
const results1 = map(words, word => word[0]);


assertEqual(assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]), true);




