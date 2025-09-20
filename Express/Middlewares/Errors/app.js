const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is forbidden")
})


// Error handling middlewares

app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message)
});

app.use((req, res) => {
  res.send("Page not found")
});

app.listen(8080, ()=>{
  console.log("Server is running");
})