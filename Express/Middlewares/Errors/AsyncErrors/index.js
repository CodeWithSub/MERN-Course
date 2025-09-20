const express = require('express');
const app = express();
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))


const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("DB connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// Index route
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats })
  }
  catch (err) {
    next(err)
  }
});


// New route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs")
});

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      next(err)
    })
  }
}

// Show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
  let { id } = req.params;
  const chat = await Chat.findById(id);
  if (!chat) {
    throw new ExpressError(404, "Chat not found")
  }
  res.render("edit.ejs", { chat });
}));


// Create route
app.post("/chats", asyncWrap(async (req, res, next) => {

  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
  })
  await newChat.save()
  res.redirect("/chats");
})
);

//  Edit route
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);

    if (!chat) {
      // Chat not found → pass to error middleware
      throw new ExpressError(404, "Chat not found");
    }

    res.render("edit.ejs", { chat })
  } catch (err) {
    next(err)
  }
})

// Update route
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats")
  } catch (err) {
    next(err)
  }
})

// delete route
app.delete("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats")
  } catch (err) {
    next(err)
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message)
})

app.listen("8080", () => {
  console.log("Server is listening");
});