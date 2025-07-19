let num = parseInt(prompt("Enter a number :"))
function sum(num) {
  while (isNaN(num) || num <= 0) {
    num = parseInt(prompt("Enter a valid number :"))
  }
  let newNum = 0;
  for (let i = 0; i <= num; i++) {
    newNum += i;
  }
  return newNum;
}
alert(`The sum is ${sum(num)}`);
console.log(sum(num));