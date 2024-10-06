const Post = require("../models/Post");
const Comment = require("../models/Comment");

const postController = {
  createPost: async (req, res) => {
    const { title, content } = req.body;
    const user_id = req.user.id;
    const post = await Post.create(title, content, user_id);
    res.status(201).json(post);
  },

  getAllPosts: async (req, res) => {
    const posts = await Post.getAll();
    res.status(200).json(posts);
  },

  getPostById: async (req, res) => {
    const { id } = req.params;
    const post = await Post.getById(id);
    res.status(200).json({ post, comments });
  },
};

module.exports = postController;
