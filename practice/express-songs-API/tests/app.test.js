const app = require("../app");
const request = require("supertest");

describe("GET /", () => {
  it("should return a welcome message", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toBe("Welcome to Express Songs API");
      });
  });
});
