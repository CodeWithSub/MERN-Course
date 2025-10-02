const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser("secretcode"));

app.get("/cookies", (req, res) => {
  res.cookie("color", "Green");
  res.cookie("greet", "Hello");
  res.cookie("name", "Subhransu", { signed: true });
  res.cookie("city", "Dhenkanal", { signed: true });
  res.cookie("country", "India", { signed: true });
  res.send("Cookie Recieved");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  res.send(`The cookie name is ${name}`);
});

app.get("/verify", (req, res) => {
  let { name, city, country } = req.signedCookies;
  console.log(name);
  console.log(city); // undefined if tampered
  console.log(country);// false if changed only value
  res.send("Verified")
});

app.listen("8080", () => {
  console.log("App is listing at 8080");
});