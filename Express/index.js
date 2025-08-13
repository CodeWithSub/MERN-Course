const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log("App is listning at port ", port);
})
app.use((req, res) => {
  console.log("Request received");
  let html = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>";
  res.send(html)
})