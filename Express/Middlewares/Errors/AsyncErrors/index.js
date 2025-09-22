const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require("method-override");
const Chat = require('./models/chat.js');

const app = express();

// ----- App setup -----
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ----- DB Connection -----
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
  console.log("✅ DB connection successful");
}

main().catch(err => {
  console.error("❌ DB connection failed:", err);
  process.exit(1);
});

// ----- Routes -----
// Index
app.get("/chats", async (req, res) => {
  const chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// New chat form
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Show chat
app.get("/chats/:id", async (req, res) => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) throw new ExpressError(404, "Chat not found");
  res.render("edit.ejs", { chat });
});

// Create chat
app.post("/chats", async (req, res) => {
  const { from, to, msg } = req.body;
  const newChat = new Chat({ from, to, msg, created_at: new Date() });
  await newChat.save();
  res.redirect("/chats");
});

// Edit chat form
app.get("/chats/:id/edit", async (req, res) => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) throw new ExpressError(404, "Chat not found");
  res.render("edit.ejs", { chat });
});

// Update chat
app.put("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { msg: newMsg } = req.body;
  const updated = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  if (!updated) throw new ExpressError(404, "Chat not found");
  res.redirect("/chats");
});

// Delete chat
app.delete("/chats/:id", async (req, res) => {
  const deleted = await Chat.findByIdAndDelete(req.params.id);
  if (!deleted) throw new ExpressError(404, "Chat not found");
  res.redirect("/chats");
});

// ----- 404 handler -----
app.use((req, res) => {
  throw new ExpressError(404, "Page not found");
});

const handleValidationError = (err) =>{
  console.log(err.name);
  return err
}

app.use((err,req,res,next)=>{
  console.log(err.name);
  if (err.name === "ValidationError") {
    handleValidationError(err)
  }
  next(err)
})

// ----- Central Error Handler -----
app.use((err, req, res, next) => {
  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    console.warn("⚠️ Validation Error:", err.message);
    err.status = 400; // Bad Request
  }

  console.error("❌ Error:", err);
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).send(message);
});
// ----- Start server -----
const PORT = 8080;
app.listen(PORT, () => console.log(`🚀 Server is listening on port ${PORT}`));
