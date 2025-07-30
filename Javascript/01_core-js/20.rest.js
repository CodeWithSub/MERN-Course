// Rest Parameter in JavaScript

// 1. Basic Example: Collect multiple arguments into an array
function sum(...numbers) {
  console.log("Arguments as array:", numbers);
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum:", sum(1, 2));              // 3
console.log("Sum:", sum(5, 10, 15, 20));     // 50

// 2. Mix with regular parameters
function greet(greeting, ...names) {
  for (let name of names) {
    console.log(`${greeting}, ${name}`);
  }
}

greet("Hello", "Alice", "Bob", "Charlie");
// Hello, Alice
// Hello, Bob
// Hello, Charlie

// 3. Rest must be the last parameter (Syntax Rule)
// function invalid(...args, last) {} // ❌ Syntax Error

// 4. Use in arrow functions
const collect = (...items) => {
  return items;
};

console.log("Collected items:", collect("pen", "paper", "eraser"));

// 5. Practical: Combining values
function combine(base, ...extras) {
  return [base, ...extras];
}

console.log("Combined array:", combine("Core", "JS", "HTML", "CSS"));
