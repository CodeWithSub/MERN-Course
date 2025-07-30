// function saveToserver(data) {
//   let internetSpeed = Math.floor(Math.random() * 11);
//   return new Promise((resolve, reject) => {
//     if (internetSpeed > 4) {
//       resolve("Data is saved: " + data);
//     } else {
//       reject("Failuer: Weak connectionb");
//     }
//   })
// }

// saveToserver("Subhransu")
//   .then((result) => { //result in promise
//     console.log("Promise resolved");
//     console.log("Result:", result);
//     return saveToserver("Ritesh")
//   }).then(() => {
//     console.log("Promise2 resolved");
//     return saveToserver("Disha")
//   }).then(() => {
//     console.log("Promise3 resolved");
//   })
//   .catch((error) => { //error in promise
//     console.log("Promise rejected");
//     console.log(error);
//   })

let h2 = document.querySelector("h2");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h2.style.color = color;
      resolve("Color changed")
    }, delay);
  })
}

changeColor("red", 1000)
  .then(() => {
    return changeColor("green", 1000)
  }).then(() => {
    return changeColor("blue", 3000)
  }).then(() => {
    return changeColor("pink", 2000)
  })
