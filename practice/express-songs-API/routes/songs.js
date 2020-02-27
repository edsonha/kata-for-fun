const express = require("express");
const songsRouter = express.Router();
const { songs } = require("../data/db.json");

songsRouter.get("/", (req, res) => {
  res.status(200).json(songs);
});

songsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundSong = songs.find(song => song.id === parseInt(id));
  return foundSong
    ? res.status(200).json(foundSong)
    : res.status(404).json("Song is not found");
});

songsRouter.post("/", (req, res) => {
  const { title, artist } = req.body;
  const newSong = { id: songs.length + 1, title, artist };
  songs.push(newSong);
  res.status(201).json(newSong);
});

songsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const foundSong = songs.find(song => song.id === parseInt(id));
  if (foundSong) {
    const changedSong = Object.assign(foundSong, req.body);
    res.status(200).json(changedSong);
  } else {
    res.status(404).json("Song is not found");
  }
});

songsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const songToDelete = songs.find(song => song.id === parseInt(id));
  const index = songs.indexOf(songToDelete);
  songs.splice(index, 1);
  return songToDelete
    ? res.status(200).json(songToDelete)
    : res.status(404).json("Song is not found");
});

module.exports = songsRouter;
