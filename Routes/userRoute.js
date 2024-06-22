const express = require("express");
const User = require("../Models/Users");

const {
  user,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controllers/userControllers");
const router = express.Router();

router.get("/user", user);
router.post("/createuser", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
