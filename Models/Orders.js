const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: Number,
  orderId: String,
  userId: Number,
  productId: Number,
  quantity: Number,
  totalPrice: Number,
  status: { type: String, default: "Pending" },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
