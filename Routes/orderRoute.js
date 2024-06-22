const express = require("express");
const Order = require("../Models/Orders");

const {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../Controllers/orderControllers");
const router = express.Router();

router.get("/order", getOrder);
router.post("/createorder", createOrder);
router.put("/order/:id", updateOrder);
router.delete("/order/:id", deleteOrder);

module.exports = router;
