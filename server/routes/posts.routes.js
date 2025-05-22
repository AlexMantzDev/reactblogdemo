const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/posts.controllers");
const Router = express.Router();

Router.get("/", getAllPosts);
Router.get("/:id", getPostById);
Router.post("/", createPost);
Router.put("/:id", updatePost);
Router.delete("/:id", deletePost);

module.exports = Router;
