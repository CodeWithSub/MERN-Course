// Object Literals in JavaScript

// 1. Object Syntax
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};

// 2. Get Values
console.log(person.name);      // dot notation
console.log(person["age"]);    // bracket notation

// 3. Add or Update Values
person.city = "New York";      // add
person.age = 31;               // update
console.log(person);

// 4. Delete a Property
delete person.isStudent;
console.log(person);

// 5. Check if Property Exists
console.log("name" in person);     // true
console.log("isStudent" in person); // false

// 6. Array of Objects
const users = [
  { username: "john", score: 50 },
  { username: "jane", score: 80 },
  { username: "doe", score: 65 }
];

console.log(users[1].username); // "jane"

// Loop through array of objects
for (let user of users) {
  console.log(`${user.username}: ${user.score}`);
}

// 7. Nested Object
const post = {
  title: "JS Tips",
  author: {
    name: "Dev Guru",
    verified: true
  }
};

console.log(post.author.name); // "Dev Guru"

// 8. Math Object (built-in utility object)
console.log(Math.PI);             // 3.14159...
console.log(Math.round(4.7));     // 5
console.log(Math.floor(4.9));     // 4
console.log(Math.ceil(4.1));      // 5
console.log(Math.random());       // random number between 0 and 1
console.log(Math.max(10, 20));    // 20
console.log(Math.min(10, 20));    // 10
console.log(Math.pow(2, 3));      // 8
