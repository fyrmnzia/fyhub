const express = require("express");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.post("/", authMiddleware, postController.createPost);
router.post("/:id/comments", authMiddleware, commentController.addComment);

module.exports = router;
