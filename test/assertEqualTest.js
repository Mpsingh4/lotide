
const assertEqualTest = function(actual, expected) {
  if (expected === actual) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

module.exports = assertEqualTest;