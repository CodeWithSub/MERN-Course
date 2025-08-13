const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log("App is listning at port ", port);
})

app.get("/", (req, res) => {
  res.send("You requested to root path")
})
app.get("/apple", (req, res) => {
  let apple = {
    name: "apple",
    color: "red"
  }
  res.send(apple)

});
app.get("/orange", (req, res) => {
  let orange = {
    name: "orange",
    color: "orange"
  }
  res.send(orange)
});


//Path parameters

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  console.log(username, id);
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
  res.send(htmlStr)
})


//Query strings

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("Nothing searched")
    return
  }

  let htmlStr = `<h1>Search results for query: ${q}</h1>`
  res.send(htmlStr)
})

app.get("*", (req, res) => {
  res.send("Requested path does not exist");
});


// app.use((req, res) => {
//   console.log("Request received");
//   let obj = {
//     name: "Subhransu",
//     stack: "MERN"
//   };
//   res.send(obj)
// })