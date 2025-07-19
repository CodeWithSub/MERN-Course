let arr = ["my", "Name", "Is", "Subhransu"];
function concat(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(concat(arr));