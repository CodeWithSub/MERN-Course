// Scope and return keyword in JavaScript

// 1. Global Scope
let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // can access globalVar
}

showGlobal();

// 2. Function Scope
function localExample() {
  let localVar = "I'm local";
  console.log(localVar);
}

localExample();
// console.log(localVar); // ❌ Error: localVar is not defined

// 3. Block Scope (let, const only)
if (true) {
  let blockLet = "Block scoped";
  const blockConst = "Also block scoped";
  var blockVar = "Var is NOT block scoped";
  console.log(blockLet, blockConst);
}

// console.log(blockLet); // ❌ Error
// console.log(blockConst); // ❌ Error
console.log(blockVar); // ✅ Works (var is function-scoped)

// 4. Lexical Scope (Nested Functions)
function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar); // inner can access outer's variable
  }

  inner();
}

outer();

// 5. return Keyword
function add(a, b) {
  return a + b; // returns result to the caller
}

let sum = add(10, 5);
console.log(sum); // 15

// 6. return Ends Function Execution
function stopEarly() {
  console.log("Before return");
  return;
  console.log("After return"); // ❌ This line will never run
}

stopEarly();

// 7. return with Condition
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
