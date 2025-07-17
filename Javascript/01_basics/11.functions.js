// Functions in JavaScript

// 1. Function Definition (declaration)
function greetUser() {
  console.log("👋 Welcome to the JavaScript course!");
}

// Call the function
greetUser(); // Output: 👋 Welcome to the JavaScript course!

// 2. Function with Parameters
function greetByName(name) {
  console.log(`Hello, ${name}!`);
}

greetByName("Alice"); // Output: Hello, Alice!
greetByName("Bob");   // Output: Hello, Bob!

// 3. Function Returning a Value
function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(5, 4);
console.log("Area is:", area); // Output: Area is: 20

// 4. Function Expression (assigned to a variable)
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // Output: 7

// 5. Arrow Function (ES6)
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(6, 7)); // Output: 42

// Short arrow function with implicit return
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // Output: 5

// 6. Default Parameters
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}`);
}

sayHello("Charlie"); // Output: Hello, Charlie
sayHello();          // Output: Hello, Guest

// 7. Function to check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(7));  // Output: Odd
console.log(checkEvenOdd(12)); // Output: Even

// 8. Function using an array - calculate average
function calculateAverage(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
}

let avg = calculateAverage([80, 90, 100]);
console.log("Average score:", avg); // Output: Average score: 90

// 9. Nested Function Example
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();
// Output:
// Outer function
// Inner function
