const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
 
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

function eqArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)){
      return false;
  }
  if (arr1.length !== arr2.length){
      return false;
  }
  for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
          return false;
      }
  } return true
}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const pantObject3 = { size: "blue", color: "large" };
const pantObject2 = { color: "blue", size: "large" };
const pantObject = { size: "large", color: "blue" };
console.log(eqObjects(pantObject , pantObject2)); // => true
console.log(assertEqual(eqObjects(pantObject , pantObject2)), true);
console.log(eqObjects(pantObject , pantObject3)); // => false
console.log(assertEqual(eqObjects(pantObject , pantObject3)));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject))); // => false