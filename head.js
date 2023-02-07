const assertEqual = function(actual, expected) {
  if (expected === actual) { //console.assert(expected ===  actual)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`Assertion Failed: ${actual} !== ${expected}`);
  //console.assert(expected ===  actual)
};

let head = function(arr){
    return arr[0]
    
}

assertEqual(head([2,2,3]), 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]),undefined);