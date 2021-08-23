const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
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
module.exports = without;

const words = ["hello", "world", "lighthouse"];
const sampleArray = ["hello", "world", ];
assertEqual(assertArrayEqual(without(words, ["lighthouse"]),sampleArray), true);
assertEqual(assertArrayEqual(without(words, ["lighthouse"]),sampleArray), false);
