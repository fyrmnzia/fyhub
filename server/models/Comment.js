const pool = require("../config/db");

const Comment = {
  create: async (content, post_id, user_id) => {
    const result = await pool.query(
      "INSERT INTO comments (content, post_id, user_id) VALUES ($1, $2, $3) RETURNING *",
      [content, post_id, user_id]
    );
    return result.rows[0];
  },

  getByPostId: async (post_id) => {
    const result = await pool.query(
      "SELECT * FROM comments WHERE post_id = $1",
      [post_id]
    );
    return result.rows;
  },
};

module.exports = Comment;
