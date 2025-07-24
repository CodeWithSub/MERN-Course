// Example: Understanding `this` in JavaScript, especially with arrow functions

// Regular function: `this` depends on how the function is called
function RegularFunction() {
  // In a method, 'this' refers to the object
  // In the global context, 'this' refers to window (browser) or global (Node)
  console.log("Regular function this:", this);
}

// Arrow function: `this` is inherited from the enclosing scope (lexical this)
const ArrowFunction = () => {
  // 'this' is NOT bound by arrow functions—uses the 'this' from its outer context
  console.log("Arrow function this:", this);
};

// Example object with both function types as methods
const obj = {
  name: "Example Object",
  regular: function() {
    console.log("Object's regular method this.name:", this.name);
  },
  arrow: () => {
    // 'this' here does NOT refer to 'obj', but its outer (global) context
    console.log("Object's arrow method this.name:", this && this.name);
  }
};

// Call regular and arrow functions in global scope
RegularFunction();   // 'this' is the global object (window/global)
ArrowFunction();     // 'this' is also the global object (from outer scope)

// Call methods in the context of obj
obj.regular();       // 'this' is 'obj', so outputs "Example Object"
obj.arrow();         // 'this' is NOT 'obj', likely undefined or global

// Conclusion:
// Use regular functions for object methods if you need 'this' to refer to the object.
// Use arrow functions if you want to inherit 'this' from outer scope.

// END
