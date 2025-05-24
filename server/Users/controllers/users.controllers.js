const bcrypt = require("bcrypt");
const User = require("../models/User");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const hashedPass = await bcrypt.hash(password, await bcrypt.genSalt(10));
    const user = { email, password: hashedPass };
    await User.findByIdAndUpdate(id, user);
    res.status(200).json({ message: "user information updated." });
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted." });
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
