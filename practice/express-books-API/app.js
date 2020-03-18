const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Express Books API");
});

app.use("/books", booksRouter);

module.exports = app;
