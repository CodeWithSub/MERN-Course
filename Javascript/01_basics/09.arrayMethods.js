    
// Array methods

let fruits = ["apple", "banana", "cherry"];

// push() - adds to end
fruits.push("date");
console.log(fruits); // ["apple", "banana", "cherry", "date"]

// pop() - removes last item and returns it
let lastFruit = fruits.pop();
console.log(lastFruit); // "date"
console.log(fruits);    // ["apple", "banana", "cherry"]

// unshift() - adds to start
fruits.unshift("avocado");
console.log(fruits); // ["avocado", "apple", "banana", "cherry"]

// shift() - removes first item and returns it
let firstFruit = fruits.shift();
console.log(firstFruit); // "avocado"
console.log(fruits);     // ["apple", "banana", "cherry"]

// indexOf() - returns index or -1
console.log(fruits.indexOf("banana")); // 1

// includes() - checks if element exists
console.log(fruits.includes("cherry")); // true

// concat() - merges arrays
let tropical = ["mango", "papaya"];
let allFruits = fruits.concat(tropical);
console.log(allFruits);

// reverse() - reverses array in place
allFruits.reverse();
console.log(allFruits);

// sort() - sorts array (alphabetically for strings)
let names = ["Tom", "Alice", "Bob"];
names.sort();
console.log(names);

// slice(start, end) - returns shallow copy
let sliced = names.slice(0, 2);
console.log(sliced); // ["Alice", "Bob"]

// splice(start, deleteCount, ...items) - changes array
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99, 100); // remove 1 at index 2 and insert 99, 100
console.log(numbers); // [1, 2, 99, 100, 4, 5]

// Nested access example
let complex = [1, [2, [3, 4]]];
console.log(complex[1][1][0]); // 3
