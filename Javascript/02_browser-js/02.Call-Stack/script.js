// JS Call Stack

function hello() {
  console.log("Insdide hello function")
  console.log("Hello");
}

function demo() {
  console.log("Calling hello function");
  hello();
}
console.log("Calling demo function");
demo();

function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  return two() + one();
}
let result = three();
console.log(result);