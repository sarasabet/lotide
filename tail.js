const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.slice(1)
  array.length === 0 ? newArray = [] : newArray = array.slice(1);
  
  return newArray;
};
module.exports = tail;

