/*  we need to identify if an array has raisins in our chocolate chips
if they do we return "raisin alert!"
if not its all good.

array must contain strings that return the correct assessment of raisins present.

*/

const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++){
    if (cookie[i] !== "🍫") return "Raisin Alert!"
  } return "All good!"
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

/* 
expected output:
Raisin alert! x2
All good!
*/