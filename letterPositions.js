const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  sentence.split('').forEach((letter, key) => {
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(key);
  });

  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);

  }
  
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);