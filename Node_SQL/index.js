require('dotenv').config({ path: __dirname + '/.env' });
const { faker } = require('@faker-js/faker');  //Generate random data
const mysql = require('mysql2');
const express = require('express');
const path = require('path')
const app = express();
const methodOverride = require('method-override')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))


// Create the connection to databaseC:/Program Files/MySQL/MySQL Server 8.0/bin/mysql.exe" -u root -p
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
  ];
}

app.get("/", (req, res) => {
  let q = 'SELECT COUNT(*) FROM user'
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      let totalUsr = result[0]["COUNT(*)"];
      res.render("home.ejs", { totalUsr });
    })
  }
  catch (err) {
    console.log(err);
    res.send("Some error occured")
  }
})

// Show route

app.get("/users", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("show.ejs", { users })
    })
  }
  catch (err) {
    console.log(err);
    res.send("Some error occured")
  }
})

//Edit route

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0]
      res.render("edit.ejs", { user })
    })
  }
  catch (err) {
    console.log(err);
    res.send("Some error occured")
  }
})

// Update route

app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPassword, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(user);
      if (formPassword != user.password) {
        res.send("Wrong password!")
      }
      else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`
        connection.query(q2,(err,result)=>{
          if (err) throw err;
          res.redirect("/users")
        })
      }
      
    })
  }
  catch (err) {
    console.log(err);
  }
})

app.listen("8080", () => {
  console.log("Server is running");
})


// // Inserting new dtaa
// let q = "INSERT INTO user (id, username, email, password) VALUES ?"
// // let users = [["126", "126_user", "126@gmail.com", "126"],
// // ["124", "124_user", "124@gmail.com", "124"],
// // ["125", "125_user", "125@gmail.com", "125"]];

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());  // 100 fake user data
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   })
// } catch (err) {
//   console.log(err);
// }
// connection.end();



