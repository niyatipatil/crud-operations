const User = require("../Models/Users");
const user = (req, res) => {
  res.send("Hello from user");
};

const createUser = async (req, res) => {
  const user1 = new User(req.body);
  await user1.save();
  res.send(user1);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const user = await User.findByIdAndUpdate(id, updatedData, { new: true });
  res.send(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send({ message: "User deleted successfully" });
};

module.exports = { user, createUser, updateUser, deleteUser };
