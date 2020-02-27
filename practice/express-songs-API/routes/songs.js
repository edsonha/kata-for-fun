const express = require("express");
const songsRouter = express.Router();
const { songs } = require("../data/db.json");

songsRouter.param("id", (req, res, next, id) => {
  const song = songs.find(song => song.id === parseInt(id));
  if (song) {
    req.song = song;
    next();
  } else {
    res.status(404).json({ message: "Song is not found" });
  }
});

songsRouter.get("/", (req, res) => {
  res.status(200).json(songs);
});

songsRouter.get("/:id", (req, res) => {
  res.status(200).json(req.song);
});

songsRouter.post("/", (req, res) => {
  const { title, artist } = req.body;
  const newSong = { id: songs.length + 1, title, artist };
  songs.push(newSong);
  res.status(201).json(newSong);
});

songsRouter.put("/:id", (req, res) => {
  const oldSong = req.song;
  const newSong = req.body;
  const changedSong = Object.assign(oldSong, newSong);
  res.status(200).json(changedSong);
});

songsRouter.delete("/:id", (req, res) => {
  const songToDelete = req.song;
  const deletedIndex = songs.indexOf(songToDelete);
  songs.splice(deletedIndex, 1);
  res.status(200).json(songToDelete);
});

module.exports = songsRouter;
