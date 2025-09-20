const mongoose = require('mongoose');
const Chat = require('./models/chat.js');


main()
.then(()=>{
  console.log("DB connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

Chat.insertMany([{ from: "Ritesh", to: "Neha", msg: "Hiiii", created_at: new Date() },
  { from: "Disha", to: "Lima", msg: "Hello there", created_at: new Date() },
  { from: "Eren", to: "Miaksa", msg: "Tatake", created_at: new Date() },
  { from: "Mikasa", to: "Eren", msg: "Arigato", created_at: new Date() },
  { from: "Naruto", to: "Hinata", msg: "Konichiwa", created_at: new Date() },
  { from: "Sakura", to: "Sasuke", msg: "What's up?", created_at: new Date() },
])
.then(()=>{
  console.log("chat saved");
})
.catch((err) =>{
  console.log("-----------------");
   console.log(err);
  })
