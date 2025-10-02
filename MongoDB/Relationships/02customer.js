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

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema)

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Bunty"
  });
  let order1 = await Order.findOne({ item: "Cold cofee" });
  let order2 = await Order.findOne({ item: "Jalebi" });
  let order3 = await Order.findOne({ item: "Chai" });

  cust1.orders.push(order1)
  cust1.orders.push(order2)
  cust1.orders.push(order3)

  let result = await cust1.save();
  console.log(result);

}

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
}

const addOrders = async () => {
  try {
    let res = await Order.insertMany(
      [{ item: "Jalebi", price: 6 },
      { item: "Cold cofee", price: 90 },
      { item: "Cofee", price: 60 },
      { item: "Burger", price: 80 },
      { item: "Chowmin", price: 40 }]
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// addOrders();
// addCustomer();
// findCustomer();

// Handling Deletion

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("68d7b33fac0f99f7235c5ff6");
  console.log(data);
}

delCust();