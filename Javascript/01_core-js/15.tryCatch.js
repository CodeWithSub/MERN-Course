// try and catch in JavaScript

try {
  let result = 10 / 0;
  console.log(result); // Infinity
  let x = y + 1; // ❌ y is not defined
} catch (error) {
  console.log("Error caught:", error.message);
}

console.log("Program continues...");
