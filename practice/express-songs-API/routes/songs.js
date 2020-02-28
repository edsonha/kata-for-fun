const express = require("express");
const songsRouter = express.Router();
const Joi = require("@hapi/joi");
const { songs } = require("../data/db.json");

//Simulate the asynchronous operation of getting information from Database
const DELAY = 10;

const getSongs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(songs);
    }, DELAY);
  });
};

const createSong = requestBody => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { title, artist } = requestBody;
      const newSong = { id: songs.length + 1, title, artist };
      songs.push(newSong);
      resolve(newSong);
    }, DELAY);
  });
};

const getSong = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const song = songs.find(song => song.id === parseInt(id));
      if (!song) {
        reject(new Error(`Unable to find song with id: ${id}`));
      }
      resolve(song);
    }, DELAY);
  });
};

const updateSong = (requestBody, songToUpdate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const oldSong = songToUpdate;
      const newSong = requestBody;
      const changedSong = Object.assign(oldSong, newSong);
      resolve(changedSong);
    }, DELAY);
  });
};

const deleteSong = songToDelete => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!songToDelete) {
        reject(new Error());
      }
      const deletedIndex = songs.indexOf(songToDelete);
      songs.splice(deletedIndex, 1);
      resolve(songToDelete);
    }, DELAY);
  });
};

//Songs API
const schema = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string()
    .min(3)
    .required(),
  artist: Joi.string()
    .min(3)
    .required()
});

songsRouter.param("id", async (req, res, next, id) => {
  try {
    req.song = await getSong(id);
    next();
  } catch (err) {
    err.code = 404;
    next(err);
  }
});

songsRouter.get("/", async (req, res, next) => {
  try {
    const allSongs = await getSongs();
    res.status(200).json(allSongs);
  } catch (err) {
    res.status(404).json({ message: "Unable to list all songs" });
  }
});

songsRouter.get("/:id", (req, res, next) => {
  try {
    res.status(200).json(req.song);
  } catch (err) {
    next(err);
  }
});

songsRouter.post("/", async (req, res, next) => {
  try {
    const validation = schema.validate(req.body);
    if (validation.error) {
      const error = new Error(validation.error.details[0].message);
      error.code = 400;
      return next(error);
    }
    const newSong = await createSong(req.body);
    res.status(201).json(newSong);
  } catch (err) {
    err.code = 404;
    next(err);
  }
});

songsRouter.put("/:id", async (req, res, next) => {
  try {
    const validation = schema.validate(req.body);
    if (validation.error) {
      const error = new Error(validation.error.details[0].message);
      error.code = 400;
      return next(error);
    }
    const changedSong = await updateSong(req.body, req.song);
    res.status(200).json(changedSong);
  } catch (err) {
    err.code = 404;
    next(err);
  }
});

songsRouter.delete("/:id", async (req, res, next) => {
  try {
    const songToDelete = await deleteSong(req.song);
    res.status(200).json(songToDelete);
  } catch (err) {
    res
      .status(404)
      .json({ message: `Unable to delete song with id ${req.params.id}` });
  }
});

songsRouter.use((err, req, res, next) => {
  res.status(err.code || 500).json({ message: err.message });
});

module.exports = songsRouter;
