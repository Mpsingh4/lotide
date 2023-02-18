
const assertEqual = require('./test/assertEqualTest');
 
let head = function(arr){
    return arr[0]
    
};

module.exports = head;

assertEqual(head([2,2,3]), 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Jello");
assertEqual(head([]),undefined);