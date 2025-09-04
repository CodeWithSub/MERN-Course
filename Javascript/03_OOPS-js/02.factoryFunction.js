function Person(name, age) {  //Factory function
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello, My name is ${name}`);
    }
  }
  return person
}

let p1 = Personerson("Subhransu", 21);
console.log(p1);

p1.talk()