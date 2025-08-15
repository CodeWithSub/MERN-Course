const express = require("express");
const app = express();
let path = require("path")

const port = 8080;
// app.use(express.static("public")) // Server should be started from the project root
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.listen(port, (req, res) => {
  console.log("App is listning at port: ", port);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data })
  } else {
    res.render("error.ejs")
  }
})
