const express = require("express");
const Router = express.Router();
const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

Router.get("/", getAllUser);
Router.get("/:id", getUserById);
Router.delete("/:id", deleteUser);
Router.put("/:id", updateUser);

module.exports = Router;
