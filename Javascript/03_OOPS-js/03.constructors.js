function Person(name, age) { //Doesn't return anything and start with a capital
  this.name = name,
    this.age = age
}
Person.prototype.talk = function () {
  console.log(`Hello, myself ${this.name}`);
}

let p1 = new Person("Subhransu", 21); /* The new operator.lets developers createan instance of a user defined object type or of one of the built-in object types that has a constructor function  */
console.log(p1.name);
p1.talk()

