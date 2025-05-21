const express = require("express");
const { createPost, getAllPosts } = require("../controllers/posts.controllers");
const Router = express.Router();

Router.get("/", getAllPosts);
// Router.get("/:id", () => {});
Router.post("/", createPost);
// Router.patch("/:id", () => {});
// Router.delete("/:id", () => {});

module.exports = Router;
