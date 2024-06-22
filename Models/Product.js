const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  price: Number,
  description: String,
  category: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
