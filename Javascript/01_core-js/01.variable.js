// variable.js
// Topic: Variables in JavaScript

// ----------------------
// 1. What is a Variable?
// ----------------------
// A variable is a named container for storing data.
// In JavaScript, you can declare variables using var, let, or const.

// ----------------------------
// 2. Variable Declaration
// ----------------------------

// Using var (function-scoped, hoisted)
var name = "Alice"; // Can be re-declared and updated

// Using let (block-scoped, not hoisted like var)
let age = 25; // Can be updated but not re-declared in the same scope

// Using const (block-scoped, constant value)
const country = "USA"; // Must be initialized and cannot be changed

// ----------------------------
// 3. Variable Naming Rules
// ----------------------------
// - Must begin with a letter, $, or _
// - Cannot start with a number
// - Case sensitive (e.g., myVar ≠ MyVar)
// - Avoid reserved keywords

let $price = 99.99;
let _isAvailable = true;
// let 1number = 10; // ❌ Invalid
// let let = "keyword"; // ❌ Invalid

// ----------------------------
// 4. Data Types Stored in Variables
// ----------------------------
let str = "Hello World"; // String
let num = 42;            // Number
let isActive = true;     // Boolean
let nothing = null;      // Null
let notDefined;          // Undefined
let symbol = Symbol();   // Symbol (unique value)
let obj = { key: "value" }; // Object

// ----------------------------
// 5. Dynamic Typing
// ----------------------------
// JavaScript is dynamically typed - variables can change type at runtime

let dynamic = "Text";
dynamic = 100; // Now a number

// ----------------------------
// 6. Best Practices
// ----------------------------
// Use `const` by default, unless the variable needs to change
// Use `let` when you need to reassign the variable
// Avoid using `var` in modern JavaScript
// Use meaningful variable names

const PI = 3.14159;
let userScore = 0;

// ----------------------------
// 7. Summary
// ----------------------------
// - Use `let` and `const` instead of `var`
// - Understand scope and mutability
// - Use clear and descriptive names

console.log("Variable topic demo completed.");
