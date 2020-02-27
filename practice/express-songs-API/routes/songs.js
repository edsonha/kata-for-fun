const express = require("express");
const songsRouter = express.Router();
const { songs } = require("../data/db.json");

songsRouter.param("id", (req, res, next, id) => {
  const song = songs.find(song => song.id === parseInt(id));
  if (!song) {
    error = new Error(`Unable to find song with id: ${id}`);
    error.code = 404;
    throw error;
  }
  req.song = song;
  next();
});

songsRouter.get("/", (req, res, next) => {
  try {
    res.status(200).json(songs);
  } catch (err) {
    next(err);
  }
});

songsRouter.get("/:id", (req, res, next) => {
  try {
    res.status(200).json(req.song);
  } catch (err) {
    next(err);
  }
});

songsRouter.post("/", (req, res, next) => {
  try {
    const { title, artist } = req.body;
    if (!title || !artist) {
      error = new Error(`No content is found`);
      error.code = 422;
      throw error;
    }
    const newSong = { id: songs.length + 1, title, artist };
    songs.push(newSong);
    res.status(201).json(newSong);
  } catch (err) {
    next(err);
  }
});

songsRouter.put("/:id", (req, res, next) => {
  try {
    const oldSong = req.song;
    const newSong = req.body;
    const changedSong = Object.assign(oldSong, newSong);
    res.status(200).json(changedSong);
  } catch (err) {
    next(err);
  }
});

songsRouter.delete("/:id", (req, res, next) => {
  try {
    const songToDelete = req.song;
    const deletedIndex = songs.indexOf(songToDelete);
    songs.splice(deletedIndex, 1);
    res.status(200).json(songToDelete);
  } catch (err) {
    next(err);
  }
});

songsRouter.use((err, req, res, next) => {
  res.status(err.code || 500).json({ message: err.message });
});

module.exports = songsRouter;
