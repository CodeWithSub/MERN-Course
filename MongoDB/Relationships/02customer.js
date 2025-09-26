const mongoose = require('mongoose');

main().then(() => {
  console.log("Connection Successful");
})
  .catch((err) => {
    console.log(err);
  })

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema)

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Subhransu"
  });
  let order1 = await Order.findOne({ item: "Samosa" });
  let order2 = await Order.findOne({ item: "Cofee" });

  cust1.orders.push(order1)
  cust1.orders.push(order2)

  let result = await cust1.save();
  console.log(result);

}

const findCustomer = async () => {

  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
}

// const addOrders = async () => {
//   try {
//     let res = await Order.insertMany(
//     [{ item: "Samosa", price: 12 },
//     { item: "Pizza", price: 100 },
//     { item: "Cofee", price: 60 }]
//   );
//   console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

// addOrders();
// addCustomer();
findCustomer()