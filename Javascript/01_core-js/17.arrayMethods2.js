// Array Methods: forEach, map, filter, every, some, reduce

const numbers = [1, 2, 3, 4, 5]

/*
  1. forEach()
  - Executes a function once for each array element.
  - Does not return a new array.
*/
console.log("forEach:")
numbers.forEach(function (num) {
  console.log(num)
})


/*
  2. map()
  - Creates a new array by transforming each element of the original.
  - Returns a new array, does NOT modify the original.
*/
console.log("\nmap:")
const doubled = numbers.map(function (num) {
  return num * 2
})
console.log("Doubled:", doubled) // [2, 4, 6, 8, 10]

const squared = numbers.map(n => n * n)
console.log("Squared:", squared) // [1, 4, 9, 16, 25]


/*
  3. filter()
  - Returns a new array with elements that pass the condition.
  - Only includes elements where the callback returns true.
*/
console.log("\nfilter:")
const evens = numbers.filter(function (num) {
  return num % 2 === 0
})
console.log("Even numbers:", evens) // [2, 4]


/*
  4. every()
  - Returns true if ALL elements match the condition.
  - Returns false immediately if one fails.
*/
console.log("\nevery:")
const allPositive = numbers.every(function (num) {
  return num > 0
})
console.log("All positive?", allPositive) // true

const allEven = numbers.every(n => n % 2 === 0)
console.log("All even?", allEven) // false


/*
  5. some()
  - Returns true if AT LEAST ONE element passes the condition.
  - Returns false only if none match.
*/
console.log("\nsome:")
const hasEven = numbers.some(n => n % 2 === 0)
console.log("Has at least one even?", hasEven) // true

const hasNegative = numbers.some(n => n < 0)
console.log("Has negative?", hasNegative) // false


/*
  6. reduce()
  - Reduces the array to a single value.
  - Applies a function to each element, passing an accumulator.
*/
console.log("\nreduce:")
const sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current
}, 0)
console.log("Sum:", sum) // 15

const product = numbers.reduce((acc, val) => acc * val, 1)
console.log("Product:", product) // 120
