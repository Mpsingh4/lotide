const assertEqual = require('./test/assertEqualTest');

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
};

module.exports = eqArrays;

/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false*/