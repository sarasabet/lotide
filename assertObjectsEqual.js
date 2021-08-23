const assertEqual = require('./assertEqual');


const eqObjects = function(object1, object2) {

  const keys = Object.keys(object1);
  const keys2 = Object.keys(object2);

  for (const key of keys) {
    if (object1[key] !== object2[key]) return false;
  }
  for (const key of keys2) {
    if (object2[key] !== object1[key]) return false;
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    console.log(`Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual

const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true); 
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ba, abc), false);
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 3 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '1'});
