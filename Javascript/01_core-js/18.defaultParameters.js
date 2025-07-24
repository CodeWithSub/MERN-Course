// Default parameters in functions

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Alice"); // Hello, Alice
greet();        // Hello, Guest
