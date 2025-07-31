let h2 = document.querySelector("h2");
let box = document.querySelector(".box")
let button = document.querySelector("button");
// function generateColor() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   let color = (`rgb(${r}, ${g}, ${b})`);
//   box.style.backgroundColor = color;
//   h2.innerText = `rgb(${r}, ${g}, ${b})`
//  console.log("Color changed");
// }


// With event listner
button.addEventListener("click", function () {
  box.style.backgroundColor = getRandomColor();
  let randomColor = getRandomColor();
  h2.innerText = randomColor;
})

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = (`rgb(${r}, ${g}, ${b})`);
  return color;
}