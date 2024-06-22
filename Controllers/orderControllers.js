const Order = require("../Models/Orders");
const getOrder = (req, res) => {
  res.send("Hello order is here!");
};

const createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send(order);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const order = await Order.findByIdAndUpdate(id, updatedData, { new: true });
  res.send(order);
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);
  res.send({ message: "Order deleted successfully" });
};

module.exports = { getOrder, createOrder, updateOrder, deleteOrder };
