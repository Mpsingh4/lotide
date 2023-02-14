fucntion swapper(key1, object1, key2, object2){
  console.log("swap!");
  let swapResult = 0; // swapresult = [""] did not work
  swapResult = object1[key1] // swapReseult = object1.key1[]
  object1[key1] = object2[key2];
  object2[key2] = swapResult;
  
  console.log("Object 1 : ", object1);
  console.log("Object 2 : ", object2);

}

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

npm run question 0

/*

array.sort(function(a,b){
  return a - b
})

const median = function(arr){
  let len = arr.length;
  let mid = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j && arr[j-1] > arr[j]; j--) {
    [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
  } if (arr.length > 0) {
      return arr[i]
  }
}
};

---------------------------------------------------------------------------------------------------------------------------
const sort = function(num){
for (let i = 0; i < num.length; i++) {
  for (let j = i; j && num[j-1] > num[j]; j--) {
    [num[j], num[j-1]] = [num[j-1], num[j]];
  }
}
}

const median = function(arr) {{
  let x = sort(arr);
  } return x;
};

console.log(median([6,2,3,4,9,6,1,0,5]));

