// setTimeout and setInterval

// setTimeout - runs once after delay (ms)
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval - runs repeatedly every interval
let count = 0;
const timer = setInterval(function () {
  count++;
  console.log("Interval count:", count);
  if (count === 3) {
    clearInterval(timer); // stop after 3 runs
  }
}, 1000);
