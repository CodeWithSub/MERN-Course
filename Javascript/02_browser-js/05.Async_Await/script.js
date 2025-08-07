// async function greet() {
//   return "hello";
// }
// greet().then((res) => {
//   console.log("promise is resolved");
//   console.log("promise is:", res);
// })
//   .catch((err) => {
//     console.log("promise is rejected");
//     console.log(err);
//   })

// let demo = async () => {
//   return 0;
// }
// console.log(demo);
let h1 = document.querySelector("h1")
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    console.log(a);
    await changeColor("lightpink", 1000);
    changeColor("orange", 1000);
  }
  catch (error) {
    console.log("Something went wrong");
  }
}
demo()