const assertEqual = function(actual, expected) {
  if (expected === actual) { //console.assert(expected ===  actual)
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  //console.assert(expected ===  actual)
};

const countLetters = function(str){
  const lowerCaseStr = str.toLowerCase();
  const result = {};
  for (let key of lowerCaseStr) {
    if (!result[key]) {
      result[key] = 1;
    } else {
      result[key]++;
    }
  } return result;
}

console.log(countLetters("lighthouse in the house"));