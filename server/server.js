const express = require("express");
const path = require("path");
const postRoutes = require("./routes/posts.routes");

const { dbConnect } = require("./database");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use("/api/v1/posts", postRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

app.listen(port, async () => {
  await dbConnect();
  console.log(`server listening on port ${port}`);
});
