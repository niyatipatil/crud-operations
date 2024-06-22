const express = require("express");
const Product = require("../Models/Product");

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productControllers");
const router = express.Router();

router.get("/product", getProduct);
router.post("/createproduct", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
