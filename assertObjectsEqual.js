const assertObjectsEqual = function(actual, expected) {
  let result = '';
  if (actual === expected)  {
    result = console.log(`😀😀😀 ${actual} === ${expected}`);
  } else  {
    result = console.log(`😔😔😔 ${actual} !== ${expected}`);
  }
  return result;
};

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

const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual((eqObjects(ab, ba)), true); 
assertObjectsEqual(eqObjects(ab, abc), false);
assertObjectsEqual(eqObjects(ba, abc), false);
