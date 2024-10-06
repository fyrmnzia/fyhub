const express = require("express");
const router = express.Router();
const {
  addComment,
  getComments,
  deleteComment,
} = require("../controllers/commentController");

router.post("/:postId/comments", addComment);
router.get("/:postId/comments", getComments);
router.delete("/:commentId", deleteComment);

module.exports = router;
