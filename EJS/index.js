const express = require("express");
const path = require("path")
const app = express();

app.listen("3000", (req, res) => {
  console.log("App is listning at port 3000");
})
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views")) //setting views directory

app.get("/", (req, res) => {
  res.render("home.ejs");
})
app.get("/ig/:username", (req, res) => {
  const followers = ["Sub", "Disha", "Neha", "Ritesh"];
  let { username } = req.params
  res.render("insta.ejs", { username, followers })
})

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: diceVal })
})
