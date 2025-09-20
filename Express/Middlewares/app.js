const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

app.use((req, res, next) => {
  console.log("I am 1st middleware");
  next();
});

app.use((req, res, next) => {
  console.log("I am 2nd middleware");
  next()
});

// Creating utility middleware
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.path, req.time, req.hostname);
  next();
});


app.get("/random", (req, res, next) => {
  res.send("This is a random page");
});

app.get("/err", (req, res, next) => {
  abcd = abcd;
});

// app.use("/", (req, res, next) => {
//   res.send("I am root");
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED")
  }
};


app.get("/api", checkToken, (req, res) => {
  res.send("data")
});


app.listen("8080", () => {
  console.log("Server is running fine");
});
