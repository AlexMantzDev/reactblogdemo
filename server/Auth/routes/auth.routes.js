const express = require("express");
const Router = express.Router();

const { authenticate } = require("../middleware/auth.middleware");
const { login, me, register } = require("../controllers/auth.controllers");
const passport = require("passport");

Router.post("/register", register);
Router.post("/login", passport.authenticate("local"), login);
Router.get("/me", authenticate, me);

module.exports = Router;
