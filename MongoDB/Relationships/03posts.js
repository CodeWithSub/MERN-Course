const { get } = require('http');
const mongoose = require('mongoose');
const { type } = require('os');

main().then(() => {
  console.log("Connection Successful");
})
  .catch((err) => {
    console.log(err);
  })

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}
// One to squillions

const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user = await User.findOne({ username: "subhransu123" });

  let post = new Post(
    { content: "Byy", likes: 15 }
  );

  post.user = user;

  await post.save();
  console.log("Saved");
}

const getData = async () => {
  let result = await Post.find({}).populate("user", "email");
  console.log(result);
}

// addData();
getData();