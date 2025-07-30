// 1. Basic click + this usage
function basicClick(button) {
  button.textContent = "Clicked!";
  console.log("Button clicked:", button);
}

// 2. Mouseover
function mouseHover(el) {
  el.style.backgroundColor = "lightblue";
  console.log("Mouse over:", el);
}

// 3. Keyboard events
const keyboardInput = document.getElementById("keyboardInput");

keyboardInput.addEventListener("keydown", function (e) {
  console.log("Key down → key:", e.key, "code:", e.code);
});

keyboardInput.addEventListener("keyup", function (e) {
  console.log("Key up → key:", e.key, "code:", e.code);
});

// 4. Form events + extracting data
const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting
  const formData = new FormData(userForm); // extract data
  const data = Object.fromEntries(formData); // convert to object
  console.log("Form submitted:", data);
});

// 5. Input event (live updates)
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function () {
  sliderValue.textContent = slider.value;
});

// 6. Event Bubbling
const parentBox = document.getElementById("parentBox");

parentBox.addEventListener("click", function () {
  console.log("Parent box clicked (bubbling)");
});

// 7. Event Delegation
parentBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    console.log("Delegated click on:", e.target.textContent);
    e.target.style.backgroundColor = "#d1ffd1";
  }
});
