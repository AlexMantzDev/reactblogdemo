const User = require("../../Users/models/User");

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    await User.create({ email, password });
    res.status(201).json({ message: "user registered." });
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

const login = async (req, res) => {
  res.status(200).json({ message: "login successful." });
};

const logout = async (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "logout error", error: err });
    }
    res.status(200).json({ message: "logout successful." });
  });
};

const me = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports = { register, login, logout, me };
