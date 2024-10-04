const pool = require("../config/db");

const User = {
  create: (username, email, password) => {
    const result = pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );
    return result.rows[0];
  },

  findByEmail: async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  },
};

module.exports = User;
