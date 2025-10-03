const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mysecrectstring",
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  if (name === "Anonymous") {
    req.flash("msg", "Some error occured");
  } else {
    req.flash("msg", "User registererd succesfully");
  } res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.msg = req.flash("msg");
  res.render("page.ejs", { name: req.session.name });
})

// app.get("/test", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You sent a response ${req.session.count} times`);
// })



app.listen(8080, () => {
  console.log("Server is listening");
});
