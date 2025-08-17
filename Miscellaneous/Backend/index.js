const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.listen(port, () => {
  console.log("App is listning at port: ", port);
})

//GET request 
app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Standard GET request,Welcome ${user}`)
})
//POST rquest
app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send("Standard POST request, Welcome " + user); //In Express, res.send() expects a single argument
})