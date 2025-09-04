//  Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes

// class Person {
//   constructor(name, age) {
//     this.name = name,
//     this.age = age
//   }
//   talk() {
//     console.log(`Hi, Myself ${this.name} and I can talk`);
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age);
//     this.subject = subject
//   }
// }

// class Student extends Person {
//   constructor(name, age, marks) {
//     super(name, age);
//     this.marks = marks
//   }
// }


// let s1 = new Student("Subhransu", 21, 82);

// console.log(s1.name);
// s1.talk()

class Mammals {
  constructor(name) {
    this.type = "Warm blooded"
    this.name = name;
  }

  eat() {
    console.log("Yes I can eat");
  }
}

class Cat extends Mammals {
  constructor(name) {
    super(name)
  }
  mewo() {
    console.log("Mewo mewo mewo..");
  }
}
class Dog extends Mammals {
  constructor(name) {
    super(name,)
  }
  bark() {
    console.log("Bhow bhow bhow..");
  }
  eat() {
    console.log("Dog is eating"); //Override
  }
}

let d1 = new Dog("Husky");
console.log(d1.type);

d1.eat()

let c1 = new Cat("Kitty");
c1.eat()