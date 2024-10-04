const pool = require("../config/db");

const Post = {
  create: async (title, content, user_id) => {
    const result = await pool.query(
      "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, user_id]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    return result.rows[0];
  },
};

module.exports = Post;
