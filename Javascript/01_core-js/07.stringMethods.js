
// String methods

let text = "  JavaScript is fun!  ";

// trim()
let trimmed = text.trim();
console.log(trimmed);

// toUpperCase()
console.log(trimmed.toUpperCase());

// toLowerCase()
console.log(trimmed.toLowerCase());

// indexOf()
console.log(trimmed.indexOf("is"));

// slice()
console.log(trimmed.slice(0, 10));

// replace()
console.log(trimmed.replace("fun", "awesome"));

// repeat()
console.log(trimmed.repeat(2));

// Method chaining
let result = "  Hello World  "
  .trim()
  .toLowerCase()
  .replace("hello", "hi")
  .repeat(2);

console.log(result);
