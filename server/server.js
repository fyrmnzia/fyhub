const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
