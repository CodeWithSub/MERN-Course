const mongoose = require('mongoose');

main().then(() => {
  console.log("Connection Successful");
}).catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String
    }
  ]
});

const User = mongoose.model("User", userSchema);

const addUser = async (username, address) => {
  let user1 = new User({
    username: username,
    addresses: address
  });

  let result = await user1.save();
  console.log(result);
};

// one to few

addUser("Subhransu", [{ location: "Ranapasi", city: "Dhenkanal" }]);
addUser("Ritesh", [{ location: "Nayapali", city: "Bhubaneswar" }]);
addUser("Sourav", [{ location: "Nayapali", city: "Bhubaneswar" }, { location: "Sirigida", city: "Keonjhar" }]);

