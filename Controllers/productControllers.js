const Product = require("../Models/Product");
const getProduct = (req, res) => {
  res.send("Product is here!");
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const product = await Product.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  res.send(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.send({ message: "Product deleted successfully" });
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
