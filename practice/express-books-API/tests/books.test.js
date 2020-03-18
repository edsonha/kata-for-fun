const app = require("../app");
const request = require("supertest");
const { books } = require("../data/db.json");

const route = (params = "") => {
  const path = "/books";
  return `${path}/${params}`;
};

describe("Route /books", () => {
  describe("GET", () => {
    it("/books should return all the books in the database", async () => {
      const response = await request(app).get(route());
      expect(response.status).toBe(200);
      expect(response.body).toEqual(books);
      expect(response.body.length).toBe(6);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("/books/?title=1984 should return a book matching the title query", async () => {
      const response = await request(app)
        .get(route())
        .query({ title: "1984" });
      expect(response.body).toEqual([
        { id: 2, title: "1984", author: "George Orwell" }
      ]);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("/books/?author=George Orwell should return books matching the author query", async () => {
      const response = await request(app)
        .get(route())
        .query({ author: "George Orwell" });
      expect(response.body).toEqual([
        { id: 1, title: "Animal Farm", author: "George Orwell" },
        { id: 2, title: "1984", author: "George Orwell" },
        { id: 3, title: "Homage to Catalonia", author: "George Orwell" },
        { id: 4, title: "The Road to Wigan Pier", author: "George Orwell" }
      ]);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
  });
});
