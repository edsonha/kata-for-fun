const express = require("express");
const app = express();
const songsRouter = require("./routes/songs");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Express Songs API");
});

app.use("/songs", songsRouter);

module.exports = app;
