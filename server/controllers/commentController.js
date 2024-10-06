const pool = require("../config/db");
const Comment = require("../models/Comment");

const commentController = {
  // add comment
  addComment: async (req, res) => {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    try {
      const result = await pool.query(
        "INSERT INTO comments (content, post_id, user_id) VALUES ($1, $2, $3) RETURNING *",
        [comment, postId, userId]
      );
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error adding comment", error: err.message });
    }
  },
  getComments: async (req, res) => {
    const { postId } = req.params;

    try {
      const result = await pool.query(
        "SELECT * FROM comments WHERE post_id = $1",
        [postId]
      );
      res.status(200).json(result.rows);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error getting comments", error: err.message });
    }
  },
  //   delete comment
  deleteComment: async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user.id;

    try {
      const result = await pool.query(
        "DELETE FROM comments WHERE id = $1 AND user_id = $2",
        [commentId, userId]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error deleting comment", error: err.message });
    }
  },
};

module.exports = commentController;
