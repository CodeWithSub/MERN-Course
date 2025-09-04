// Classes are templates for creating objects

/* The constructor method is a special method of a class for creating and initializing an object instance of that class */

class Person {
  constructor(name, age) {
    this.name = name,
      this.age = age
  }
  talk() {
    console.log(`Hi, Myself ${this.name} and I can talk`);
  }
}

let p1 = new Person("Subhransu", 21);
let p2 = new Person("Ritesh", 19);

console.log(p1.age);
p2.talk()

console.log(p1.talk === p2.talk); //true