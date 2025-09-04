//Prototypes are the mechanism by which js objects inherit features from one another.
// It is like a single template that all object inherit features from one another.

let arr1 = [1, 2, 3, 4];
console.log(arr1);

arr1.sayHello = () => { return "Hello" };

let arr2 = [5, 6, 7, 8];

arr2.sayHello = () => { return "Hello" };

arr1.sayHello === arr2.sayHello //False

arr1.__proto__.push = (n) => { console.log("Pushing " + n); }

arr1.push(5); //Pushing 5

arr1.pop === arr2.pop // true