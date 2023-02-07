const assertEqual = function(actual, expected) {
  if (expected === actual) { //console.assert(expected ===  actual)
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  //console.assert(expected ===  actual)
};

let tail = function(arr) {
  let last = [];
  for (let i = 1; i < arr.length; i++) {
    last.push(arr[i]);
  } return last;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse","Labs"]); // => will

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail([words]); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");