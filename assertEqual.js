//let emoji1 = ✅
//let emoji2 = ❌

const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
 
};

console.log(assertEqual("lighthouse labs", "bootcamp"));
console.log(assertEqual(1, 1));
