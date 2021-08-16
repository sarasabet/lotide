// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected)  {
    result = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else  {
    result = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return result;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


