// Spread operator (...)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // copy and add
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Spread in function arguments
function sum(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(sum(...nums)); // 60
