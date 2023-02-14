
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

const assertArraysEqual = function(actual, expected) {
if (eqArrays(actual, expected) === true) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
}
}

function without(arrMain, arrRemove){
  let resultArr = [];

  for (let i = 0; i < arrMain.length; i++){
    if (arrMain[i] instanceof Object) {
      resultArr.push(without(arrMain[i], arrRemove));
    } else if (!arrRemove.includes(arrMain[i])){
      resultArr.push(arrMain[i])
    }
  }  return resultArr;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without([1, 2, 3, 4, 5, 6], [1, 3, "6"])) // => [2, 3]
console.log(without([1, 2, 3], [5])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]