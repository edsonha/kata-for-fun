const express = require("express");
const booksRouter = express.Router();
const { books } = require("../data/db.json");
const { v4: uuidv4 } = require("uuid");

const filterBookBy = (property, value) => {
  return books.filter(book => book[property] === value);
};

booksRouter.param("id", async (req, res, next, id) => {
  const book = books.find(book => book.id === id);
  if (!book) {
    const error = new Error(`Unable to find book with id: ${id}`);
    error.code = 404;
    return next(error);
  }
  req.book = book;
  next();
});

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

booksRouter.delete("/:id", (req, res, next) => {
  try {
    const deletedIndex = books.indexOf(req.book);
    books.splice(deletedIndex, 1);
    res.status(200).json(req.book);
  } catch (err) {
    next(err);
  }
});

booksRouter.put("/:id", (req, res, next) => {
  try {
    const oldBook = req.book;
    const newBook = req.body;
    const edittedSong = Object.assign(oldBook, newBook);
    res.status(202).json(edittedSong);
  } catch (err) {
    next(err);
  }
});

booksRouter.use((err, req, res, next) => {
  res.status(err.code || 500).json({ message: err.message });
});

module.exports = booksRouter;
