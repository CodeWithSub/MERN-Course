let sum = (a, b) => a + b;
let mul = (a, b) => a * b;
let g = 9.8;
let PI = 3.14;

let obj = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI
}
module.exports = obj;
//or
module.exports = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI
}
//or
module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14;
//or
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.PI = 3.14;
