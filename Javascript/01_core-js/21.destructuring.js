// Destructuring in arrays and objects

// Array destructuring
const scores = [90, 80, 70];
const [first, second] = scores;
console.log(first, second); // 90 80

// Object destructuring
const user = {
  name: "Bob",
  age: 25,
  country: "USA"
};

const { name, country } = user;
console.log(name, country); // Bob USA

// Rename during destructuring
const { age: userAge } = user;
console.log(userAge); // 25
