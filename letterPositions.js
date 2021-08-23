const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

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
module.exports = letterPositions;

assertEqual(assertArraysEqual(letterPositions("hello").e, [1]), true);
assertEqual(assertArraysEqual(letterPositions("hello").l, [2, 3]), true);

