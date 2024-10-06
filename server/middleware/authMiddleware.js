const jwt = require("jsonwebtoken");

const authMiiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token is invalid" });
  }
};

module.exports = authMiiddleware;
