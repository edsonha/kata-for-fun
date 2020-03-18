const express = require("express");
const booksRouter = express.Router();
const { books } = require("../data/db.json");
const { v4: uuidv4 } = require("uuid");

const filterBookBy = (property, value) => {
  return books.filter(book => book[property] === value);
};

booksRouter.get("/", (req, res, next) => {
  try {
    const { title, author } = req.query;
    if (title) {
      res.status(200).json(filterBookBy("title", title));
    } else if (author) {
      res.status(200).json(filterBookBy("author", author));
    } else {
      res.status(200).json(books);
    }
  } catch (err) {
    next(err);
  }
});

booksRouter.post("/", (req, res, next) => {
  try {
    const newBook = req.body;
    newBook.id = uuidv4();
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
});

booksRouter.use((err, req, res, next) => {
  res.status(err.code || 500).json({ message: err.message });
});

module.exports = booksRouter;
