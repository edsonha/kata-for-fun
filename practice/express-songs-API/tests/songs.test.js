const app = require("../app");
const request = require("supertest");
const { songs } = require("../data/db.json");

describe("Route /songs", () => {
  describe("GET", () => {
    it("/songs should return all the songs in the database", () => {
      return request(app)
        .get("/songs")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(songs);
        });
    });

    it("/songs/:id should return song with specified id", () => {
      return request(app)
        .get("/songs/2")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual({
            id: 2,
            title: "Alone",
            artist: "Alan Walker"
          });
        });
    });

    it("/songs/:id should return 404 if song id does not exist", () => {
      return request(app)
        .get("/songs/100")
        .then(response => {
          expect(response.status).toBe(404);
          expect(response.body.message).toBe(
            "Unable to find song with id: 100"
          );
        });
    });
  });

  describe("POST", () => {
    it("POST /songs should return a new song object", () => {
      const requestBody = { title: "test song", artist: "test artist" };
      const responseBody = { id: 4, title: "test song", artist: "test artist" };
      return request(app)
        .post("/songs")
        .send(requestBody)
        .then(response => {
          expect(response.status).toBe(201);
          expect(response.body).toEqual(responseBody);
          expect(songs.length).toBe(4);
        });
    });

    it("POST /songs should return 422 when no content is found", () => {
      const requestBody = {};
      return request(app)
        .post("/songs")
        .send(requestBody)
        .then(response => {
          expect(response.status).toBe(422);
          expect(response.body.message).toBe("No content is found");
          expect(songs.length).toBe(4);
        });
    });
  });

  describe("PUT", () => {
    it("PUT /songs/:id should return the updated song", () => {
      const requestBody = { title: "change song", artist: "change artist" };
      const responseBody = {
        id: 2,
        title: "change song",
        artist: "change artist"
      };
      return request(app)
        .put("/songs/2")
        .send(requestBody)
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(responseBody);
        });
    });

    it("PUT /songs/:id should return 404 if song id does not exist", () => {
      const requestBody = { title: "change song", artist: "change artist" };
      return request(app)
        .put("/songs/100")
        .send(requestBody)
        .then(response => {
          expect(response.status).toBe(404);
          expect(response.body).toEqual({
            message: "Unable to find song with id: 100"
          });
        });
    });
  });

  describe("DELETE", () => {
    it("DELETE /songs/:id should return the deleted song", () => {
      const responseBody = { id: 3, title: "Faded", artist: "Alan Walker" };
      return request(app)
        .delete("/songs/3")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(responseBody);
          expect(songs.length).toBe(3);
        });
    });

    it("DELETE /songs/:id should return 404 if song id does not exist", () => {
      return request(app)
        .delete("/songs/100")
        .then(response => {
          expect(response.status).toBe(404);
          expect(response.body).toEqual({
            message: "Unable to find song with id: 100"
          });
        });
    });
  });
});
