
// Arrays in JavaScript

// Constant arrays
const colors = ["red", "green", "blue"];
colors[0] = "yellow"; // OK: modifying elements
// colors = ["black"]; // ❌ Error: reassignment not allowed

// Array references
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 99;
console.log(arr1); // [99, 2, 3] — both refer to the same array

// Nested arrays
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log(matrix[1]);     // [3, 4]
console.log(matrix[1][0]);  // 3
