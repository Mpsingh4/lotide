const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  if (key1.length !== key2.length) {// check if same number of keys
    return false;
  }
  for (const key of key1) {
    if (object1[key] !== object2[key]) {// check if key values are the same
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
  if (eqObjects(actual, expected) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(`Example label: ${inspect(actual)}`);