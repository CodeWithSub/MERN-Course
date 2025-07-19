// Methods in JavaScript

// 1. A method is a function inside an object
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello!");
  }
};

person.greet(); // Hello!

// 2. 'this' keyword refers to the object itself
const user = {
  name: "Bob",
  sayName: function () {
    console.log("My name is " + this.name);
  }
};

user.sayName(); // My name is Bob

// 3. Shorter method syntax (ES6)
const car = {
  brand: "Toyota",
  showBrand() {
    console.log("Brand: " + this.brand);
  }
};

car.showBrand(); // Brand: Toyota
