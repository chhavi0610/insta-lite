
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({
  origin: "http://localhost:4200"
}));
app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

const followRoutes = require("./routes/follow");
app.use("/follow", followRoutes);
const feedRoutes = require("./routes/feed");
app.use("/feed" , feedRoutes);
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server started");
});