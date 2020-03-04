const app = require("../app");
const request = require("supertest");

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toBe("Welcome to Express Books API");
  });
});
