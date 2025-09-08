const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  })

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema: It defines the shape of the documents within that connection

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

// Model: It  is a class with which we construct documents

const User = mongoose.model("User", userSchema);

// Insert in mongoDB

let user1 = new User({ name: "Subhransu", email: "subhransu@gmail.com", age: 21 });
let user2 = new User({ name: "Ritesh", email: "ritesh@gmail.com", age: 20 });

user1.save();
user2.save();

User.insertMany([{ name: "Ankita", email: "ankita@gmail.com", age: 17 },  // Inserting multiple docs
{ name: "Neha", email: "neha@gmail.com", age: 21 }])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Find in Mongoose

User.find() // Returns a query object which is thennable
  .then((data) => {
    console.log(data);
  });

User.find({ age: { $gt: 20 } })
  .then((res) => {
    console.log(res);
  });

User.findById("68beed8b029368c41198737b")
  .then((data) => {
    console.log(data.name);
  });

// Find and update

User.findOneAndUpdate({ name: "Subhransu Kumar" }, { name: "S.Kumar" }, { new: true }) //if true, return the modified document rather than the original
  .then((res) => {
    console.log(res);
  })

Delete in mongoose

User.findOneAndDelete({ age: { $gt: 20 } }, { new: true })
  .then((res) => {
    console.log(res);
  })

User.findByIdAndDelete("68beed8b029368c41198737b", { new: true })
  .then((res) => {
    console.log(res);
  })

// Schema Validations: Basically rules for schema

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true // boolean or function, if true adds a required validator for this property
  },
  author: {
    type: String
  },
  price: {
    type: Number,
    min: [100, 'Price is too low for sell'], // Number, creates a validator that checks if the value is greater than or equal to the given minimum.
    default: 300 // Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
  }
})

const Book = mongoose.model("Book", bookSchema);

let b1 = new Book({ title: "AOT", author: "unknown", price: 700 });
let b2 = new Book({ title: "Naruto", author: "Masashi Kisimoto" });

b1.save()
  .then((res) => {
    console.log(`b1 saved successfully`);
  })
b2.save()
  .then((res) => {
    console.log(`b2 saved successfully`);
  });

// By default schema doesn't apply while updation. It only applies while insertion.

Book.findByIdAndUpdate("68bf1d4e9c7eee2b09bba651", { price: 99 }, { runValidators: true })
  .then((res) => {
    console.log("Successfully update the price");
  })
  .catch((err) => { // Will throw validator error
    // Handling errors
    console.log(err.errors.price.message);
  })

