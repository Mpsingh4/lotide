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


/* out loud code
Implement middle which will take in an array and return the middle-most element(s) of the given array.
The middle function should return an array with only the middle element(s) of the provided array. 
This means that the length of the returned elements could vary.
For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements,
 an array containing the two elements in the middle should be returned


 need to implement a function that will return the middle of an array 
 the task mentions that the array could vary so we can start with 
  lengthOfArray = array.length
  result = []
  
  it mentions with one or two elements to return an empty array so an if statement

  if (array.length < 3) return []

  from there we need a way to find the middle of an odd numbered array and the middle of an
  even numbered array. potentially use % === 1 or 0

  2 more if statements should suffice
  for odd numbers they cant divide by 2 so we'll have to find a way to round up and then subtract by 1
  math.ceil should work

  for even numbers it will have to be 2 seperate conditions. will still have to divide by 2 after 
  testing which one it returns we can use math.ceil for one and math.floor for the other 
 
  then return result 

 */
const middle = function(array) {
  let lengthOfArray = array.length;
    
  if (lengthOfArray.length > 3){
    return [];
  } 
  if (lengthOfArray % 2 === 0){
    return [array[Math.floor(lengthOfArray/2)-1], array[Math.ceil(lengthOfArray/2)]]
  }
  if (lengthOfArray % 2 === 1){
    return [array[Math.ceil(lengthOfArray/2) -1]]
  }   
}

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) [5, 6])) // => [5. 6]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [6]))) // => [6]