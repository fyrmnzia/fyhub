const Comment = require("../models/Comment");

const commentController = {
  addComment: async (req, res) => {
    const { comment } = req.body;
    const postId = req.params.postId;
    const userId = req.user.id;
    const newComment = await Comment.create(comment, postId, userId);
    res.status(201).json(newComment);
  },
};

module.exports = commentController;
