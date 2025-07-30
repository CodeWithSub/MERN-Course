let h2 = document.querySelector("h2");
// function changeColor(color, delay) {
//   setTimeout(() => {
//     h2.style.color = color;
//   }, delay)
// }
// changeColor("red", 1000)
// changeColor("blue", 2000)
// changeColor("green", 3000)

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h2.style.color = color;
    if (nextColorChange) {
      nextColorChange();
    }
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("blue", 2000, () => {
      changeColor("brown", 1000)
    })
  })
});