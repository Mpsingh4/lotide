// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function(actual, expected) {
  if (expected === actual) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`Assertion Failed: [${actual}] !== [${expected}]`);

};

const countOnly = function(allItems, itemsToCount) {
  let countResult = {};

  for (let key in itemsToCount) {
    if (itemsToCount[key]) {
        allItems.forEach(element => {
            if (element === key) {
                if (!countResult[key]){
                    countResult[key] = 1;
        } else {
          countResult[key]++;
        }
      }
    });

  }
}return countResult;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);