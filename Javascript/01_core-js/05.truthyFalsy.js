
// Truthy and Falsy values in JavaScript

// Falsy values: false, 0, "", null, undefined, NaN
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Everything else is truthy
console.log(Boolean("hello"));    // true
console.log(Boolean(123));        // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true

// Example usage in conditionals
let value = "text";

if (value) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}
