const Post = require("../models/Posts");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({ title, content });
    await post.save();
    res.status(201).json({ message: "post created." });
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const update = {
      title,
      content,
    };
    const post = await Post.findByIdAndUpdate(id, update);
    console.log(post);
    res.status(200).json({ message: "post updated." });
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    console.log(post);
    res.status(200).json({ message: "post deleted." });
  } catch (err) {
    res.status(500).json({ message: "internal server error.", error: err });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
